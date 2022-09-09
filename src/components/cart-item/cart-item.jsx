import "./cart-item.scss";

export const CartItem = ({ name, quantity, price, imgUrl }) => (
  <tr>
    <td>
      <img src={imgUrl} alt="product photo" className="table-img" />
    </td>
    <td>{name}</td>
    <td className="align-center">{quantity}</td>
    <td>${price}</td>
    <td>${price * quantity}</td>
    <td className="align-center">
      <button className="delete-btn">X</button>
    </td>
  </tr>
);
