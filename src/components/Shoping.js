
import React from 'react';
import { useNavigate } from 'react-router-dom';

function Shoping() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/user-dashboard'); 
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Shopping page</h1>
      <p>Welcome to your Shopping!</p>
      <button onClick={handleBack}>Back</button>
    </div>
  );
}

export default Shoping;
