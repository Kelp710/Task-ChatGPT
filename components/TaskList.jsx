import React, { useContext } from 'react';
import { TaskContext } from '../context/StateContext';

function TaskList() {
  const { tasks, deleteTask } = useContext(TaskContext);

  return (
    <ul className="task-list">
      {tasks.map((task, index) => (
        <li key={index} className="task-list__item" onClick={() => deleteTask(index)}>
          <div className="task-list__text">Task: {task.task}</div>
          <div className="task-list__text">Due Date: {task.dueDate}</div>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
