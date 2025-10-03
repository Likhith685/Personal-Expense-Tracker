// client/src/components/ExpenseForm.jsx
import React, { useState } from 'react';

const ExpenseForm = ({ onAddExpense }) => {
  const [formData, setFormData] = useState({
    amount: '',
    date: '',
    note: '',
    category: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.amount || !formData.date) {
      alert('Amount and Date are required');
      return;
    }
    onAddExpense({ ...formData, amount: parseFloat(formData.amount) });
    setFormData({ amount: '', date: '', note: '', category: '' });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-lg shadow-md flex flex-col gap-4 max-w-md"
    >
      <h2 className="text-xl font-bold text-indigo-600">Add New Expense</h2>
      <input
        type="number"
        name="amount"
        placeholder="Amount"
        value={formData.amount}
        onChange={handleChange}
        className="border p-2 rounded"
      />
      <input
        type="date"
        name="date"
        value={formData.date}
        onChange={handleChange}
        className="border p-2 rounded"
      />
      <input
        type="text"
        name="note"
        placeholder="Note"
        value={formData.note}
        onChange={handleChange}
        className="border p-2 rounded"
      />
      <select
        name="category"
        value={formData.category}
        onChange={handleChange}
        className="border p-2 rounded"
      >
        <option value="Other">Other</option>
        <option value="Food">Food</option>
        <option value="Travel">Travel</option>
        <option value="Bills">Bills</option>
        <option value="Entertainment">Entertainment</option>
      </select>
      <button
        type="submit"
        className="bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 transition"
      >
        Add Expense
      </button>
    </form>
  );
};

export default ExpenseForm;
