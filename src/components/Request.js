
import React from 'react';
import { useNavigate } from 'react-router-dom';

function Request() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/user-dashboard'); 
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Request page</h1>
      <p>Welcome to your Request page!</p>
      <button onClick={handleBack}>Back</button>
    </div>
  );
}

export default Request;
