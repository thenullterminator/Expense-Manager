import React from 'react';
import ExpenseForm from './ExpenseForm';
import { connect } from 'react-redux';
import {addExpense} from '../Actions/expenses';


const AddExpensePage=(props)=>(
      <div>
            <h2>Add Expense</h2>
            <ExpenseForm onSubmit={(expense)=>{
                  props.dispatch(addExpense(expense));
            }}/>
      </div>
);

export default connect()(AddExpensePage);
