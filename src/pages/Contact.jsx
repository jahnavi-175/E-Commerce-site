import Navbar from "../components/Navbar";

const Contact = () => {
  return (
    <div style={{ backgroundColor: "transparent", minHeight: "100vh" }}>
      <Navbar />
      <div style={styles.container}>
        <div style={styles.card}>
          <h1 style={styles.heading}>Contact Us</h1>
          <div style={styles.infoSection}>
            <p><strong>Customer Care:</strong> +91 1800-XXX-XXXX</p>
            <p><strong>Email Support:</strong> support@bookstore.com</p>
            <p><strong>Working Hours:</strong> Mon - Sat (9:00 AM - 6:00 PM)</p>
            <p><strong>Corporate Office:</strong> 123 Education Lane, Knowledge City, India</p>
          </div>
          <div style={styles.footerNote}>
            <p>We usually respond to emails within 24 hours.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: { padding: "60px 20px", display: "flex", justifyContent: "center" },
  card: {
    maxWidth: "600px",
    width: "100%",
    backgroundColor: "rgba(255, 252, 225, 0.9)",
    padding: "40px",
    borderRadius: "15px",
    boxShadow: "0 8px 30px rgba(0,0,0,0.1)",
    border: "2px solid #8D6E63",
    textAlign: "center"
  },
  heading: { marginBottom: "30px", color: "#5D4037" },
  infoSection: { fontSize: "1.1rem", lineHeight: "2", color: "#795548" },
  footerNote: { marginTop: "30px", fontSize: "0.9rem", color: "#666", fontStyle: "italic" }
};

export default Contact;