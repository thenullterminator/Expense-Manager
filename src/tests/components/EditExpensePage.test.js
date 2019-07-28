import React from 'react';
import {shallow} from 'enzyme';
import expenses from '../fixtures/expenses';
import {EditExpensePage} from '../../components/EditExpensePage';

let wrapper,history,editExpense,removeExpense;

beforeEach(()=>{

      editExpense=jest.fn();
      removeExpense=jest.fn();
      history={push:jest.fn()};
      wrapper=shallow(<EditExpensePage editExpense={editExpense} removeExpense={removeExpense} history={history} expense={expenses[0]} />);
});

test('should render edit Expense Page correctly',()=>{

      expect(wrapper).toMatchSnapshot();
});

test('should handle edit expense correctly',()=>{

      wrapper.find('ExpenseForm').prop('onSubmit')(expenses[0]);
      expect(history.push).toHaveBeenLastCalledWith('/');
      expect(editExpense).toHaveBeenLastCalledWith(expenses[0].id,expenses[0]);
});

test('should handle remove expense correctly',()=>{

      wrapper.find('button').simulate('Click');
      expect(history.push).toHaveBeenLastCalledWith('/');
      expect(removeExpense).toHaveBeenLastCalledWith(expenses[0].id);
});