import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";

import img1 from "../assets/products/dsa_book.jpg";
import img2 from "../assets/products/notebook.jpeg";
import img3 from "../assets/background.jpeg";
import img4 from "../assets/products/pentonic.jpeg";
import img5 from "../assets/products/geometry_box.jpeg";

const Home = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [img1, img2, img3, img4, img5];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "transparent" }}>
      <Navbar />
      <div style={styles.hero}>
        <div style={styles.textContainer}>
          <h1 style={styles.heading}>ONE STOP SHOP</h1>
          <h2 style={styles.head}>Books & Stationaries</h2>
          <p style={styles.para}>"We believe in knowledge is the key to success!!"</p>
        </div>

        <div style={styles.slideshowWrapper}>
          <img 
            key={currentImage}
            src={images[currentImage]} 
            alt={`Slide ${currentImage + 1}`} 
            style={styles.slideImage} 
          />
        </div>
      </div>
    </div>
  );
};

const styles = {
  hero: { 
    textAlign: "center", 
    padding: "20px 20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  textContainer: {
    marginBottom: "25px",
  },
  heading: {
    color: "#5D4037", 
    fontSize: "3rem",
    fontFamily: "'Georgia', serif",
    margin: "0 0 5px 0",
  },
  head: {
    color: "#5D4037", 
    fontSize: "1.8rem",
    fontFamily: "'Georgia', serif",
    margin: "0 0 10px 0",
  },
  para: {
    fontSize: "1.2rem",
    color: "#795548",
    fontStyle: "italic",
    margin: "0",
  },
  slideshowWrapper: {
    width: "80%",
    maxWidth: "850px",
    height: "450px",
    borderRadius: "15px",
    overflow: "hidden",
    boxShadow: "0 15px 40px rgba(62, 39, 35, 0.2)",
    border: "4px solid rgba(255, 252, 225, 0.9)",
    backgroundColor: "#ffffff",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  slideImage: {
    width: "100%",
    height: "100%",
    objectFit: "contain",
    padding: "10px",
    animation: "fadeIn 1s",
  }
};

export default Home;