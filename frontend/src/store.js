import data from "./data";
import { createStore } from "redux";

const initialState = {};
const reducer = (state, action) => {
  return { product: data.products };
};

const store = createStore(reducer, initialState);
export default store;
