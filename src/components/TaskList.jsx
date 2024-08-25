
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask, toggleTaskCompletion } from '../features/taskSlice';

function TaskList() {
  const tasks = useSelector((state) => state.tasks);
  const filter = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'all') return true;
    if (filter === 'completed') return task.completed;
    if (filter === 'pending') return !task.completed;
    return true;
  });

  return (
    <div className="mt-6">
      <h2 className="text-xl font-semibold mb-4">Your Tasks</h2>
      {filteredTasks.length === 0 ? (
        <p className="text-gray-500">No tasks available. Add a task to get started!</p>
      ) : (
        <ul className="space-y-4">
          {filteredTasks.map((task) => (
            <li
              key={task.id}
              className="bg-white dark:bg-gray-800 p-4 rounded shadow flex justify-between items-center"
            >
              <div>
                <h3
                  className={`text-lg font-medium ${
                    task.completed ? 'line-through text-gray-500' : ''
                  }`}
                >
                  {task.title}
                </h3>
                {task.description && (
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {task.description}
                  </p>
                )}
              </div>
              <div className="flex space-x-2">
                <button
                  onClick={() => dispatch(toggleTaskCompletion(task.id))}
                  className={`px-3 py-1 rounded ${
                    task.completed
                      ? 'bg-yellow-500 hover:bg-yellow-600'
                      : 'bg-green-500 hover:bg-green-600'
                  } text-white`}
                >
                  {task.completed ? 'Undo' : 'Complete'}
                </button>
                <button
                  onClick={() => dispatch(deleteTask(task.id))}
                  className="px-3 py-1 rounded bg-red-500 hover:bg-red-600 text-white"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default TaskList;
