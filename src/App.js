import "./App.css";
import { CartProvider } from "./Context/cart-context";
import { Routes, Route } from "react-router-dom";
import { HomePage } from "./Pages/homepage";
import { CartPage } from "./Pages/cartPage";
function App() {
  return (
    <CartProvider>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </CartProvider>
  );
}

export default App;
