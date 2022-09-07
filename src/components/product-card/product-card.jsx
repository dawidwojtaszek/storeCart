import "./product-card.scss";

export const ProductCard = ({ title, price, imgUrl, rating }) => (
  <div className="product-card">
    <div className="img-box">
      <img src={imgUrl} alt="product-photo" />
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
    <button className="add-to-cart-btn">Add to cart</button>
  </div>
);
