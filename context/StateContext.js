import React, { createContext, useContext, useState } from 'react';

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [taskId, setTaskId] = useState('');

  const addTask = (task, dueDate) => {
    setTasks([...tasks, { task, dueDate }]);
    localStorage.setItem('tasks', JSON.stringify([...tasks, { task, dueDate }]));
  };

  const deleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task, index) => index !== taskId);
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };

  return (
    <TaskContext.Provider value={{ tasks, addTask, deleteTask, taskId, setTaskId }}>
      {children}
    </TaskContext.Provider>
  );
};

export const useTaskProvider = () =>
useContext(TaskContext)