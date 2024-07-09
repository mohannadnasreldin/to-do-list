import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTrash, faCheck } from '@fortawesome/free-solid-svg-icons';

const ToDoList = () => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState('');

  useEffect(() => {
    // Load tasks from cookies when the component mounts
    const savedTasks = Cookies.get('tasks');
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    }
  }, []);

  useEffect(() => {
    // Save tasks to cookies whenever tasks change
    Cookies.set('tasks', JSON.stringify(tasks), { expires: 7 });
  }, [tasks]);

  const addTask = () => {
    if (task.trim()) {
      setTasks([...tasks, { text: task, completed: false }]);
      setTask('');
    }
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  const toggleTaskCompletion = (index) => {
    const newTasks = tasks.map((task, i) => 
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(newTasks);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      addTask();
    }
  };

  return (
    <div className="container mx-auto mt-10 max-w-xl p-4 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg">
      <h1 className="text-2xl text-center text-gray-800 dark:text-white mb-4">To-Do List</h1>
      <div className="flex mb-4">
        <input
          type="text"
          className="flex-1 p-2 rounded-l-lg border-t mr-0 border-b border-l text-gray-800 border-gray-700 dark:border-gray-200 dark:bg-white"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button
          className="p-2 bg-blue-500 text-white rounded-r-lg flex items-center justify-center"
          onClick={addTask}
        >
          <FontAwesomeIcon icon={faPlus} />
        </button>
      </div>
      <ul className="list-disc list-inside">
        {tasks.map((task, index) => (
          <li key={index} className="flex justify-between items-center text-gray-800 dark:text-white mb-2">
            <div className="flex items-center">
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleTaskCompletion(index)}
                className="mr-2 rounded"
              />
              <span className={task.completed ? 'line-through' : ''}>
                {task.text}
              </span>
            </div>
            <div className="flex items-center">
              {task.completed && (
                <FontAwesomeIcon icon={faCheck} className="text-green-500 mr-2" />
              )}
              <button
                className="ml-4 p-1 bg-red-500 text-white rounded-lg flex items-center justify-center"
                onClick={() => deleteTask(index)}
              >
                <FontAwesomeIcon icon={faTrash} />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
