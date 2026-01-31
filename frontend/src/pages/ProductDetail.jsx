import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import apiClient from '../api/apiClient';
import Navbar from '../components/Navbar';

const ProductDetail = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const { data } = await apiClient.get(`/products/${id}`);
        setItem(data);
      } catch (err) {
        console.error("Could not fetch product details");
      }
    };
    fetchItem();
  }, [id]);

  if (!item) return <div style={{textAlign: "center", padding: "100px", color: "#5D4037", fontFamily: "Georgia"}}>Loading Details...</div>;

  return (
    <div style={{ backgroundColor: "transparent", minHeight: "100vh" }}>
      <Navbar />
      <div style={styles.container}>
        <div style={styles.card}>
          <div style={styles.flexBox}>
            {/* Image Section */}
            <div style={styles.imageSection}>
              <img src={item.image} alt={item.name} style={styles.image} />
            </div>

            {/* Content Section */}
            <div style={styles.infoSection}>
              <h1 style={styles.heading}>{item.name}</h1>
              <p style={styles.category}>Category: {item.category}</p>
              <p style={styles.price}>₹{item.price}</p>
              
              <p style={styles.paragraph}>
                {item.description}
              </p>

              <div style={styles.statusContainer}>
                <span style={{ 
                  color: item.stock > 0 ? "#2E7D32" : "#C62828", 
                  fontWeight: "bold",
                  fontSize: "1.1rem" 
                }}>
                  {item.stock > 0 ? `● In Stock (${item.stock} available)` : "● Out of Stock"}
                </span>
              </div>

              <button 
                style={styles.button} 
                onClick={() => addToCart(item)}
                disabled={item.stock <= 0}
              >
                {item.stock > 0 ? "Add to Cart" : "Currently Unavailable"}
              </button>
            </div>
          </div>
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
    alignItems: "center",
  },
  card: {
    maxWidth: "1000px",
    backgroundColor: "rgba(255, 252, 225, 0.9)", 
    padding: "40px",
    borderRadius: "15px",
    boxShadow: "0 8px 30px rgba(0,0,0,0.1)", 
    border: "2px solid #8D6E63",
  },
  flexBox: {
    display: "flex",
    gap: "40px",
    flexWrap: "wrap",
    alignItems: "flex-start",
  },
  imageSection: {
    flex: "1",
    minWidth: "300px",
  },
  image: {
    width: "100%",
    maxHeight: "500px",
    objectFit: "cover",
    borderRadius: "10px",
    border: "2px solid #8D6E63",
  },
  infoSection: {
    flex: "1.5",
    minWidth: "300px",
  },
  heading: {
    color: "#5D4037",
    fontSize: "2.5rem",
    fontFamily: "'Georgia', serif",
    marginBottom: "10px",
  },
  category: {
    fontSize: "1.1rem",
    fontStyle: "italic",
    color: "#8D6E63",
    marginBottom: "20px",
  },
  price: {
    fontSize: "2.2rem",
    fontWeight: "bold",
    color: "#5D4037",
    marginBottom: "20px",
  },
  paragraph: {
    fontSize: "1.1rem",
    color: "#795548",
    textAlign: "justify", 
    lineHeight: "1.8",
    marginBottom: "30px",
  },
  statusContainer: {
    marginBottom: "25px",
  },
  button: {
    backgroundColor: "#5D4037",
    color: "#FFFCE1",
    padding: "15px 40px",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "1.2rem",
    fontWeight: "bold",
    transition: "0.3s",
    boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
  }
};

export default ProductDetail;