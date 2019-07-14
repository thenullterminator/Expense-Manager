import React from 'react';
import {connect} from 'react-redux';
import ExpenseForm from './ExpenseForm';
import {editExpense,removeExpense} from '../Actions/expenses';
const EditExpensePage=(props)=>{
     
     return( 
      <div>
            <ExpenseForm
                  expense={props.expense}
                  onSubmit={(expense)=>{
                        props.dispatch(editExpense(props.expense.id,expense));
                        props.history.push('/');//Redirecting to home page.
                  }}
            />

            <button onClick={(e)=>{
                  props.dispatch(removeExpense({id:props.expense.id}));
                  props.history.push('/');//Redirecting to home page.
            }}>Remove</button>
      </div>
      );
};

const mapStateToProps=(state,props)=>{
      return{
            expense:state.expenses.filter((expense)=> (expense.id===props.match.params.id))[0]
      };
};

export default connect(mapStateToProps)(EditExpensePage);
