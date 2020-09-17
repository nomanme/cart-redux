const { createStore } = require("redux");
const { default: CartReducers } = require("../Reducers/CartReducers");

const Store = createStore(CartReducers);
export default Store;