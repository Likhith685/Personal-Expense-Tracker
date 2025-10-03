// client/src/pages/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-5xl font-bold mb-4 text-indigo-600">Welcome to Expense Tracker</h1>
      <p className="text-lg mb-6">Manage your expenses easily and track your spending.</p>
      <Link
        to="/dashboard"
        className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-indigo-700 transition"
      >
        Go to Dashboard
      </Link>
    </div>
  );
};

export default Home;
