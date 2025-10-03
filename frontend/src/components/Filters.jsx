// client/src/components/Filters.jsx
import React, { useState } from 'react';

const Filters = ({ filters, setFilters }) => {
  const [localFilters, setLocalFilters] = useState(filters);

  const handleChange = (e) => {
    setLocalFilters({ ...localFilters, [e.target.name]: e.target.value });
  };

  const applyFilters = () => {
    setFilters(localFilters);
  };

  const resetFilters = () => {
    setLocalFilters({});
    setFilters({});
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md flex flex-col gap-4 max-w-md">
      <h2 className="text-xl font-bold text-indigo-600">Filters</h2>
      <select
        name="category"
        value={localFilters.category || ''}
        onChange={handleChange}
        className="border p-2 rounded"
      >
        <option value="">All Categories</option>
        <option value="Food">Food</option>
        <option value="Travel">Travel</option>
        <option value="Bills">Bills</option>
        <option value="Entertainment">Entertainment</option>
        <option value="Other">Other</option>
      </select>
      <input
        type="date"
        name="startDate"
        value={localFilters.startDate || ''}
        onChange={handleChange}
        className="border p-2 rounded"
      />
      <input
        type="date"
        name="endDate"
        value={localFilters.endDate || ''}
        onChange={handleChange}
        className="border p-2 rounded"
      />
      <div className="flex gap-2">
        <button
          onClick={applyFilters}
          className="bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700 transition"
        >
          Apply
        </button>
        <button
          onClick={resetFilters}
          className="bg-gray-300 py-2 px-4 rounded hover:bg-gray-400 transition"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Filters;
