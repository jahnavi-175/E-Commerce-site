const ThankYou = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Thank You!</h1>
      <p style={styles.paragraph}>Your order has been placed successfully.</p>
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
}

export default ThankYou;
