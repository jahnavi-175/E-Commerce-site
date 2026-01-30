import Navbar from "../components/Navbar";

const Help = () => {
  const faqs = [
    { q: "How do I track my order?", a: "You can track your order in the Account section under Order History." },
    { q: "What is the return policy?", a: "Items can be returned within 7 days of delivery if they are in original condition." },
    { q: "How can I pay?", a: "We support UPI, Debit/Credit cards, and Net Banking via Paytm." }
  ];

  return (
    <div style={{ backgroundColor: "transparent", minHeight: "100vh" }}>
      <Navbar />
      <div style={styles.container}>
        <div style={styles.card}>
          <h1 style={styles.heading}>Help & FAQ</h1>
          {faqs.map((item, index) => (
            <div key={index} style={styles.faqItem}>
              <h3 style={styles.question}>{item.q}</h3>
              <p style={styles.answer}>{item.a}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: { padding: "60px 20px", display: "flex", justifyContent: "center" },
  card: {
    maxWidth: "800px",
    width: "100%",
    backgroundColor: "rgba(255, 252, 225, 0.9)",
    padding: "40px",
    borderRadius: "15px",
    boxShadow: "0 8px 30px rgba(0,0,0,0.1)",
    border: "2px solid #8D6E63",
  },
  heading: { textAlign: "center", marginBottom: "30px", color: "#5D4037" },
  faqItem: { marginBottom: "20px", borderBottom: "1px solid #ddd", paddingBottom: "10px" },
  question: { color: "#4B3621", marginBottom: "10px" },
  answer: { color: "#795548", lineHeight: "1.6", textAlign: "justify" }
};

export default Help;