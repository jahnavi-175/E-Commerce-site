import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [showToast, setShowToast] = useState(false);

  const addToCart = (product) => {
    setCart((prev) => {
      const item = prev.find((p) => p._id === product._id);
      if (item) {
        return prev.map((p) =>
          p._id === product._id
            ? { ...p, quantity: p.quantity + 1 }
            : p
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });

    // Show Toast
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2000);
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item._id !== id));
  };

  // Calculate total logic was missing in context but used in checkout, adding naive implementation or trusting consumer calculates it? 
  // Wait, Checkout usages 'cartItems' and 'cartTotal'. 'cart' is exposed here. 
  // Let's expose what Checkout expects: cartItems (alias for cart), cartTotal, clearCart.

  const cartTotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  const clearCart = () => setCart([]);

  return (
    <CartContext.Provider value={{ cart, cartItems: cart, addToCart, removeFromCart, cartTotal, clearCart }}>
      {children}
      {/* Toast Notification */}
      {showToast && (
        <div style={{
          position: 'fixed',
          bottom: '30px',
          right: '30px',
          backgroundColor: '#2E7D32',
          color: 'white',
          padding: '15px 25px',
          borderRadius: '8px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
          zIndex: 1000,
          fontFamily: "'Georgia', serif",
          animation: 'fadeIn 0.3s ease-in-out'
        }}>
          ✅ Item added to cart!
        </div>
      )}
    </CartContext.Provider>
  );
};
