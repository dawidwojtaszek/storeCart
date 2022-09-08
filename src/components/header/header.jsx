import "./header.scss";
import { CartContext } from "../../Context/cart-context";
import { useContext } from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  const { items } = useContext(CartContext);
  const itemsQuantity = items.reduce(
    (prev, current) => prev + current.quantity,
    0
  );
  console.log(itemsQuantity);
  return (
    <header>
      <div className="container">
        <div className="navigation">
          <Link to="/">FakeStoreCart</Link>
          <nav>
            <span>{itemsQuantity} </span>
            <Link to="/cart" className="cart-link">
              CART
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};
