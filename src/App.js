import React from 'react';
import ToDoList from './ToDoList';
import Footer from './Footer';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-black flex flex-col justify-between">
      <div className="flex-grow flex items-center justify-center">
        <ToDoList />
      </div>
      <Footer />
    </div>
  );
};

export default App;
