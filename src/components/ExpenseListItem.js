import React from 'react';
import {Link} from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

const ExpenseListItem=(props)=>(
      <div>
            <Link to={`/edit/${props.id}`}><h2>{props.description}</h2></Link>
            <h4>Amount:  {numeral(props.amount).format('$0,0.00')}</h4>
            <h4>CreatedAt:{moment(props.createdAt).format('MMMM Do, YYYY')}</h4>
      </div>
);

export default ExpenseListItem;