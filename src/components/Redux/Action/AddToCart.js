import { ADD_TO_CART, REMOVE_FROM_CART } from "../Constant";

export const CLickAddToCart = () => (dispatch) => {
  dispatch({
    type: ADD_TO_CART,
  });
};

export const RemoveFromCart = () => (dispatch) => {
  dispatch({
    type: REMOVE_FROM_CART,
  });
};
