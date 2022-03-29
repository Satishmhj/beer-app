import { BEER_LIST, BEER_LIST_FETCHING } from "../Constant";

const INITIAL_STATE = {
  beers: [],
  isLoading: false,
};

const beerReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case BEER_LIST_FETCHING:
      return {
        ...state,
        isLoading: true,
      };
    case BEER_LIST:
      return {
        ...state,
        isLoading: false,
        beers: action.payload,
      };

    default:
      return state;
  }
};

export default beerReducer;
