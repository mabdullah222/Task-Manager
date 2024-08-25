
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../features/filterSlice';

function FilterComponent() {
  const dispatch = useDispatch();
  const currentFilter = useSelector((state) => state.filter);

  const filters = [
    { label: 'All', value: 'all' },
    { label: 'Completed', value: 'completed' },
    { label: 'Pending', value: 'pending' },
  ];

  return (
    <div className="flex space-x-2 mt-6">
      {filters.map((filter) => (
        <button
          key={filter.value}
          onClick={() => dispatch(setFilter(filter.value))}
          className={`px-4 py-2 rounded ${
            currentFilter === filter.value
              ? 'bg-blue-500 text-white'
              : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200'
          } hover:bg-blue-400`}
        >
          {filter.label}
        </button>
      ))}
    </div>
  );
}

export default FilterComponent;
