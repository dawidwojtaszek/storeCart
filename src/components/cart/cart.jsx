import { CartItemList } from "../cart-item-list/cart-item-list";
import { useContext } from "react";
import CartContext from "../../Context/cart-context";

export const Cart = () => {
  const { items } = useContext(CartContext);
  return (
    <div className="container">
      <h1>Cart items:</h1>
      {items.length === 0 ? <div>Cart is Empty</div> : <CartItemList />}
    </div>
  );
};
