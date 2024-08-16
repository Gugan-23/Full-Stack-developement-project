
import React from 'react';
import { useNavigate } from 'react-router-dom';

function Profilecare() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/caretaker-dashboard'); 
  };
  const handleBack1 = () => {
    navigate('/login'); 
  };


  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Profile Page</h1>
      <p>Welcome to your profile Care taker!</p>
      <button onClick={handleBack}>Back</button>
      <button onClick={handleBack1}>Logout</button>
    </div>
  );
}

export default Profilecare;
