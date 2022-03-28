import { combineReducers } from "redux";
import beerReducer from "./Reducer/BeerReducer";

export const rootReducer = combineReducers({
  beer: beerReducer,
});

export default rootReducer;
