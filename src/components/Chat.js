
import React from 'react';
import { useNavigate } from 'react-router-dom';

function Chat() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/user-dashboard'); 
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Page is not ready please wait untill updating!!</h1>
      

      <button onClick={handleBack}>Back</button>
    </div>
  );
}

export default Chat;
