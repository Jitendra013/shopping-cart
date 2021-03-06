import React, { createContext, useEffect, useReducer } from "react";
import { products } from "./products";
import ContextCart from "./ContextCart";
import { reducer } from "./reducer";
import "./cart.css";

export const CartContext = createContext();
const initialState = {
  item: products,
  totalAmount: 0,
  totalItem: 0,
};
const Cart = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const removeItem = (id) => {
    return dispatch({
      type: "REMOVE_ITEM",
      payload: id,
    });
  };

  const clearCart = () => {
    return dispatch({
      type: "REMOVE_ALL_ITEMS",
    });
  };

  const increment = (id) => {
    return dispatch({
      type: "INCREMENT_ITEM",
      payload: id,
    });
  };

  const decrement = (id) => {
    return dispatch({
      type: "DCREMENT_ITEM",
      payload: id,
    });
  };
  useEffect(() => {
    dispatch({ type: "GET_TOTAL" });
    console.log("useEffect Check");
  }, [state.item]);
  return (
    <>
      <CartContext.Provider
        value={{ ...state, removeItem, clearCart, increment, decrement }}
      >
        <ContextCart />
      </CartContext.Provider>
    </>
  );
};

export default Cart;
