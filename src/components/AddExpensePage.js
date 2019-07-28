import React from 'react';
import ExpenseForm from './ExpenseForm';
import { connect } from 'react-redux';
import {addExpense} from '../Actions/expenses';


 export class AddExpensePage extends React.Component{

      onSubmit=(expense)=>{
            this.props.onSubmit(expense);
            this.props.history.push('/');//Redirecting to home page.
      };

      render(){
            return (

            <div>
                  <h2>Add Expense</h2>
                  <ExpenseForm onSubmit={this.onSubmit}/>
            </div>

            );
      }
}


const mapDispatchToProps=(dispatch)=>{
      return {
            onSubmit:(expense)=>dispatch(addExpense(expense))
      };
};

export default connect(undefined,mapDispatchToProps)(AddExpensePage);
