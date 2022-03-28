import { BEER_LIST } from "../Constant";

export const beerApi = () => async (dispatch) => {
  let res = await fetch("https://api.punkapi.com/v2/beers")
    .then((response) => response.json())
    .then((data) => console.log(data));

  dispatch({
    type: BEER_LIST,
    payload: res,
  });
};
