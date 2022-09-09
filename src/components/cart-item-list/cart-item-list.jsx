import { CartItem } from "../cart-item/cart-item";
import { useContext } from "react";
import CartContext from "../../Context/cart-context";
import "./cart-item-list.scss";

export const CartItemList = () => {
  const { items } = useContext(CartContext);
  return (
    <table className="cart-table">
      <thead>
        <tr>
          <th>Photo</th>
          <th>Name</th>
          <th>Quantity</th>
          <th>Price</th>
          <th>Total</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item) => (
          <CartItem
            key={item.id}
            name={item.title}
            quantity={item.quantity}
            price={item.price}
            imgUrl={item.image}
          />
        ))}
      </tbody>
    </table>
  );
};
