import { FILTER_BEERS } from "../Constant";

export const filterBeers = (filters) => (dispatch) => {
  dispatch({
    type: FILTER_BEERS,
    filters,
  });
};
