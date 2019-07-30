import React from 'react';
import selectExpenseTotal from '../selectors/expense-total';
import selectExpenses from '../selectors/selectors';
import {connect} from 'react-redux';
import numeral from 'numeral';

export const ExpenseSummary=(props)=>{

      return(

            <div>
            <p>Viewing {props.expenses.length} expense(s) totalling {numeral(selectExpenseTotal(props.expenses)).format('$0,0.00')}</p>
            </div>

      );

};

const mapStateToProps=(state)=>{

      return {
            expenses:selectExpenses(state.expenses,state.filters)
      };
};

export default connect(mapStateToProps)(ExpenseSummary);