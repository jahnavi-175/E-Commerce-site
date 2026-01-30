import Navbar from "../components/Navbar";

const Account = () => {
  const user = JSON.parse(localStorage.getItem("user")) || { name: "Guest", email: "Not available" };

  return (
    <div style={{ backgroundColor: "transparent", minHeight: "100vh" }}>
      <Navbar />
      <div style={styles.container}>
        <div style={styles.card}>
          <h1 style={styles.heading}>My Account</h1>
          
          <div style={styles.infoSection}>
            <p style={styles.paragraph}><strong>Name:</strong> {user.name}</p>
            <p style={styles.paragraph}><strong>Email:</strong> {user.email}</p>
            <p style={styles.paragraph}><strong>Phone:</strong> +91 XXXXX XXXXX</p>
            <p style={styles.paragraph}><strong>Address:</strong> KIIT University, Bhubaneswar, Odisha</p>
          </div>

          <hr style={styles.divider} />
          
          <h3 style={styles.subHeading}>Order History</h3>
          <p style={styles.placeholderText}>No recent orders found.</p>
          
          <h3 style={styles.subHeading}>Payment Details</h3>
          <p style={styles.placeholderText}>No saved cards or UPI IDs.</p>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: { 
    padding: "60px 20px", 
    display: "flex", 
    justifyContent: "center" 
  },
  card: {
    maxWidth: "600px",
    width: "100%",
    backgroundColor: "rgba(255, 252, 225, 0.9)", 
    padding: "40px",
    borderRadius: "15px",
    boxShadow: "0 8px 30px rgba(0,0,0,0.1)",
    border: "2px solid #8D6E63", 
  },
  heading: { 
    textAlign: "center", 
    color: "#5D4037", 
    marginBottom: "30px",
    fontFamily: "'Georgia', serif"
  },
  infoSection: {
    marginBottom: "20px"
  },
  paragraph: {
    fontSize: "1.1rem",
    color: "#795548", 
    textAlign: "left", 
    lineHeight: "1.8",
    margin: "10px 0",
  },
  subHeading: {
    color: "#5D4037",
    marginTop: "20px",
    fontSize: "1.3rem"
  },
  placeholderText: {
    fontSize: "1rem",
    color: "#A1887F",
    fontStyle: "italic",
    margin: "5px 0"
  },
  divider: {
    border: "0",
    borderTop: "1px solid #8D6E63",
    margin: "20px 0",
    opacity: "0.5"
  }
};

export default Account;