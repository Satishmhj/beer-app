import { BEER_LIST, BEER_LIST_FETCHING } from "../Constant";

export const beerApi = () => async (dispatch) => {
  dispatch({
    type: BEER_LIST_FETCHING,
  });
  let res = await fetch("https://api.sampleapis.com/beers/ale")
    .then((response) => response.json())
    .then((data) => {
      return data;
    });

    console.log(res);

  dispatch({
    type: BEER_LIST,
    payload: res,
  });
};
