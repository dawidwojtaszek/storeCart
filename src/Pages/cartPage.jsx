import { Header } from "../components/header/header";
import { Cart } from "../components/cart/cart";
import "./cartPage.scss";

export const CartPage = () => (
  <div className="cart-page">
    <Header />
    <Cart />
  </div>
);
