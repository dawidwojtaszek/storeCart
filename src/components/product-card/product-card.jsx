import "./product-card.scss";
import { useContext } from "react";
import CartContext from "../../Context/cart-context";

export const ProductCard = ({ id, title, price, imgUrl, rating }) => {
  const { addItems } = useContext(CartContext);

  return (
    <div className="product-card">
      <div className="img-box">
        <img src={imgUrl} alt="product" />
      </div>

      <div className="info-box">
        <h3>{title}</h3>
        <div className="rate-price-box">
          <p>
            Rate: <span> {rating}</span>{" "}
          </p>

          <p>
            Price: <span>${price}</span>
          </p>
        </div>
      </div>
      <button
        className="add-to-cart-btn"
        onClick={() => {
          addItems({ id: id, title: title, price: price, image: imgUrl });
        }}
      >
        Add to cart
      </button>
    </div>
  );
};
