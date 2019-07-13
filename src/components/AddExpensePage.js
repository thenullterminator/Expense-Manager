import React from 'react';
import ExpenseForm from './ExpenseForm';

const addExpense=(expense)=>{
console.log(expense);
};

const AddExpensePage=()=>(
      <div>
            <h2>Add Expense</h2>
            <ExpenseForm onSubmit={addExpense}/>
      </div>
);

export default AddExpensePage;
