
const selectExpenseTotal=(expenses)=>{

      if(expenses.length===0) return 0;
      else
      {
            const AmountArray=expenses.map((expense)=> expense.amount);
            const TotalAmount=AmountArray.reduce((total,num)=> total+num);
            return TotalAmount;
      }
};

export default selectExpenseTotal;