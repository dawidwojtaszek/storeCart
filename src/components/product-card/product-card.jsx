import "./product-card.scss";

export const ProductCard = ({ src, title }) => (
  <div className="product-card">
    <div className="img-box">
      <img src={src} alt="product-photo" />
    </div>

    <div className="info-box">
      <h3>{title}</h3>
      <div className="rate-price-box">
        <p>
          Rate: <span> 4\3 120</span>{" "}
        </p>

        <p>
          Price: <span>$100</span>
        </p>
      </div>
    </div>
    <button className="add-to-cart-btn">Add to cart</button>
  </div>
);
