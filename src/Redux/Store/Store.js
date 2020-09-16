const { createStore } = require("redux");
const { default: CartReducers } = require("../Reducers/CartReducers");

export const Store = createStore(CartReducers);
