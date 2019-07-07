import {createStore,combineReducers} from 'redux';
import uuid from 'uuid';

// Action Generators
const addExpense=({description='',note='',amount=0,createdAt=0}={})=>{

     return {
                  type:'ADD_EXPENSE',
                  expense: {
                        id:uuid(),
                        description,
                        note,
                        amount,
                        createdAt
            }
      };
};

const removeExpense=({id}={})=>{

      return{
                  type:'REMOVE_EXPENSE',
                  id
       };
};


// Expense Reducer
const expenseDefaultState=[];
const expenseReducer=(state=expenseDefaultState,action)=>{

      switch(action.type)
      {
            case 'ADD_EXPENSE':
                  return [...state,action.expense];
            case 'REMOVE_EXPENSE':
                  return state.filter(({id})=>id!==action.id);
            default:
                  return state;
      }

};


// Filter Reducer
const filterDefaultState={
      text:'',
      sortBy:'date',
      startDate:undefined,
      endDate:undefined
};

const filterReducer=(state=filterDefaultState,action)=>{

      switch(action.type)
      {
            default:
                  return state;
      }

};
// Creating redux store
const store=createStore(
      combineReducers({
            expenses:expenseReducer,
            filters:filterReducer
      })
);
// subscribing store.
store.subscribe(()=>{
      console.log(store.getState());
});

// Dispatching changes.
const first=store.dispatch(addExpense({description:"timepass",amount:200}));
store.dispatch(addExpense({description:"timepass 2",amount:2020}));
store.dispatch(removeExpense({id:first.expense.id}));