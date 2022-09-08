import "./App.css";
import { Header } from "./components/header/header";
import { FetchingProducts } from "./components/fetching-products/fetching-products";
import { CartProvider } from "./Context/cart-context";

function App() {
  return (
    <CartProvider>
      <Header />
      <FetchingProducts />
    </CartProvider>
  );
}

export default App;
