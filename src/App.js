import "./App.css";
import { Header } from "./components/header/header";
import { FetchingProducts } from "./components/fetching-products/fetching-products";

function App() {
  return (
    <div>
      <Header />
      <FetchingProducts />
    </div>
  );
}

export default App;
