import React from 'react';

const Sidebar = ({ onViewChange }) => {
  return (
    <div style={{
      width: '250px',
      backgroundColor: '#f4f4f4',
      height: '100vh',
      padding: '20px',
      boxShadow: '2px 0 5px rgba(0, 0, 0, 0.1)',
      overflowY: 'auto'
    }}>
      <h2 style={{ textAlign: 'center' }}>Task Manager 🗂️</h2>
      <div style={{ marginTop: '20px' }}>
        <button onClick={() => onViewChange('home')} style={buttonStyle}>🏠 Home</button>
        <button onClick={() => onViewChange('add')} style={buttonStyle}>➕ Add Task</button>
        <button onClick={() => onViewChange('search')} style={buttonStyle}>🔍 Search Task</button>
        <button onClick={() => onViewChange('completed')} style={buttonStyle}>✅ Completed Tasks</button>
        <button onClick={() => onViewChange('pending')} style={buttonStyle}>⏳ Pending Tasks</button>
      </div>
    </div>
  );
};

const buttonStyle = {
  display: 'block',
  width: '100%',
  padding: '10px',
  margin: '10px 0',
  border: 'none',
  backgroundColor: '#007bff',
  color: '#fff',
  fontSize: '16px',
  cursor: 'pointer',
  borderRadius: '5px',
  textAlign: 'left'
};

export default Sidebar;
