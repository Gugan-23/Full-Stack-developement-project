import React, { useContext } from 'react';
import { TaskContext } from '../context/TaskContext';

const TaskList = ({ filter }) => {
  const { tasks, completeTask, deleteTask } = useContext(TaskContext);

  const handleDelete = (taskId) => {
    if (window.confirm('Are you sure you want to delete this task?')) {
      deleteTask(taskId);
    }
  };

  const filteredTasks = tasks.filter(task => {
    if (filter === 'completed') return task.completed;
    if (filter === 'pending') return !task.completed;
    return true;
  });

  return (
    <div style={{ padding: '20px' }}>
      <h2>{filter === 'completed' ? 'Completed Tasks' : 'Pending Tasks'}</h2>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {filteredTasks.map(task => (
          <li key={task.id} style={taskItemStyle}>
            <div>
              <strong>{task.title}</strong>
              <p>{task.date} {task.time && `at ${task.time}`}</p>
              <button
                onClick={() => completeTask(task.id)}
                style={taskButtonStyle(task.completed)}
              >
                {task.completed ? 'Completed' : 'Complete'}
              </button>
              {filter === 'completed' && (
                <button
                  onClick={() => handleDelete(task.id)}
                  style={deleteButtonStyle}
                >
                  Delete
                </button>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

const taskItemStyle = {
  marginBottom: '15px',
  padding: '10px',
  border: '1px solid #ddd',
  borderRadius: '4px',
  backgroundColor: '#f9f9f9'
};

const taskButtonStyle = (completed) => ({
  backgroundColor: completed ? '#28a745' : '#6c757d',
  color: '#fff',
  border: 'none',
  borderRadius: '4px',
  padding: '5px 10px',
  cursor: 'pointer',
  marginRight: '10px'
});

const deleteButtonStyle = {
  backgroundColor: '#dc3545',
  color: '#fff',
  border: 'none',
  borderRadius: '4px',
  padding: '5px 10px',
  cursor: 'pointer'
};

export default TaskList;
