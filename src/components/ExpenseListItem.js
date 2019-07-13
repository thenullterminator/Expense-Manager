import React from 'react';
import {Link} from 'react-router-dom';
const ExpenseListItem=(props)=>(
      <div>
            <Link to={`/edit/${props.id}`}><h2>{props.description}</h2></Link>
            <h4>Amount: &#8377; {props.amount}</h4>
            <h4>CreatedAt:{props.createdAt}</h4>
      </div>
);

export default ExpenseListItem;