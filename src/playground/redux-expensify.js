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

const editExpense=(id,updates)=>{
      return{
            type:'EDIT_EXPENSE',
            id,
            updates
      };

};

const setTextFilter=(text='')=>{

      return {
            type:'SET_TEXT_FILTER',
            text
      };

};

const sortByDate=()=>{

      return {
            type:'SORT_BY_DATE'
      };

};

const sortByAmount=()=>{

      return {
            type:'SORT_BY_AMOUNT'
      };

};

const setStartDate=(date)=>{

      return{
            type:'SET_START_DATE',
            date
      };
};

const setEndDate=(date)=>{

      return{
            type:'SET_END_DATE',
            date
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
            case 'EDIT_EXPENSE' :
                  return state.map((expense)=>{
                        if(expense.id===action.id)
                        {
                              return{
                                    ...state,
                                    ...action.updates
                              }
                        }
                  });
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
            case'SET_TEXT_FILTER':
                  return {
                        ...state,
                        text:action.text
                  };
            case 'SORT_BY_DATE':
                  return {
                        ...state,
                        sortBy:'date'
                  };
            case 'SORT_BY_AMOUNT':
                  return {
                        ...state,
                        sortBy:'amount'
                  };
            case 'SET_START_DATE':
                  return {
                        ...state,
                        startDate:action.date
                  };
            case 'SET_END_DATE':
                  return {
                        ...state,
                        endDate:action.date
                  };
            default:
                  return state;
      }

};

// Get visible expenses.

const getVisibleExpenses=(expenses,{sortBy,text,startDate,endDate})=>{

      return expenses.filter((expense)=>{

            const startDateMatch= typeof startDate !=='number' || expense.createdAt>=startDate;
            const endDateMatch=typeof endDate !== 'number' || expense.createdAt<=endDate;
            const textMatch =expense.description.toLowerCase().includes(text.toLowerCase());

            return startDateMatch && endDateMatch && textMatch;
      }).sort((a,b)=>{
            if(sortBy==='date')
            {
                  return a.createdAt<b.createdAt ? 1:-1;
            }
            else if(sortBy==='amount')
            {
                  return a.amount<b.amount ? 1:-1;
            }
      });

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
      
});

// Dispatching changes.
const first=store.dispatch(addExpense({description:"timepass",amount:200,createdAt:100}));
const second=store.dispatch(addExpense({description:"timepass 2",amount:2020,createdAt:200}));
// store.dispatch(removeExpense({id:first.expense.id}));

// store.dispatch(editExpense(second.expense.id,{description:'tp',note:'nothing special'}));
// store.dispatch(setTextFilter('as'));
// store.dispatch(sortByAmount());
// store.dispatch(setEndDate(100));

const state=store.getState();
console.log(getVisibleExpenses(state.expenses,state.filters));