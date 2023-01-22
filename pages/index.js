import React, { useState } from 'react';
import TaskForm from '../components/TaskInput';
import TaskList from '../components/TaskList';

function Home() {

  return (
    <div>
      <TaskForm/>
      <TaskList/>
    </div>
  );
}

export default Home;