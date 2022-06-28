import { legacy_createStore as createStore, combineReducers } from "redux";
import reducerCart from "./modules/cart/reducer";
import reducerProducts from "./modules/product/reducer";

const reducers = combineReducers({
  products: reducerProducts,
  cart: reducerCart,
});

const store = createStore(reducers);

export default store;
