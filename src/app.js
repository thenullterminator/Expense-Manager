import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';

import AppRouter from './routers/AppRouter';
import configStore from './store/configureStore';
import {addExpense} from './Actions/expenses';
import {setTextFilter} from './Actions/filters';
import getVisibleExpenses from './selectors/selectors';


const store=configStore();

store.dispatch(addExpense({description:'Water Bill',amount:300,createdAt:1563100512075}));
store.dispatch(addExpense({description:'Gas Bill',amount:400,createdAt:1563100512075}));
store.dispatch(addExpense({description:'Air',amount:500,createdAt:100}));

// store.dispatch(setTextFilter('aiR'));



ReactDOM.render(
      <Provider store={store}>
      <AppRouter/>
      </Provider>
,document.getElementById('app'));
