
import React from 'react';
import { useNavigate } from 'react-router-dom';

function Caretaker() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/caretaker-dashboard'); 
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Care taker</h1>
      <p>Ruban
Contact no:63748 64548</p>
<p>Sanjay
Contact no:74180 14335</p>
<p>Gugan
Contact no:63695 86491
</p>

      <button onClick={handleBack}>Back</button>
    </div>
  );
}

export default Caretaker;
