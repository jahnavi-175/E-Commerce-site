import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard"; 
import apiClient from "../api/apiClient";

const Product = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const { data } = await apiClient.get("/products/all");
        setItems(data);
      } catch (err) {
        console.log("Error fetching products.");
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
          {items.map((item) => (
            <ProductCard key={item._id} product={item} />
          ))}
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
  }
};

export default Product;
