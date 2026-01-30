import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const productId = product._id || product.id;
  return (
    
    <div style={{ border: "1px solid #ccc", padding: "16px" }}>
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-contain"
        onError={(e) => (e.target.src = "/placeholder.png")}
      />
      <h3>{product.name}</h3>
      <p>₹{product.price}</p>
      <Link to={`/product/${productId}`}style={{ color: "blue", textDecoration: "underline" }}
>View</Link>
    </div>
  );
};

export default ProductCard;
