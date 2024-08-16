import React from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();

  const handleRoleSelection = (role) => {
    if (role === 'caretaker') {
      navigate('/caretaker-dashboard');
    } else if (role === 'user') {
      navigate('/user-dashboard');
    } else if (role === 'insertData') {
      navigate('/insert-data');
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Welcome to the Login</h1>
      <p>Select your role:</p>
      <button
        onClick={() => handleRoleSelection('caretaker')}
        style={{
          padding: '10px 20px',
          backgroundColor: '#4CAF50',
          color: 'white',
          border: 'none',
          cursor: 'pointer',
          marginRight: '10px',
        }}
      >
        Caretaker Dashboard
      </button>
      <button
        onClick={() => handleRoleSelection('user')}
        style={{
          padding: '10px 20px',
          backgroundColor: '#008CBA',
          color: 'white',
          border: 'none',
          cursor: 'pointer',
          marginRight: '10px',
        }}
      >
        User Dashboard
      </button>
      
    </div>
  );
}

export default Login;
