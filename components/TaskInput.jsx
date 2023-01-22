import React, { useContext, useState } from 'react';
import { TaskContext } from '../context/StateContext';

function TaskForm() {
  const { addTask } = useContext(TaskContext);
  const [task, setTask] = useState('');
  const [dueDate, setDueDate] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    addTask(task, dueDate);
    setTask('');
    setDueDate('');
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <label className="task-form__label">
        Task:
        <input type="text" value={task} onChange={e => setTask(e.target.value)} className="task-form__input"  />
      </label>
      <label className="task-form__label">
        Due Date:
        <input type="date" value={dueDate} onChange={e => setDueDate(e.target.value)} className="task-form__input"  />
      </label>
      <button type="submit" className="task-form__button">Add</button>
    </form>
  );
}

export default TaskForm;