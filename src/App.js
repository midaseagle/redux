import React from 'react';
import AddTask from './components/AddTask';
import TaskList from './components/TaskList';
import DoneTasks from './components/DoneTasks';

const App = () => {
  return (
    <div>
      <h1>Todo App</h1>
      <AddTask />
      <TaskList />
      <DoneTasks />
    </div>
  );
};

export default App;
