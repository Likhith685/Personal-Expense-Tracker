// server/routes/expenseRoutes.js
const express = require('express');
const router = express.Router();
const {
  addExpense,
  getExpenses,
  updateExpense,
  deleteExpense,
  getSummary,
} = require('../controllers/expenseController');

router.route('/').get(getExpenses).post(addExpense);
router.route('/summary').get(getSummary);
router.route('/:id').put(updateExpense).delete(deleteExpense);

module.exports = router;
