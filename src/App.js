import { Route, Routes } from "react-router-dom";
import "./App.css";
import Shop from "./pages/shop/Shop";
import ShoppingCart from "./pages/shopping-cart/ShoppingCart";
import Navbar from "./components/Navbar";

function App() {
  return (
    <main className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route path="/cart" element={<ShoppingCart />} />
      </Routes>
    </main>
  );
}

export default App;
