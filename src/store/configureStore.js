import {createStore,combineReducers} from 'redux';
import expenseReducer from '../Reducers/expenses';
import filterReducer from '../Reducers/filters';
//Creating redux store

export default ()=>{

      const store=createStore(
            combineReducers({
                  expenses:expenseReducer,
                  filters:filterReducer
            }),
            window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // for redux dev tools.
      );

      return store;


};

