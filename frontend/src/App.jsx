import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Account from "./pages/Account";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Help from "./pages/Help";
import Checkout from "./pages/Checkout";


function App() {
  const isAuthenticated = () => !!localStorage.getItem("token");

  return (
    <div>
      <CartProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<Signup />} />

            <Route path="/home" element={isAuthenticated() ? <Home /> : <Navigate to="/" />} />
            <Route path="/cart" element={isAuthenticated() ? <Cart /> : <Navigate to="/" />} />
            
            <Route path="/all-items" element={isAuthenticated() ? <Product /> : <Navigate to="/" />} />
            <Route path="/account" element={isAuthenticated() ? <Account /> : <Navigate to="/" />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/help" element={<Help />} />
            <Route path="/checkout" element={isAuthenticated() ? <Checkout /> : <Navigate to="/" />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
