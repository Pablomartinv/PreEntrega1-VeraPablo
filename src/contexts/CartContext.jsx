import { createContext, useState } from 'react';

export const CartContext = createContext();

export const Provider = ({ children }) => {
  const [cartList, setCartList] = useState([]);

  const clearCartList = () => setCartList([]);

  const removeProduct = (id) => {
    const removed = cartList.filter((i) => i.id !== id);
    setCartList(removed);
  };

  const isInCart = (id) => {
    return cartList.some((repeatedProduct) => repeatedProduct.id === id);
  };

  const addToCart = (item, quantity) => {
    if (isInCart(item.id)) {
      const updateQuantity = cartList.map((i) => {
        if (i.id === item.id) {
          return {
            ...i,
            quantity: i.quantity + quantity,
          };
        } else {
          return i;
        }
      });
      setCartList(updateQuantity);
    } else {
      setCartList([...cartList, item]);
    }
  };

  return (
    <CartContext.Provider
      value={{
        cartList,
        clearCartList,
        removeProduct,
        addToCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
