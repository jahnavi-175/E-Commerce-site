import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const productId = product._id || product.id;
  
  return (
    <div style={styles.card}>
      <div style={styles.imageContainer}>
        <img
          src={product.image}
          alt={product.name}
          style={styles.image}
          onError={(e) => (e.target.src = "https://via.placeholder.com/200x250?text=No+Image")}
        />
      </div>
      <h3 style={styles.productName}>{product.name}</h3>
      <p style={styles.priceTag}>₹{product.price}</p>
      
      <Link to={`/product-detail/${productId}`} style={styles.viewLink}>
        View Details
      </Link>
    </div>
  );
};

const styles = {
  card: { 
    backgroundColor: "rgba(255, 252, 225, 0.9)", 
    border: "2px solid #8D6E63", 
    padding: "20px", 
    borderRadius: "15px", 
    textAlign: "center",
    boxShadow: "0 8px 30px rgba(0,0,0,0.1)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between"
  },
  imageContainer: {
    backgroundColor: "#fff",
    borderRadius: "10px",
    padding: "5px",
    marginBottom: "15px",
    border: "1px solid #8D6E63"
  },
  image: { 
    width: "100%", 
    height: "180px", 
    objectFit: "cover", 
    borderRadius: "8px" 
  },
  productName: { 
    color: "#3E2723", 
    fontSize: "1.2rem", 
    margin: "10px 0", 
    fontFamily: "'Georgia', serif" 
  },
  priceTag: { 
    color: "#795548", 
    fontSize: "1.3rem", 
    fontWeight: "bold", 
    margin: "10px 0" 
  },
  viewLink: { 
    display: "block",
    backgroundColor: "#5D4037", 
    color: "#FFFCE1", 
    textDecoration: "none",
    padding: "10px", 
    borderRadius: "6px", 
    fontWeight: "bold",
    marginTop: "10px"
  }
};

export default ProductCard;
