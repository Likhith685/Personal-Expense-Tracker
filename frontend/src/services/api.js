// client/src/services/api.js
import axios from 'axios';

const API_URL = 'https://personal-expense-tracker-murex.vercel.app/api/expenses';

export const getExpenses = async (filters = {}) => {
  const params = {};
  if (filters.category) params.category = filters.category;
  if (filters.startDate) params.startDate = filters.startDate;
  if (filters.endDate) params.endDate = filters.endDate;
  const response = await axios.get(API_URL, { params });
  return response.data;
};

export const addExpense = async (expense) => {
  const response = await axios.post(API_URL, expense);
  return response.data;
};

export const updateExpense = async (id, expense) => {
  const response = await axios.put(`${API_URL}/${id}`, expense);
  return response.data;
};

export const deleteExpense = async (id) => {
  const response = await axios.delete(`${API_URL}/${id}`);
  return response.data;
};

export const getSummary = async () => {
  const response = await axios.get(`${API_URL}/summary`);
  return response.data;
};
