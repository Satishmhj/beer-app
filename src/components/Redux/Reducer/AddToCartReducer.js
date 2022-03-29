import { ADD_TO_CART, REMOVE_FROM_CART } from "../Constant";

const INITIAL_STATE = {
  add: 0,
};

const addReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        add: state.add + 1,
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        add: state.add - 1,
      };

    default:
      return state;
  }
};
export default addReducer;
