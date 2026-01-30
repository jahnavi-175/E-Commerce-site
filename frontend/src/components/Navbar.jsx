import { Link } from "react-router-dom";
import logoImg from "../assets/logo.png";

const Navbar = () => {
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    window.location.href = "/";
  };

  return (
    <nav style={styles.nav}>
      <div style={styles.logoContainer}>
        <img src={logoImg} alt="OSS Logo" style={styles.diamondLogo} />
        <span style={styles.logoText}>BookStore & Stationary Hub</span>
      </div>
      <div style={styles.links}>
        <Link to="/home" style={styles.link}>Home</Link>
        <Link to="/all-items" style={styles.link}>All Items</Link>
        <Link to="/cart" style={styles.link}>Cart</Link>
        <Link to="/account" style={styles.link}>Account</Link>
        <Link to="/about" style={styles.link}>About</Link>
        <Link to="/help" style={styles.link}>Help</Link>
        <Link to="/contact" style={styles.link}>Contact Us</Link>
        <button onClick={handleLogout} style={styles.logoutBtn}>Logout</button>
      </div>
    </nav>
  );
};

const styles = {
  nav: { 
    display: "flex", 
    justifyContent: "space-between", 
    alignItems: "center", 
    padding: "10px 30px", 
    backgroundColor: "#3E2723", 
    color: "#FFFCE1", 
    boxShadow: "0 2px 10px rgba(0,0,0,0.2)"
  },
  logoContainer: { 
    display: "flex", 
    alignItems: "center", 
    gap: "15px" 
  },
  diamondLogo: {
    width: "45px",
    height: "45px",
    objectFit: "cover",
    clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
    backgroundColor: "#FFFCE1",
    border: "1px solid #FFFCE1"
  },
  logoText: { 
    fontSize: "20px", 
    fontWeight: "bold", 
    fontFamily: "'Georgia', serif",
    letterSpacing: "1px"
  },
  links: { 
    display: "flex", 
    gap: "20px", 
    alignItems: "center" 
  },
  link: { 
    color: "#FFFCE1", 
    textDecoration: "none", 
    fontSize: "14px",
    fontWeight: "500",
    transition: "opacity 0.3s"
  },
  logoutBtn: { 
    backgroundColor: "#8D6E63", 
    color: "white", 
    border: "none", 
    padding: "8px 15px", 
    borderRadius: "5px", 
    cursor: "pointer",
    fontSize: "13px",
    fontWeight: "bold"
  }
};

export default Navbar;