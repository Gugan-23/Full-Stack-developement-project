// src/components/SearchTask.js
import React, { useState, useContext } from 'react';
import { TaskContext } from '../context/TaskContext';
import Task from './Task';

const SearchTask = () => {
  const { tasks } = useContext(TaskContext);
  const [searchText, setSearchText] = useState('');
  const [searchDate, setSearchDate] = useState('');

  // Function to filter tasks
  const filteredTasks = tasks.filter(task => {
    const matchesText = task.title.toLowerCase().includes(searchText.toLowerCase());
    const matchesDate = searchDate ? task.dueDate === searchDate : true;
    return matchesText && matchesDate;
  });

  return (
    <div className="search-task">
      <h2>Search Tasks</h2>
      <input
        type="text"
        placeholder="Search by title..."
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <input
        type="date"
        value={searchDate}
        onChange={(e) => setSearchDate(e.target.value)}
      />
      <div className="task-list">
        {filteredTasks.length > 0 ? (
          filteredTasks.map(task => <Task key={task.id} task={task} />)
        ) : (
          <p>No tasks found.</p>
        )}
      </div>
    </div>
  );
};

export default SearchTask;
