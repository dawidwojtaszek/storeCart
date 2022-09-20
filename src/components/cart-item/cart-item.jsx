import "./cart-item.scss";
import { useContext } from "react";
import CartContext from "../../Context/cart-context";

export const CartItem = ({ name, quantity, price, imgUrl, id }) => {
  const { removeItem } = useContext(CartContext);
  return (
    <tr>
      <td>
        <img src={imgUrl} alt="product" className="table-img" />
      </td>
      <td>{name}</td>
      <td className="align-center">{quantity}</td>
      <td>${price}</td>
      <td>${price * quantity}</td>
      <td className="align-center">
        <button className="delete-btn" onClick={() => removeItem(id)}>
          X
        </button>
      </td>
    </tr>
  );
};
