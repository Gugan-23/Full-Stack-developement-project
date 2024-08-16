import React, { useState } from 'react';

function MainApp() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const [showRoleSelection, setShowRoleSelection] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
    setEmail('');
    setPassword('');
    setName('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      console.log('Login:', { email, password, role });
      if (role === 'caretaker') {
        window.location.href = '/home/caretaker';
      } else {
        window.location.href = '/home/user';
      }
    } else {
      console.log('Signup:', { name, email, password, role });
    }
  };

  const handleRoleSelection = (selectedRole) => {
    setRole(selectedRole);
    setShowRoleSelection(false);
  };

  const handleBack = () => {
    setShowRoleSelection(true);
    setEmail('');
    setPassword('');
    setName('');
  };

  return (
    <div style={{ maxWidth: '300px', margin: '50px auto', textAlign: 'center' }}>
      {showRoleSelection ? (
        <>
          <h2>Select Your Role</h2>
          <button
            onClick={() => handleRoleSelection('caretaker')}
            style={{
              padding: '10px 20px',
              backgroundColor: '#4CAF50',
              color: 'white',
              border: 'none',
              cursor: 'pointer',
              marginBottom: '10px',
            }}
          >
            Caretaker
          </button>
          <button
            onClick={() => handleRoleSelection('user')}
            style={{
              padding: '10px 20px',
              backgroundColor: '#008CBA',
              color: 'white',
              border: 'none',
              cursor: 'pointer',
            }}
          >
            User
          </button>
        </>
      ) : (
        <>
          <h2>{isLogin ? 'Login' : 'Signup'}</h2>
          <button
            onClick={handleBack}
            style={{
              padding: '10px 20px',
              backgroundColor: '#f44336',
              color: 'white',
              border: 'none',
              cursor: 'pointer',
              marginBottom: '20px',
            }}
          >
            Back
          </button>
          <form onSubmit={handleSubmit}>
            {!isLogin && (
              <div>
                <input
                  type="text"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  style={{ width: '100%', padding: '8px', marginBottom: '10px' }}
                />
              </div>
            )}
            <div>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                style={{ width: '100%', padding: '8px', marginBottom: '10px' }}
              />
            </div>
            <div>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                style={{ width: '100%', padding: '8px', marginBottom: '20px' }}
              />
            </div>
            <button
              type="submit"
              style={{
                padding: '10px 20px',
                backgroundColor: '#4CAF50',
                color: 'white',
                border: 'none',
                cursor: 'pointer',
              }}
            >
              {isLogin ? 'Login' : 'Signup'}
            </button>
          </form>
          <p style={{ marginTop: '20px', cursor: 'pointer', color: 'blue' }} onClick={toggleForm}>
            {isLogin ? 'New user? Signup here.' : 'Already have an account? Login here.'}
          </p>
        </>
      )}
    </div>
  );
}

export default MainApp;
