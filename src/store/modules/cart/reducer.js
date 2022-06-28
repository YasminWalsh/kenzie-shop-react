import { cart_ADD, cart_REMOVE } from "./actionTypes";

const reducerCart = (state = [], action) => {
  console.log("CART", action);
  switch (action.type) {
    case cart_ADD:
      const { product } = action;
      return [...state, product];

    case cart_REMOVE:
      const { id } = action;
      const newList = state.filter((product) => product.id !== id);
      return newList;

    default:
      return state;
  }
};

export default reducerCart;
