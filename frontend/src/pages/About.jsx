import Navbar from "../components/Navbar";

const About = () => {
  return (
    <div style={{ backgroundColor: "transparent", minHeight: "100vh" }}>
      <Navbar />
      <div style={styles.container}>
        <div style={styles.card}>
          <h1 style={styles.heading}>About Us</h1>
          <p style={styles.paragraph}>
            Welcome to <strong>BookStore</strong>, your premier one-stop destination for high-quality 
            literature and essential stationery. We are deeply committed to the idea that knowledge 
            is the primary key to personal and professional success, which drives our mission to make 
            educational resources accessible to everyone. Our platform bridges the gap between students 
            and the tools they need, offering a curated selection of books and supplies tailored for 
            academic excellence. Whether you are a dedicated scholar, an avid reader, or a creative 
            professional, we provide the materials necessary to fuel your journey. We pride ourselves 
            on offering competitive pricing without compromising on the quality of our products. By 
            integrating seamless technology with a passion for learning, we ensure a reliable shopping 
            experience for our community. Join us as we continue to support the next generation of 
            thinkers, leaders, and creators through the power of education.
          </p>
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
    maxWidth: "800px",
    backgroundColor: "rgba(255, 252, 225, 0.9)", 
    padding: "40px",
    borderRadius: "15px",
    boxShadow: "0 8px 30px rgba(0,0,0,0.1)", 
    border: "2px solid #8D6E63", 
  },
  heading: {
    textAlign: "center",
    marginBottom: "30px",
    color: "#5D4037",
    fontSize: "2.5rem",
    fontFamily: "'Georgia', serif", 
  },
  paragraph: {
    fontSize: "1.15rem",
    color: "#795548",
    textAlign: "justify", 
    lineHeight: "1.8",
    margin: "0",
  }
};

export default About;