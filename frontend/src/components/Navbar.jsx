// client/src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-indigo-600 text-white px-6 py-4 flex justify-between items-center">
      <div className="text-2xl font-bold">
        <Link to="/">ExpenseTracker</Link>
      </div>
      <ul className="flex space-x-6">
        <li>
          <Link className="hover:underline" to="/">Home</Link>
        </li>
        <li>
          <Link className="hover:underline" to="/dashboard">Dashboard</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
