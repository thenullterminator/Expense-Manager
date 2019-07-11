import React from 'react';

import ExpenseList from './ExpenseList';
import ExpenseListFilter from './ExpenseListFilter';
const ExpenseDashboardPage=()=>(
      <div>
            <p>This is expense dashboard page.</p>
            <ExpenseListFilter/>
            <ExpenseList/>
      </div>
);

export default ExpenseDashboardPage;
