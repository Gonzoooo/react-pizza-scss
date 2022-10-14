import {combineReducers} from "redux";
import filterReducer from "../redusers/filters";
import pizzasReducer from "../redusers/pizzas";

const rootReducer = combineReducers({
    filter: filterReducer,
    pizzas: pizzasReducer,
});

export default rootReducer;
