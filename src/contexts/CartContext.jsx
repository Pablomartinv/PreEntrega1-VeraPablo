import { createContext, useState } from 'react';

export const CartContext = createContext();

export const Provider = ({ children }) => {
  const [cartList, setCartList] = useState([]);

  const clearCartList = () => setCartList([]);

  const removeProduct = (id) => {
    const removed = products.filter((item) => item.id !== id);
    setCartList(removed);
  };

  const addToCart = (item) => {
    if (isInCart(item.id)) {
      setCartList((prev) => [...prev, { ...item, quantity }]);
    } else {
      setCartList([...cartList, item]);
    }
  };

  const isInCart = (item) => {
    return cartList.some((p) => p.id === item.id);
  };

  return (
    <CartContext.Provider
      value={{ cartList, clearCartList, removeProduct, addToCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
