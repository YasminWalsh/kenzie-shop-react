import { cart_ADD, cart_REMOVE } from "./actionTypes";

export const addProduct = (product) => ({
  type: cart_ADD,
  product,
});

export const removeProduct = (id) => ({
  type: cart_REMOVE,
  id,
});
