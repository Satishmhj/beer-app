import { BEER_LIST, BEER_LIST_FETCHING } from "../Constant";

export const beerApi = () => async (dispatch) => {
  dispatch({
    type: BEER_LIST_FETCHING,
  });
  let res = await fetch("https://api.punkapi.com/v2/beers")
    .then((response) => response.json())
    .then((data) => {
      return data;
    });

  dispatch({
    type: BEER_LIST,
    payload: res.data,
  });
};
