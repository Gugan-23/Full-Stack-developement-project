
import React from 'react';
import { useNavigate } from 'react-router-dom';

function Shoping() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/caretaker-dashboard'); 
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Shopping page</h1>
      <p>Welcome to your Shopping caretaker!</p>
      <button onClick={handleBack}>Back</button>
    </div>
  );
}

export default Shoping;
