import { useEffect, useState, useContext } from "react";
import { CartContext } from "../context/CartContext"; 
import Navbar from "../components/Navbar";
import apiClient from "../api/apiClient";

const Products = () => {
  const [items, setItems] = useState([]);
  const { addToCart } = useContext(CartContext); 

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const { data } = await apiClient.get("/products");
        setItems(data);
      } catch (err) {
        console.log("Backend not active yet. Check your server!");
      }
    };
    fetchItems();
  }, []);

  return (
    <div style={{ backgroundColor: "transparent", minHeight: "100vh" }}>
      <Navbar />
      <div style={{ padding: "60px 20px" }}>
        <h1 style={styles.heading}>Our Collection</h1>
        
        <div style={styles.grid}>
          {items.length > 0 ? (
            items.map((item) => (
              <div key={item._id} style={styles.card}>
                <div style={styles.imageContainer}>
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    style={styles.image} 
                    onError={(e) => { 
                      e.target.src = "https://via.placeholder.com/200x250?text=No+Image"; 
                    }}
                  />
                </div>
                <h3 style={styles.productName}>{item.name}</h3>
                <p style={styles.priceTag}>₹{item.price}</p>
                <button 
                  style={styles.button} 
                  onClick={() => addToCart(item)} 
                >
                  Add to Cart
                </button>
              </div>
              
            ))
          ) : (
            <div style={styles.loadingContainer}>
              <p style={styles.loadingText}>Fetching our latest books...</p>
              <div style={styles.spinner}></div>
            </div>
            
          )}
        </div>
      </div>
    </div>
  );
};

const styles = {
  heading: {
    textAlign: "center",
    marginBottom: "50px",
    color: "#5D4037", 
    fontSize: "2.8rem",
    fontFamily: "'Georgia', serif",
  },
  grid: { 
    display: "grid", 
    gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))", 
    gap: "30px",
    maxWidth: "1200px",
    margin: "0 auto"
  },
  card: { 
    backgroundColor: "rgba(255, 252, 225, 0.95)",
    border: "2px solid #8D6E63", 
    padding: "20px", 
    borderRadius: "15px", 
    textAlign: "center",
    boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
    transition: "transform 0.3s ease"
  },
  imageContainer: {
    backgroundColor: "#fff",
    borderRadius: "10px",
    padding: "10px",
    marginBottom: "15px"
  },
  image: { 
    width: "100%", 
    height: "180px", 
    objectFit: "contain" 
  },
  productName: {
    color: "#3E2723",
    fontSize: "1.2rem",
    margin: "10px 0"
  },
  priceTag: {
    color: "#795548", 
    fontSize: "1.3rem",
    fontWeight: "bold",
    margin: "10px 0"
  },
  button: { 
    backgroundColor: "#5D4037", 
    color: "#FFFCE1", 
    border: "none", 
    padding: "12px", 
    borderRadius: "6px", 
    cursor: "pointer", 
    marginTop: "10px",
    width: "100%",
    fontWeight: "bold",
    transition: "background 0.3s"
  },
  loadingContainer: {
    gridColumn: "1 / -1",
    textAlign: "center",
    padding: "50px"
  },
  loadingText: {
    color: "#795548",
    fontSize: "1.2rem",
    fontStyle: "italic"
  }
};

export default Products;