// client/src/components/ExpenseList.jsx
import React from 'react';
import ExpenseItem from './ExpenseItem';

const ExpenseList = ({ expenses, onUpdateExpense, onDeleteExpense }) => {
  if (expenses.length === 0) return <p className="text-gray-600">No expenses found.</p>;

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white rounded-lg shadow-md">
        <thead className="bg-indigo-600 text-white">
          <tr>
            <th className="py-2 px-4">Date</th>
            <th className="py-2 px-4">Amount</th>
            <th className="py-2 px-4">Category</th>
            <th className="py-2 px-4">Note</th>
            <th className="py-2 px-4">Actions</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense) => (
            <ExpenseItem
              key={expense._id}
              expense={expense}
              onUpdateExpense={onUpdateExpense}
              onDeleteExpense={onDeleteExpense}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ExpenseList;
