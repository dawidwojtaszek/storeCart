import "./product-list.scss";
import { ProductCard } from "../product-card/product-card";

export const ProductList = ({ itemsList }) => {
  return (
    <div className="container">
      <div className="product-list">
        {itemsList.map((item) => (
          <ProductCard
            key={item.id}
            title={item.title}
            imgUrl={item.image}
            price={item.price}
            rating={item.rating.rate}
          />
        ))}
      </div>
    </div>
  );
};
