import { useEffect, useState } from "react";
import { ProductList } from "../product-list/product-list";
import { LoadingHandler } from "../loading-handler/loading-handler";

export const FetchingProducts = () => {
  let [itemList, setItemList] = useState(null);
  let [isLoading, setLoading] = useState(true);
  let [isError, setError] = useState(false);

  const fetchProducts = () => {
    fetch("https://fakestoreapi.com/products/")
      .then((res) => res.json())
      .then((json) => {
        setLoading(false);
        setItemList(json);
      })
      .catch((error) => {
        setError(true);
        setLoading(false);
        console.log(error);
      });
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      {itemList === null ? (
        <LoadingHandler isError={isError} isLoading={isLoading} />
      ) : (
        <ProductList itemsList={itemList} />
      )}
    </div>
  );
};
