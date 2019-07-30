import React from 'react';

import ExpenseList from './ExpenseList';
import ExpenseListFilter from './ExpenseListFilter';
import ExpenseSummary from '../components/ExpenseSummary';
const ExpenseDashboardPage=()=>(
      <div>
            <p>This is expense dashboard page.</p>
            <ExpenseSummary/>
            <ExpenseListFilter/>
            <ExpenseList/>
      </div>
);

export default ExpenseDashboardPage;
