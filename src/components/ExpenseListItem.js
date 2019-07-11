import React from 'react';

const ExpenseListItem=({description,amount,createdAt})=>(
      <div>
            <h2>Description:{description}</h2>
            <h4>Amount: ${amount}</h4>
            <h4>CreatedAt:{createdAt}</h4>
      </div>
);

export default ExpenseListItem;