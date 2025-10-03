// client/src/pages/Dashboard.jsx
import React, { useState, useEffect } from 'react';
import ExpenseForm from '../components/ExpenseForm';
import Filters from '../components/Filters';
import ExpenseList from '../components/ExpenseList';
import Summary from '../components/Summary';
import { getExpenses, getSummary, addExpense, updateExpense, deleteExpense } from '../services/api';

const Dashboard = () => {
  const [expenses, setExpenses] = useState([]);
  const [summary, setSummary] = useState({});
  const [filters, setFilters] = useState({});

  // Fetch expenses and summary
  const fetchData = async () => {
    const expData = await getExpenses(filters);
    setExpenses(expData);
    const sumData = await getSummary();
    setSummary(sumData);
  };

  useEffect(() => {
    fetchData();
  }, [filters]);

  // Add new expense
  const handleAddExpense = async (expense) => {
    await addExpense(expense);
    fetchData();
  };

  // Update expense
  const handleUpdateExpense = async (id, updatedExpense) => {
    await updateExpense(id, updatedExpense);
    fetchData();
  };

  // Delete expense
  const handleDeleteExpense = async (id) => {
    await deleteExpense(id);
    fetchData();
  };

  return (
     <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-indigo-600 mb-6">Dashboard</h1>

      {/* Horizontal Flex Container with Equal Height Boxes */}
      <div className="flex flex-wrap gap-6 mb-6 items-stretch">
        <div className="flex-1 min-w-[300px] h-full">
          <ExpenseForm onAddExpense={handleAddExpense} />
        </div>

        <div className="flex-1 min-w-[300px] h-full">
          <Filters filters={filters} setFilters={setFilters} />
        </div>

        <div className="flex-1 min-w-[300px] h-full">
          <Summary summary={summary} />
        </div>
      </div>

      {/* ExpenseList full width */}
      <div className="w-full">
        <ExpenseList
          expenses={expenses}
          onUpdateExpense={handleUpdateExpense}
          onDeleteExpense={handleDeleteExpense}
        />
      </div>
    </div>
  );
};

export default Dashboard;
