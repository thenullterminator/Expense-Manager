import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import 'normalize.css/normalize.css';
import './styles/styles.scss';

import AppRouter from './routers/AppRouter';
import configStore from './store/configureStore';
import {addExpense} from './Actions/expenses';
import {setTextFilter} from './Actions/filters';
import getVisibleExpenses from './selectors/selectors';

const store=configStore();

store.dispatch(addExpense({description:'Water Bill',amount:300,createdAt:100}));
store.dispatch(addExpense({description:'Gas Bill',amount:400,createdAt:900}));
store.dispatch(addExpense({description:'Air',amount:500,createdAt:100}));
store.dispatch(setTextFilter('aiR'));

const state=store.getState();
console.log(getVisibleExpenses(state.expenses,state.filters));

ReactDOM.render(
      <Provider store={store}>
      <AppRouter/>
      </Provider>
,document.getElementById('app'));
