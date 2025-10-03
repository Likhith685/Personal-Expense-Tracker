# Personal Expense Tracker

A **full-stack Personal Expense Tracker** application built with **React**, **Node.js**, **Express**, and **MongoDB**.  
It allows users to manage daily expenses, categorize them, filter them, and view summary reports with a modern, responsive UI.

---
[deployed link](https://personal-expense-tracker-frontend-lime.vercel.app)


## Table of Contents

1. [Project Overview](#project-overview)  
2. [Features](#features)  
3. [Tech Stack](#tech-stack)  
4. [Installation & Setup](#installation--setup)  


---

## Project Overview

Managing personal finances can be challenging. This application helps users:

- Track daily expenses  
- Categorize them (Food, Travel, Bills, etc.)  
- Filter by date or category  
- View insightful reports and summaries

The app is built as a **full-stack web application**:

- **Frontend:** React-based UI for managing expenses  
- **Backend:** Node.js + Express API server for CRUD operations  
- **Database:** MongoDB to store all expenses and categories

---

## Features

### Basic Features
- Add, view, update, and delete expenses  
- Input validation and error handling  
- Data persisted in MongoDB

### Advanced Features
- Categorize expenses  
- Filter by date range or category  
- Summary reports:
  - Total spent  
  - Group by category  
  - Group by month  
- Responsive and modern UI

---

## Tech Stack

| Layer       | Technology                  |
|------------|-----------------------------|
| Frontend   | React, JSX, CSS             |
| Backend    | Node.js, Express.js         |
| Database   | MongoDB, Mongoose           |
| HTTP Client| Axios                       |
| Dev Tools  | Nodemon                     |

---

## Installation & Setup

### Backend Setup

1. Clone the repository:

```bash
git clone https://github.com/Likhith685/Personal-Expense-Tracker.git
cd backend
```
2.install dependencies
```bash
 npm install
```
3. create a .env file
```bash
MONGO_URI=your_mongodb_connection_string
PORT=5000
```
4. start the backend server
```bash
npm run dev
```

### Frontend Setup

 1.Navigate to the client folder:
``` bash
cd frontend
```


 2. Install dependencies:
```bash  
npm install
```


 3.Start the frontend:
``` bash
npm run dev
```

### Base URL
``` bash
http://localhost:5000/api/expenses
```

### Usage

- Add a new expense using the form on the Dashboard
- View all expenses in a list or table layout
- Update or delete any expense using action buttons
- Filter expenses by category or date range
- View summary reports for insights:
- Total expenses
- Category-wise spending
- Monthly spending trends

