import React, { useState, useEffect } from 'react';
import axios from 'axios';
import qrImage from '../assets/qrimage.png';
import { useNavigate } from 'react-router-dom';

const Payment = () => {
  const [screenshot, setScreenshot] = useState(null);
  const [email, setEmail] = useState('');
  const [place, setPlace] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const navigate = useNavigate();

  const handleScreenshotChange = (e) => {
    setScreenshot(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!screenshot || !email || !place) return alert("All fields are required");

    const formData = new FormData();
    formData.append('screenshot', screenshot);
    formData.append('email', email);
    formData.append('place', place);

    try {
      await axios.post('https://travel-backend-ceam.onrender.com/api/payment', formData);
      setIsSubmitted(true);
    } catch (error) {
      console.error("Error uploading payment:", error);
      alert("❌ Payment submission failed");
    }
  };

  // ⏳ Redirect after success
  useEffect(() => {
    if (isSubmitted) {
      const timer = setTimeout(() => {
        navigate('/viewbudget'); // Adjust if your route is different
      }, 3000); // 3 seconds delay

      return () => clearTimeout(timer); // Cleanup on unmount
    }
  }, [isSubmitted, navigate]);

  return (
    <div style={styles.container}>
      {!isSubmitted ? (
        <form onSubmit={handleSubmit} style={styles.paymentSection}>
          <div style={styles.left}>
            <h2>Scan & Pay via GPay</h2>
            <img src={qrImage} alt="GPay QR" style={styles.qrImage} />
            <p style={styles.instructions}>
              📲 Use any UPI app like <strong>Google Pay</strong> to scan the code.<br />
              ✅ Once done, upload the screenshot below.
            </p>
          </div>

          <div style={styles.right}>
            <h3 style={{ marginBottom: '20px' }}>Upload Payment Screenshot</h3>

            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={styles.inputField}
            />

            <select
              value={place}
              onChange={(e) => setPlace(e.target.value)}
              required
              style={styles.inputField}
            >
              <option value="">-- Select a place --</option>
              <option value="Varkala">Varkala</option>
              <option value="Munnar">Munnar</option>
              <option value="Wayanad">Wayanad</option>
              <option value="Alleppey">Alleppey</option>
              <option value="Kochi">Kochi</option>
              <option value="Papikondalu">Papikondalu</option>
              <option value="Chandragiri">Chandragiri</option>
              <option value="Lambasingi">Lambasingi</option>
              <option value="OmBeach">Om Beach</option>
            </select>

            <label htmlFor="file-upload" style={styles.uploadLabel}>
              📤 Choose Screenshot
            </label>
            <input
              id="file-upload"
              type="file"
              accept="image/*"
              onChange={handleScreenshotChange}
              style={{ display: 'none' }}
            />

            {screenshot && (
              <div style={styles.previewBox}>
                <p>🖼️ Preview:</p>
                <img src={URL.createObjectURL(screenshot)} alt="Preview" style={styles.previewImage} />
              </div>
            )}

            <button type="submit" style={styles.button}>
              ✅ Submit Payment
            </button>
          </div>
        </form>
      ) : (
        <div style={styles.successBox}>
          <h2>🎉 Payment Submitted!</h2>
          <p>We'll verify your payment and get back to you soon.</p>
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    padding: '40px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  paymentSection: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '50px',
    border: '2px solid #d9d9d9',
    borderRadius: '20px',
    padding: '30px',
    maxWidth: '1000px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
  },
  left: {
    width: '45%',
    textAlign: 'center',
  },
  right: {
    width: '45%',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
  },
  inputField: {
    padding: '10px',
    borderRadius: '8px',
    border: '1px solid #ccc',
    width: '100%',
    fontSize: '16px',
  },
  uploadLabel: {
    backgroundColor: '#007bff',
    color: '#fff',
    padding: '10px 20px',
    borderRadius: '8px',
    cursor: 'pointer',
  },
  previewBox: {
    marginTop: '10px',
    border: '1px solid #ccc',
    padding: '10px',
    borderRadius: '10px',
    backgroundColor: '#f9f9f9',
  },
  previewImage: {
    width: '200px',
    borderRadius: '10px',
  },
  button: {
    backgroundColor: '#28a745',
    color: '#fff',
    padding: '10px 20px',
    borderRadius: '10px',
    border: 'none',
    cursor: 'pointer',
    fontSize: '16px',
  },
  successBox: {
    textAlign: 'center',
    padding: '40px',
    backgroundColor: '#eaffea',
    borderRadius: '20px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
  },
  qrImage: {
    width: '250px',
    borderRadius: '10px',
  },
  instructions: {
    marginTop: '20px',
    color: '#555',
    fontSize: '15px',
  },
};

export default Payment;
