import { FILTER_BEERS, REMOVE_FILTER } from "../Constant";

export const filterBeers = (filters) => (dispatch) => {
  dispatch({
    type: FILTER_BEERS,
    filters,
  });
};
export const removeFilter = () => (dispatch) => {
  dispatch({
    type: REMOVE_FILTER,
  });
};
