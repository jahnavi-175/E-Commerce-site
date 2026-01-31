import React, { useState, useContext } from 'react';
import { CartContext } from '../context/CartContext';
import apiClient from '../api/apiClient';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
  const { cartItems, cartTotal } = useContext(CartContext);
  const [method, setMethod] = useState('COD');
  const navigate = useNavigate();

  const handlePayment = async () => {
  const user = JSON.parse(localStorage.getItem('user'));
  
  if (method === 'COD') {
    try {
      await apiClient.post('/orders/create-cod', {
        userId: user.id,
        items: cartItems,
        amount: cartTotal
      });
      navigate('/thankyou');
    } catch (err) {
      alert("Order failed.");
    }
  } else {
    
    try {
      alert("Redirecting to Paytm Gateway...");
      
      setTimeout(async () => {
        await apiClient.post('/orders/create-cod', { 
          userId: user.id,
          items: cartItems,
          amount: cartTotal,
          paymentMethod: "Online"
        });
        navigate('/thankyou');
      }, 2000); 
      
    } catch (err) {
      alert("Payment simulation failed.");
    }
  }
};;

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

      <button onClick={handlePayment} style={{ padding: '10px 20px', cursor: 'pointer' }}>
        Confirm Order
      </button>
    </div>
  );
};

export default Checkout;