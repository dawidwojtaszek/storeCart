import { CartItemList } from "../cart-item-list/cart-item-list";
import { useContext } from "react";
import CartContext from "../../Context/cart-context";
import "./cart.scss";

export const Cart = () => {
  const { items } = useContext(CartContext);
  return (
    <div className="container">
      <h2 className="cart-heading">Cart items:</h2>
      {items.length === 0 ? (
        <div className="empty-cart">Cart is Empty</div>
      ) : (
        <CartItemList />
      )}
    </div>
  );
};
