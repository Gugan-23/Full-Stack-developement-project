import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import Filter from './components/Filter';
import { TaskProvider } from './context/TaskContext';

function App() {
  const [view, setView] = useState('home');

  const handleViewChange = (view) => {
    setView(view);
  };

  return (
    <TaskProvider>
      <div style={{ display: 'flex' }}>
        <Sidebar onViewChange={handleViewChange} />
        <div style={{ marginLeft: '250px', padding: '20px', width: '100%' }}>
          {view === 'home' && <TaskList />}
          {view === 'add' && <TaskForm />}
          {view === 'search' && <Filter />}
          {view === 'completed' && <TaskList filter="completed" />}
          {view === 'pending' && <TaskList filter="pending" />}
        </div>
      </div>
    </TaskProvider>
  );
}

export default App;
