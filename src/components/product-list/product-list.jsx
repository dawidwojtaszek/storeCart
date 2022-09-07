import "./product-list.scss";
import { ProductCard } from "../product-card/product-card";
import { useEffect } from "react";
export const ProductList = () => {
  useEffect(() => {
    fetch("https://fakestoreapi.com/products/")
      .then((res) => res.json())
      .then((json) => console.log(json));
  }, []);

  const dd = 1;
  return (
    <div className="container">
      <div className="product-list">
        <ProductCard
          src="https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg"
          title="   WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard
        Drive"
        />
        <ProductCard
          src="https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg"
          title="
        BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats
        "
        />
        <ProductCard
          src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
          title="Opna Women's Short Sleeve Moisture"
        />
      </div>
    </div>
  );
};
