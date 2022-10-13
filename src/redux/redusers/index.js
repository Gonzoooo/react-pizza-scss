import {combineReducers} from "redux";
import filterReducer from "../redusers/filters";
import pizzasReducer from "../redusers/pizzas";

const rootReducer = combineReducers({
    filterReducer,
    pizzasReducer
});

export default rootReducer;
