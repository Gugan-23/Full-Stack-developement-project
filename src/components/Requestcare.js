
import React from 'react';
import { useNavigate } from 'react-router-dom';

function Requestcare() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/caretaker-dashboard'); 
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Request page for care takers</h1>
      <p>Welcome to your Request page Care taker!</p>
      <button onClick={handleBack}>Back</button>
    </div>
  );
}

export default Requestcare;
