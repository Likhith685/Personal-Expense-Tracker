// client/src/components/Summary.jsx
import React from 'react';

const Summary = ({ summary }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md max-w-md">
      <h2 className="text-xl font-bold text-indigo-600 mb-4">Summary</h2>
      <p className="mb-2"><strong>Total Spent:</strong> ${summary.total || 0}</p>

      <div className="mb-2">
        <h3 className="font-semibold">By Category:</h3>
        <ul className="list-disc list-inside">
          {summary.byCategory?.map((item) => (
            <li key={item._id}>
              {item._id}: ${item.total}
            </li>
          )) || <li>No data</li>}
        </ul>
      </div>

      <div>
        <h3 className="font-semibold">By Month:</h3>
        <ul className="list-disc list-inside">
          {summary.byMonth?.map((item) => (
            <li key={item._id}>
              {item._id}: ${item.total}
            </li>
          )) || <li>No data</li>}
        </ul>
      </div>
    </div>
  );
};

export default Summary;
