import { BEER_LIST, BEER_LIST_FETCHING, FILTER_BEERS } from "../Constant";

const INITIAL_STATE = {
  beers: [],
  isLoading: false,
  filterBeers: {},
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
    case FILTER_BEERS:
      return {
        ...state,
        filterBeers: action.filters,
      };

    default:
      return state;
  }
};

export default beerReducer;
