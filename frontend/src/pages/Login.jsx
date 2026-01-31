import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import apiClient from "../api/apiClient";

import { useEffect } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    
    console.log("API Base URL:", apiClient.defaults.baseURL);
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {

      const { data } = await apiClient.post("/auth/login", { email, password });

      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));

      navigate("/home");
    } catch (err) {
      console.error(err);
     
      alert(`Login Failed!\nURL: ${apiClient.defaults.baseURL}\nError: ${err.message}\nResponse: ${JSON.stringify(err.response?.data)}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.heading}>Welcome Back</h2>
        <p style={styles.subHeading}>Login to access your Bookstore & Stationary hub.</p>

        <form onSubmit={handleLogin} style={styles.form}>
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={styles.input}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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
            {loading ? "Verifying..." : "Login"}
          </button>
        </form>

        <p style={styles.footerText}>
          New user? <Link to="/signup" style={styles.link}>Register here</Link>
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

export default Login;
