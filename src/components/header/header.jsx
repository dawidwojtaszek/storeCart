import "./header.scss";
import { CartContext } from "../../Context/cart-context";
import { useContext } from "react";

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
          <h1>Hello world</h1>
          <nav>
            <span>{itemsQuantity} </span>
            <a>CART</a>
          </nav>
        </div>
      </div>
    </header>
  );
};
