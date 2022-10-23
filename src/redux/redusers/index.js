import {combineReducers} from "redux";
import filters from "../redusers/filters";
import pizzas from "../redusers/pizzas";
import cart from "../redusers/cart";

const rootReducer = combineReducers({
    filters,
    pizzas,
    cart,
});

export default rootReducer;
