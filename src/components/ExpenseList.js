import React from  'react';
import {connect} from 'react-redux';

import selectExpenses from '../selectors/selectors';
import ExpenseListItem from './ExpenseListItem'

const ExpenseList=(props)=>(

      <div>
            <p>This is expense list</p>
            {props.expenses.map((expense,index)=>(<ExpenseListItem key={index} {...expense} />))}
      </div>

);

const mapStateToProps=(state)=>{

      return {
            expenses:selectExpenses(state.expenses,state.filters)
      };
};

export default connect(mapStateToProps)(ExpenseList);