import React from 'react';
import {connect} from 'react-redux';
import ExpenseForm from './ExpenseForm';
import {editExpense,removeExpense} from '../Actions/expenses';

export class EditExpensePage extends React.Component{

      onSubmit=(expense)=>{
            this.props.editExpense(this.props.expense.id,expense);
            this.props.history.push('/');//Redirecting to home page.
      };

      onRemove=(e)=>{
            this.props.removeExpense(this.props.expense.id);
            this.props.history.push('/');//Redirecting to home page.
      };

      render(){
            return (
                  <div>
                        <ExpenseForm
                              expense={this.props.expense}
                              onSubmit={this.onSubmit}
                        />

                        <button onClick={this.onRemove}>Remove</button>
                  </div>
            );
      }
};

const mapStateToProps=(state,props)=>{
      return{
            expense:state.expenses.filter((expense)=> (expense.id===props.match.params.id))[0]
      };
};

const mapDispatchToProps=(dispatch,props)=>({
      editExpense:(id,expense) => dispatch(editExpense(id,expense)),
      removeExpense:(id) => dispatch(removeExpense({id}))
});

export default connect(mapStateToProps,mapDispatchToProps)(EditExpensePage);
