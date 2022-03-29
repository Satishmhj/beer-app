import { combineReducers } from "redux";
import beerReducer from "./Reducer/BeerReducer";

export const rootReducer = combineReducers({
  beers: beerReducer,
});

export default rootReducer;
