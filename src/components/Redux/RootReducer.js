import { combineReducers } from "redux";
import addReducer from "./Reducer/AddToCartReducer";
import beerReducer from "./Reducer/BeerReducer";

export const rootReducer = combineReducers({
  beers: beerReducer,
  add: addReducer,
});

export default rootReducer;
