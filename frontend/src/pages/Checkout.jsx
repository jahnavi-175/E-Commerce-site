import React, { useState, useContext } from 'react';
import { CartContext } from '../context/CartContext';
import apiClient from '../api/apiClient';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
    const { cartItems, cartTotal, clearCart } = useContext(CartContext);
    const [method, setMethod] = useState('COD');
    const navigate = useNavigate();

    const handlePayment = async () => {
        const user = JSON.parse(localStorage.getItem('user'));

        if (!user || !user.id) {
            alert("Please login again to continue.");
            return;
        }

        if (method === 'COD') {
            try {
                await apiClient.post('/orders/create-cod', {
                    userId: user.id,
                    items: cartItems,
                    amount: cartTotal,
                    paymentStatus: "Pending"
                });
                clearCart();
                navigate('/thankyou');
            } catch (err) {
                console.error("Order Error:", err);
                alert(err.response?.data?.error || "Order failed. Please check your network.");
            }
        } else {
            alert("Redirecting to Mock Paytm Gateway...");
            setTimeout(async () => {
                try {
                    await apiClient.post('/orders/create-cod', {
                        userId: user.id,
                        items: cartItems,
                        amount: cartTotal,
                        paymentStatus: "Success"
                    });
                    clearCart();
                    navigate('/thankyou');
                } catch (err) {
                    console.error("Payment Error:", err);
                    alert(err.response?.data?.error || "Payment simulation failed.");
                }
            }, 2000);
        }
    };

    return (
        <div style={{ padding: '50px', textAlign: 'center' }}>
            <h2>Checkout</h2>
            <p>Total Amount: ₹{cartTotal}</p>

            <div style={{ margin: '20px 0' }}>
                <label>
                    <input
                        type="radio"
                        value="COD"
                        checked={method === 'COD'}
                        onChange={(e) => setMethod(e.target.value)}
                    /> Cash on Delivery
                </label>
                <label style={{ marginLeft: '20px' }}>
                    <input
                        type="radio"
                        value="Paytm"
                        checked={method === 'Paytm'}
                        onChange={(e) => setMethod(e.target.value)}
                    /> Paytm Online
                </label>
            </div>

            <button onClick={handlePayment} style={{ padding: '10px 20px', cursor: 'pointer', backgroundColor: '#5D4037', color: 'white', border: 'none' }}>
                Confirm Order
            </button>
        </div>
    );
};

export default Checkout;
