import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import apiClient from "../api/apiClient";

const Signup = () => {
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await apiClient.post("/auth/signup", formData);
      alert("Account created successfully! Please login to continue.");
      navigate("/"); 
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: "Signup failed" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.heading}>Create Account</h2>
        <p style={styles.subHeading}>Join our Bookstore & Stationery hub today.</p>
        
        <form onSubmit={handleSignup} style={styles.form}>
          <input 
            type="text" 
            placeholder="Full Name" 
            onChange={(e) => setFormData({...formData, name: e.target.value})} 
            required 
            style={styles.input}
          />
          <input 
            type="email" 
            placeholder="Email Address" 
            onChange={(e) => setFormData({...formData, email: e.target.value})} 
            required 
            style={styles.input}
          />
          <input 
            type="password" 
            placeholder="Create Password" 
            onChange={(e) => setFormData({...formData, password: e.target.value})} 
            required 
            style={styles.input}
          />
          <button 
            type="submit" 
            disabled={loading}
            style={{ 
              ...styles.button, 
              backgroundColor: loading ? "#A1887F" : "#5D4037",
              cursor: loading ? "not-allowed" : "pointer"
            }}
          >
            {loading ? "Registering..." : "Sign Up"}
          </button>
        </form>
        
        <p style={styles.footerText}>
          Already have an account? <Link to="/" style={styles.link}>Login here</Link>
        </p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#EFEBE9", 
    fontFamily: "'Georgia', serif"
  },
  card: {
    padding: "40px",
    maxWidth: "400px",
    width: "100%",
    backgroundColor: "rgba(255, 252, 225, 0.95)",
    borderRadius: "15px",
    border: "2px solid #8D6E63",
    boxShadow: "0 10px 30px rgba(62, 39, 35, 0.15)",
    textAlign: "center"
  },
  heading: { color: "#3E2723", marginBottom: "10px" },
  subHeading: { color: "#795548", marginBottom: "20px", fontSize: "0.9rem" },
  form: { display: "flex", flexDirection: "column", gap: "15px" },
  input: {
    padding: "12px",
    fontSize: "16px",
    borderRadius: "8px",
    border: "1px solid #D7CCC8",
    outline: "none",
    backgroundColor: "#fff"
  },
  button: {
    padding: "12px",
    fontSize: "16px",
    color: "#FFFCE1",
    border: "none",
    borderRadius: "8px",
    fontWeight: "bold",
    transition: "background 0.3s ease"
  },
  footerText: { marginTop: "20px", color: "#5D4037" },
  link: { color: "#795548", textDecoration: "none", fontWeight: "bold" }
};


export default Signup;
