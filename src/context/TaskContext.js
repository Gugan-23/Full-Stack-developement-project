import React, { createContext, useReducer } from 'react';
import taskReducer from '../reducers/taskReducer';

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [tasks, dispatch] = useReducer(taskReducer, []);

  const addTask = (task) => {
    dispatch({ type: 'ADD_TASK', payload: task });
  };

  const deleteTask = (id) => {
    dispatch({ type: 'DELETE_TASK', payload: id });
  };

  const completeTask = (id) => {
    dispatch({ type: 'COMPLETE_TASK', payload: id });
  };

  return (
    <TaskContext.Provider value={{ tasks, addTask, deleteTask, completeTask }}>
      {children}
    </TaskContext.Provider>
  );
};
