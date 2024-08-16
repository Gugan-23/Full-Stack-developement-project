
import React from 'react';
import { useNavigate } from 'react-router-dom';

function Profile() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/user-dashboard'); 
  };
  const handleBack1 = () => {
    navigate('/login'); 
  };


  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Profile Page</h1>
      <p>Welcome to your profile!</p>
      <button onClick={handleBack}>Back</button>
      <button onClick={handleBack1}>Logout</button>
    </div>
  );
}

export default Profile;
