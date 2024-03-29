import React from  'react';
import {connect} from 'react-redux';
import moment from 'moment';
import selectExpenses from '../selectors/selectors';
import ExpenseListItem from './ExpenseListItem'

export const ExpenseList=(props)=>(

      <div>
            {
                  props.expenses.length === 0 ? 
                  (
                        <p>No Expenses</p>
                  ) 
                  :
                  (
                        props.expenses.map((expense,index)=>(<ExpenseListItem key={index} {...expense} />))
                  )
            }
            
      </div>

);

const mapStateToProps=(state)=>{

      return {
            expenses:selectExpenses(state.expenses,state.filters)
      };
};

export default connect(mapStateToProps)(ExpenseList);