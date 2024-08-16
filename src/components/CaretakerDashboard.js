import React from 'react';

import { useNavigate } from 'react-router-dom';


function CaretakerDashboard() {
  const navigate = useNavigate();

  const go = () => {
    navigate('/profilecare');
  };
  
  const ab = () => {
    navigate('/aboutuscare');
  };

  const lo = () => {
    navigate('/locationcare');

  };
  const lo1 = () => {
    navigate('/requestcare');

  };


  return (
    <div style={{ textAlign: 'center' }}>
      <div className="home" style={{ backgroundColor: 'pink', height: '100px' }}>
        <button
          id="hi"
          type="button"
          style={{
            marginTop: '10px',
            backgroundColor: 'green',
            height: '40px',
            width: '120px',
            color: 'white',
            fontSize: '16px',
            border: 'none',
            borderRadius: '50px',
            cursor: 'pointer',
            transform: 'translateX(-120%)',
          }}
          onClick={go}
        >
          Profile
        </button>
        <button
          id="hi2"
          type="button"
          style={{
            marginTop: '40px',
            backgroundColor: 'green',
            height: '40px',
            width: '120px',
            color: 'white',
            fontSize: '16px',
            border: 'none',
            borderRadius: '50px',
            cursor: 'pointer',
            transform: 'translateX(-90%)',
          }}
          onClick={() => navigate('/caretaker-dashboard')}
        >
          Home
        </button>
        <button
          id="hi3"
          type="button"
          style={{
            marginTop: '40px',
            backgroundColor: 'green',
            height: '40px',
            width: '120px',
            color: 'white',
            fontSize: '16px',
            border: 'none',
            borderRadius: '50px',
            cursor: 'pointer',
            transform: 'translateX(-50%)',
          }}
          onClick={() => navigate('/shopingcare')}
        >
          Shop now
        </button>
        <button
          id="hi4"
          type="button"
          style={{
            marginTop: '40px',
            backgroundColor: 'green',
            height: '40px',
            width: '120px',
            color: 'white',
            fontSize: '16px',
            border: 'none',
            borderRadius: '50px',
            cursor: 'pointer',
            transform: 'translateX(-10%)',
          }}
          onClick={() => navigate('/caretaker')}
        >
          Contact us
        </button>
        <button
          id="hi5"
          type="button"
          style={{
            marginTop: '40px',
            backgroundColor: 'green',
            height: '40px',
            width: '140px',
            color: 'white',
            fontSize: '16px',
            border: 'none',
            borderRadius: '50px',
            cursor: 'pointer',
            transform: 'translateX(20%)',
          }}
          onClick={() => navigate('/chatcare')}
        >
          Chat with expert
        </button>
        <button
          id="hi6"
          type="button"
          style={{
            marginTop: '40px',
            backgroundColor: 'green',
            height: '40px',
            width: '140px',
            color: 'white',
            fontSize: '16px',
            border: 'none',
            borderRadius: '50px',
            cursor: 'pointer',
            transform: 'translateX(50%)',
          }}
          onClick={lo}
        >
          Location
        </button>
        <button
          id="hi7"
          type="button"
          style={{
            marginTop: '40px',
            backgroundColor: 'green',
            height: '40px',
            width: '140px',
            color: 'white',
            fontSize: '16px',
            border: 'none',
            borderRadius: '50px',
            cursor: 'pointer',
            transform: 'translateX(60%)',
          }}
          onClick={ab}
        >
          About us
        </button>
        <button
          id="hi8"
          type="button"
          style={{
            marginTop: '40px',
            backgroundColor: 'green',
            height: '40px',
            width: '140px',
            color: 'white',
            fontSize: '16px',
            border: 'none',
            borderRadius: '50px',
            cursor: 'pointer',
            transform: 'translateX(90%)',
          }}
          onClick={lo1}
        >Requests
        </button>
      </div>

      <video controls style={{ height: '500px', width: '650px', transform: 'translateX(0%)' }}>
        <source
          src="E:/Sem -5/Full stack/Full-Stack-developement-project/intro.mp4"
          id="io"
          type="video/mp4"
        />
      </video>

      <footer id="p2" style={{ marginTop: '50px', textAlign: 'center' }}>
        <p>&copy;2024 My Website. All rights reserved</p>
        <a href="https://privacy.microsoft.com/en-US/">#Privacy</a>
        <a href="https://privacy.microsoft.com/en-US/">#Terms</a>
      </footer>
    </div>
  );
}

export default CaretakerDashboard;
