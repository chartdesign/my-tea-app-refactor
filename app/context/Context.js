"use client";
import { createContext, useContext, useReducer } from "react";
import { cartReducer, productReducer } from "./Reducers";
import { products } from "../data";

const Cart = createContext();

const Context = ({ children }) => {
  const items = products;

  const [state, dispatch] = useReducer(cartReducer, {
    products: products,
    cart: [],
  });

  const [productState, productDispatch] = useReducer(productReducer, {
    byStock: false,
    byFastDelivery: false,
    byRating: 0,
    searchQuery: "",
  });

  // console.log(productState);

  return (
    <Cart.Provider value={{ state, dispatch, productState, productDispatch }}>
      {children}
    </Cart.Provider>
  );
};

export const CartState = () => {
  return useContext(Cart);
};

export default Context;
