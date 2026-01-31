import React, { useState, useContext } from 'react';
import { CartContext } from '../context/CartContext';
import apiClient from '../api/apiClient';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
    const { cartItems, cartTotal, clearCart } = useContext(CartContext);
    const [method, setMethod] = useState('COD');
    const [showPaytmModal, setShowPaytmModal] = useState(false);
    const navigate = useNavigate();

    const handleConfirmOrder = () => {
        const user = JSON.parse(localStorage.getItem('user'));

        // Robust User Check
        if (!user || (!user.id && !user._id)) {
            alert("Please login again to continue.");
            return;
        }

        // Robust Total Calculation
        const finalAmount = cartTotal || cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
        if (!finalAmount || finalAmount <= 0) {
            alert("Cart is empty!");
            return;
        }

        if (method === 'COD') {
            processOrder(user, finalAmount, "Pending");
        } else {
            // Show Fake Gateway
            setShowPaytmModal(true);
        }
    };

    const processOrder = async (user, amount, status) => {
        try {
            await apiClient.post('/orders/create-cod', {
                userId: user.id || user._id,
                items: cartItems,
                amount: amount,
                paymentStatus: status
            });
            clearCart();
            navigate('/thankyou');
        } catch (err) {
            console.error("Order Error:", err);
            alert(err.response?.data?.error || "Order failed. Please check your network.");
        }
    };

    return (
        <div style={styles.container}>
            <div style={styles.card}>
                <h2 style={styles.heading}>Checkout</h2>
                <p style={styles.subHeading}>Complete your purchase</p>

                <div style={styles.amountBox}>
                    Total Amount: <span style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>₹{cartTotal || cartItems.reduce((a, c) => a + c.price * c.quantity, 0)}</span>
                </div>

                <div style={styles.optionsContainer}>
                    <label style={styles.radioLabel}>
                        <input
                            type="radio"
                            value="COD"
                            checked={method === 'COD'}
                            onChange={(e) => setMethod(e.target.value)}
                            style={{ marginRight: '10px' }}
                        />
                        Cash on Delivery
                    </label>
                    <label style={styles.radioLabel}>
                        <input
                            type="radio"
                            value="Paytm"
                            checked={method === 'Paytm'}
                            onChange={(e) => setMethod(e.target.value)}
                            style={{ marginRight: '10px' }}
                        />
                        Paytm Online
                    </label>
                </div>

                <button onClick={handleConfirmOrder} style={styles.confirmBtn}>
                    Confirm Order
                </button>
            </div>

            {/* Mock Paytm Gateway Modal */}
            {showPaytmModal && (
                <div style={styles.modalOverlay}>
                    <div style={styles.modalContent}>
                        <h3 style={{ color: '#002E6E', marginBottom: '10px' }}>Paytm Payment Gateway</h3>
                        <p>Total Payable: <strong>₹{cartTotal || cartItems.reduce((a, c) => a + c.price * c.quantity, 0)}</strong></p>
                        <div style={{ margin: '20px 0', border: '1px dashed #ccc', padding: '15px', backgroundColor: '#f9f9f9' }}>
                            <p style={{ fontSize: '0.9rem', color: '#666' }}>Mock Transaction Environment</p>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
                            <button
                                onClick={() => {
                                    const user = JSON.parse(localStorage.getItem('user'));
                                    const amount = cartTotal || cartItems.reduce((a, c) => a + c.price * c.quantity, 0);
                                    processOrder(user, amount, "Success");
                                }}
                                style={styles.payBtn}
                            >
                                Pay Now
                            </button>
                            <button
                                onClick={() => setShowPaytmModal(false)}
                                style={styles.cancelBtn}
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}
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
        padding: "40px",
        maxWidth: "500px",
        width: "100%",
        backgroundColor: "rgba(255, 252, 225, 0.95)",
        borderRadius: "15px",
        border: "2px solid #8D6E63",
        boxShadow: "0 10px 30px rgba(62, 39, 35, 0.15)",
        textAlign: "center"
    },
    heading: { color: "#3E2723", marginBottom: "10px", fontSize: "2.5rem" },
    subHeading: { color: "#795548", marginBottom: "30px", fontSize: "1.1rem" },
    amountBox: {
        backgroundColor: "#fff",
        padding: "15px",
        borderRadius: "8px",
        border: "1px dashed #8D6E63",
        marginBottom: "30px",
        color: "#5D4037",
        fontSize: "1.2rem"
    },
    optionsContainer: {
        display: 'flex',
        justifyContent: 'space-around',
        marginBottom: '30px'
    },
    radioLabel: {
        fontSize: '1.1rem',
        color: '#5D4037',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center'
    },
    confirmBtn: {
        padding: '15px 40px',
        cursor: 'pointer',
        backgroundColor: '#5D4037',
        color: '#FFFCE1',
        border: 'none',
        fontSize: '1.2rem',
        borderRadius: '8px',
        fontWeight: 'bold',
        width: '100%',
        transition: 'background 0.3s'
    },
    modalOverlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0,0,0,0.7)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 9999
    },
    modalContent: {
        backgroundColor: 'white',
        padding: '30px',
        borderRadius: '10px',
        width: '350px',
        textAlign: 'center',
        boxShadow: '0 5px 15px rgba(0,0,0,0.3)'
    },
    payBtn: {
        backgroundColor: '#00B9F5',
        color: 'white',
        border: 'none',
        padding: '10px 25px',
        borderRadius: '5px',
        cursor: 'pointer',
        fontWeight: 'bold',
        fontSize: '1rem'
    },
    cancelBtn: {
        backgroundColor: '#eee',
        color: '#333',
        border: 'none',
        padding: '10px 25px',
        borderRadius: '5px',
        cursor: 'pointer',
        fontWeight: 'bold',
        fontSize: '1rem'
    }
};

export default Checkout;
