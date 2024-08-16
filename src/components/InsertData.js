// InsertData.js
import React, { useState } from 'react';
import axios from 'axios';

const InsertData = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/insert', { name, age });
      alert('Data inserted successfully');
    } catch (error) {
      console.error('Error inserting data:', error);
      alert('Error inserting data');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
        required
      />
      <input
        type="number"
        value={age}
        onChange={(e) => setAge(e.target.value)}
        placeholder="Age"
        required
      />
      <button type="submit">Insert Data</button>
    </form>
  );
};

export default InsertData;
