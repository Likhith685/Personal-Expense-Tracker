// server/controllers/expenseController.js
const Expense = require('../models/Expense');

// @desc    Add new expense
// @route   POST /api/expenses
// @access  Public
const addExpense = async (req, res, next) => {
  try {
    const { amount, date, note, category } = req.body;

    const expense = await Expense.create({ amount, date, note, category });
    res.status(201).json(expense);
  } catch (error) {
    next(error);
  }
};

// @desc    Get all expenses with optional filters
// @route   GET /api/expenses
// @access  Public
const getExpenses = async (req, res, next) => {
  try {
    const { category, startDate, endDate } = req.query;
    let filter = {};

    if (category) filter.category = category;
    if (startDate || endDate) {
      filter.date = {};
      if (startDate) filter.date.$gte = new Date(startDate);
      if (endDate) filter.date.$lte = new Date(endDate);
    }

    const expenses = await Expense.find(filter).sort({ date: -1 });
    res.status(200).json(expenses);
  } catch (error) {
    next(error);
  }
};

// @desc    Update expense
// @route   PUT /api/expenses/:id
// @access  Public
const updateExpense = async (req, res, next) => {
  try {
    const expense = await Expense.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!expense) return res.status(404).json({ message: 'Expense not found' });
    res.status(200).json(expense);
  } catch (error) {
    next(error);
  }
};

// @desc    Delete expense
// @route   DELETE /api/expenses/:id
// @access  Public
const deleteExpense = async (req, res, next) => {
  try {
    const expense = await Expense.findByIdAndDelete(req.params.id);
    if (!expense) return res.status(404).json({ message: 'Expense not found' });
    res.status(200).json({ message: 'Expense deleted' });
  } catch (error) {
    next(error);
  }
};

// @desc    Get summary reports
// @route   GET /api/expenses/summary
// @access  Public
const getSummary = async (req, res, next) => {
  try {
    const total = await Expense.aggregate([
      {
        $group: {
          _id: null,
          totalSpent: { $sum: '$amount' },
        },
      },
    ]);

    const byCategory = await Expense.aggregate([
      {
        $group: {
          _id: '$category',
          total: { $sum: '$amount' },
        },
      },
    ]);

    const byMonth = await Expense.aggregate([
      {
        $group: {
          _id: { $dateToString: { format: '%Y-%m', date: '$date' } },
          total: { $sum: '$amount' },
        },
      },
    ]);

    res.status(200).json({ total: total[0]?.totalSpent || 0, byCategory, byMonth });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  addExpense,
  getExpenses,
  updateExpense,
  deleteExpense,
  getSummary,
};
