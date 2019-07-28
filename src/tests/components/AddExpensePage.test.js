import React from 'react';
import {shallow} from 'enzyme';
import { AddExpensePage } from '../../components/AddExpensePage.js';
import expenses from '../fixtures/expenses';

let onSubmit,wrapper,history;

beforeEach(()=>{
      onSubmit=jest.fn();
      history={push:jest.fn()};
      wrapper=shallow(<AddExpensePage onSubmit={onSubmit} history={history}/>);
});

test('should render Add expense page correctly',()=>{
      expect(wrapper).toMatchSnapshot();
});

test('should handle onSubmit correctly',()=>{

      wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1]);
      expect(history.push).toHaveBeenCalledWith('/');
      expect(onSubmit).toHaveBeenCalledWith(expenses[1]);
});