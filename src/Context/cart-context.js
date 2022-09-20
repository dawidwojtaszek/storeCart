import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  const addItems = (item) => {
    const existingItem = items.filter(
      (existingItem) => existingItem.id === item.id
    );
    if (existingItem.length !== 0) {
      const newList = items.map((fItem) => {
        if (fItem.id === item.id) {
          return { ...fItem, quantity: fItem.quantity + 1 };
        } else return { ...fItem };
      });
      setItems(newList);
    } else {
      const newItem = { ...item, quantity: 1 };
      setItems([...items, newItem]);
    }
  };
  const removeItem = (itemId) => {
    const newItemsList = items.filter((fItem) => fItem.id !== itemId);
    setItems(newItemsList);
  };

  return (
    <CartContext.Provider value={{ items, addItems, removeItem }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
