
import React from 'react';
import { useNavigate } from 'react-router-dom';

function Chatcare() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/caretaker-dashboard'); 
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Page is not ready please wait untill updating caretaker!!</h1>
      

      <button onClick={handleBack}>Back</button>
    </div>
  );
}

export default Chatcare;
