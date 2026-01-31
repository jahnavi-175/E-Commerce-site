import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

const Cart = () => {
  const { cart, removeFromCart } = useContext(CartContext);
  const navigate = useNavigate();

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div style={{ backgroundColor: "transparent", minHeight: "100vh" }}>
      <Navbar />
      <div style={styles.container}>
        <div style={styles.card}>
          <h1 style={styles.heading}>Your Shopping Cart</h1>

          {cart.length > 0 ? (
            <>
              <div style={styles.itemList}>
                {cart.map((item) => (
                  <div key={item._id} style={styles.cartItem}>
                    <div style={styles.itemInfo}>
                      <span style={styles.itemName}>{item.name}</span>
                      <span style={styles.itemQty}>Qty: {item.quantity}</span>
                    </div>
                    <div style={styles.itemPriceSection}>
                      <span style={styles.price}>₹{item.price * item.quantity}</span>
                      <button
                        style={styles.removeBtn}
                        onClick={() => removeFromCart(item._id)}
                      >
                        Remove
                      </button>
                      <button
                        style={styles.checkoutBtn}
                        onClick={() => navigate("/all-items")}
                      >
                        Go to Items
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div style={styles.totalSection}>
                <h3 style={styles.totalText}>Total Amount: ₹{total}</h3>
                <button
                  style={styles.checkoutBtn}
                  onClick={() => navigate("/checkout")}
                >
                  Proceed to Payment
                </button>
              </div>
            </>
          ) : (
            <div style={{ textAlign: "center", padding: "20px" }}>
              <p style={styles.emptyText}>Your cart is currently empty.</p>
              <button style={styles.checkoutBtn} onClick={() => navigate("/all-items")}>
                Go to Items
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: "60px 20px",
    display: "flex",
    justifyContent: "center",
  },
  card: {
    maxWidth: "700px",
    width: "100%",
    backgroundColor: "rgba(255, 252, 225, 0.95)",
    padding: "40px",
    borderRadius: "15px",
    boxShadow: "0 8px 30px rgba(0,0,0,0.1)",
    border: "2px solid #8D6E63",
  },
  heading: {
    textAlign: "center",
    marginBottom: "30px",
    color: "#5D4037",
    fontSize: "2rem",
    fontFamily: "'Georgia', serif",
  },
  itemList: { marginBottom: "30px" },
  cartItem: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px 0",
    borderBottom: "1px solid #8D6E63",
  },
  itemInfo: { display: "flex", flexDirection: "column" },
  itemName: { fontSize: "1.2rem", fontWeight: "bold", color: "#3E2723" },
  itemQty: { color: "#795548", fontSize: "0.9rem" },
  itemPriceSection: { textAlign: "right" },
  price: { display: "block", fontSize: "1.1rem", fontWeight: "bold", color: "#3E2723", marginBottom: "5px" },
  removeBtn: {
    backgroundColor: "transparent",
    color: "#d9534f",
    border: "none",
    cursor: "pointer",
    fontSize: "0.85rem",
    textDecoration: "underline",
  },
  totalSection: {
    textAlign: "center",
    borderTop: "2px solid #5D4037",
    paddingTop: "20px",
  },
  totalText: { color: "#3E2723", marginBottom: "20px", fontSize: "1.5rem" },
  checkoutBtn: {
    backgroundColor: "#5D4037",
    color: "#FFFCE1",
    padding: "12px 25px",
    border: "none",
    borderRadius: "5px",
    fontSize: "1rem",
    fontWeight: "bold",
    cursor: "pointer",
    width: "100%",
  },
  emptyText: { color: "#795548", fontSize: "1.1rem", marginBottom: "20px" }
};

export default Cart;
