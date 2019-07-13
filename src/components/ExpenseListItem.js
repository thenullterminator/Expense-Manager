import React from 'react';
import {connect} from 'react-redux';
import { removeExpense } from '../Actions/expenses';
const ExpenseListItem=(props)=>(
      <div>
            <h2>Description:{props.description}</h2>
            <h4>Amount: &#8377; {props.amount}</h4>
            <h4>CreatedAt:{props.createdAt}</h4>
            <button onClick={(e)=>{
                  props.dispatch(removeExpense({id:props.id}))
            }}>Remove</button>
      </div>
);

export default connect()(ExpenseListItem);