import React, { useContext, useState } from 'react';
import { TaskContext } from '../context/TaskContext';

const Filter = () => {
  const { tasks } = useContext(TaskContext);
  const [query, setQuery] = useState('');
  const [date, setDate] = useState('');

  const filteredTasks = tasks.filter(task =>
    (task.title.toLowerCase().includes(query.toLowerCase()) ||
     task.date === date) && !task.completed
  );

  return (
    <div style={{ padding: '20px' }}>
      <h2>🔍 Search Tasks</h2>
      <div style={{ marginBottom: '20px' }}>
        <input
          type="text"
          placeholder="Search by text..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          style={inputStyle}
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          style={{ ...inputStyle, marginLeft: '10px' }}
        />
      </div>
      <ul style={{ listStyleType: 'none', padding: '0' }}>
        {filteredTasks.map(task => (
          <li key={task.id} style={taskItemStyle}>
            {task.title} - <span>{task.date}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const inputStyle = {
  padding: '10px',
  fontSize: '16px',
  borderRadius: '5px',
  border: '1px solid #ccc',
  width: 'calc(100% - 30px)',
  marginRight: '10px'
};

const taskItemStyle = {
  backgroundColor: '#f9f9f9',
  border: '1px solid #ddd',
  borderRadius: '5px',
  padding: '10px',
  marginBottom: '10px'
};

export default Filter;
