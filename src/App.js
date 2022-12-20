import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.scss";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import MainPage from "./components/MainPage/MainPage";
import Nosotros from "./components/Nosotros/Nosotros";
import Contacto from "./components/Contacto/Contacto";
import CartItems from "./components/CartItems/CartItems";
import { CartContextProvider } from "./context/CartContext";

function App() {

  return (
    <div className="App">
      <CartContextProvider>
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={<MainPage />}
            />

            <Route
              path="cartItems"
              element={<CartItems />}
            />

            <Route
              path="/nosotros"
              element={<Nosotros />}
            />

            <Route
              path="/producto"
              element={<ItemListContainer />}
            />

            <Route
              path="/producto/:filterProduct"
              element={<ItemListContainer />}
            />

            <Route
              path="/producto/:category/:productId"
              element={<ItemDetailContainer />}
            />

            <Route
              path="/contacto"
              element={<Contacto />}
            />
          </Routes>

        </BrowserRouter>
      </CartContextProvider>
    </div >
  );
}

export default App;
