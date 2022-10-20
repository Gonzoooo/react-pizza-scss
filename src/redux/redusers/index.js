import {combineReducers} from "redux";
import filterReducer from "../redusers/filters";
import pizzasReducer from "../redusers/pizzas";
import cartReducer from "../redusers/cart";

const rootReducer = combineReducers({
    filters: filterReducer,
    pizzas: pizzasReducer,
    cart: cartReducer,
});

export default rootReducer;
