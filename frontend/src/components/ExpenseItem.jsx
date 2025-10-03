// client/src/components/ExpenseItem.jsx
import React, { useState } from 'react';

const ExpenseItem = ({ expense, onUpdateExpense, onDeleteExpense }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    amount: expense.amount,
    date: expense.date.slice(0, 10),
    note: expense.note,
    category: expense.category,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    onUpdateExpense(expense._id, { ...formData, amount: parseFloat(formData.amount) });
    setIsEditing(false);
  };

  return (
    <tr className="border-b">
      <td className="py-2 px-4">
        {isEditing ? (
          <input type="date" name="date" value={formData.date} onChange={handleChange} className="border p-1 rounded" />
        ) : (
          expense.date.slice(0, 10)
        )}
      </td>
      <td className="py-2 px-4">
        {isEditing ? (
          <input type="number" name="amount" value={formData.amount} onChange={handleChange} className="border p-1 rounded w-20" />
        ) : (
          `$${expense.amount}`
        )}
      </td>
      <td className="py-2 px-4">
        {isEditing ? (
          <select name="category" value={formData.category} onChange={handleChange} className="border p-1 rounded">
            <option value="Food">Food</option>
            <option value="Travel">Travel</option>
            <option value="Bills">Bills</option>
            <option value="Entertainment">Entertainment</option>
            <option value="Other">Other</option>
          </select>
        ) : (
          expense.category
        )}
      </td>
      <td className="py-2 px-4">
        {isEditing ? (
          <input type="text" name="note" value={formData.note} onChange={handleChange} className="border p-1 rounded" />
        ) : (
          expense.note
        )}
      </td>
      <td className="py-2 px-4 flex gap-2">
        {isEditing ? (
          <>
            <button onClick={handleSave} className="bg-green-600 text-white px-2 py-1 rounded hover:bg-green-700 transition">Save</button>
            <button onClick={() => setIsEditing(false)} className="bg-gray-300 px-2 py-1 rounded hover:bg-gray-400 transition">Cancel</button>
          </>
        ) : (
          <>
            <button onClick={() => setIsEditing(true)} className="bg-yellow-500 text-white px-2 py-1 rounded hover:bg-yellow-600 transition">Edit</button>
            <button onClick={() => onDeleteExpense(expense._id)} className="bg-red-600 text-white px-2 py-1 rounded hover:bg-red-700 transition">Delete</button>
          </>
        )}
      </td>
    </tr>
  );
};

export default ExpenseItem;
