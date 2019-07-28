import React from 'react';
import {shallow} from 'enzyme';
import { AddExpensePage } from '../../components/AddExpensePage.js';
import expenses from '../fixtures/expenses';

let AddExpense,wrapper,history;

beforeEach(()=>{
      AddExpense=jest.fn();
      history={push:jest.fn()};
      wrapper=shallow(<AddExpensePage AddExpense={AddExpense} history={history}/>);
});

test('should render Add expense page correctly',()=>{
      expect(wrapper).toMatchSnapshot();
});

test('should handle onSubmit correctly',()=>{

      wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1]);
      expect(history.push).toHaveBeenLastCalledWith('/');
      expect(AddExpense).toHaveBeenLastCalledWith(expenses[1]);
});