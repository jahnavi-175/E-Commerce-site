import React from 'react';
import { Link } from 'react-router-dom';

const ThankYou = () => {
  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <div style={styles.iconCircle}>
          ✓
        </div>
        <h1 style={styles.heading}>Thank You!</h1>
        <p style={styles.paragraph}>Your order has been placed successfully.</p>
        <p style={styles.subText}>We've received your order and will begin processing it right away.</p>

        <Link to="/home" style={styles.homeBtn}>
          Continue Shopping
        </Link>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "90vh",
    backgroundColor: "transparent",
    fontFamily: "'Georgia', serif",
    padding: "20px"
  },
  card: {
    padding: "50px 30px",
    maxWidth: "500px",
    width: "100%",
    backgroundColor: "rgba(255, 252, 225, 0.95)",
    borderRadius: "15px",
    border: "2px solid #8D6E63",
    boxShadow: "0 10px 30px rgba(62, 39, 35, 0.15)",
    textAlign: "center"
  },
  iconCircle: {
    width: "80px",
    height: "80px",
    backgroundColor: "#2E7D32",
    color: "#FFF",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "3rem",
    margin: "0 auto 20px auto",
    boxShadow: "0 4px 10px rgba(46, 125, 50, 0.3)"
  },
  heading: {
    color: "#3E2723",
    marginBottom: "15px",
    fontSize: "2.5rem",
    fontWeight: "bold"
  },
  paragraph: {
    fontSize: "1.3rem",
    color: "#5D4037",
    marginBottom: "10px",
    fontWeight: "500"
  },
  subText: {
    fontSize: "1rem",
    color: "#795548",
    marginBottom: "40px"
  },
  homeBtn: {
    display: "inline-block",
    padding: "15px 40px",
    backgroundColor: "#5D4037",
    color: "#FFFCE1",
    textDecoration: "none",
    borderRadius: "8px",
    fontSize: "1.1rem",
    fontWeight: "bold",
    transition: "background 0.3s"
  }
}

export default ThankYou;
