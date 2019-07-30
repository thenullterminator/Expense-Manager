import React from 'react';
import {shallow} from 'enzyme';
import expenses from '../fixtures/expenses';
import selectExpenseTotal from '../../selectors/expense-total';

test('should return 0 for no expenses',()=>{

      expect(selectExpenseTotal([])).toBe(0);
});

test('should correctly add up single expense',()=>{

      expect(selectExpenseTotal([expenses[0]])).toBe(expenses[0].amount);
});

test('should correctly add up multiple expenses',()=>{

      expect(selectExpenseTotal(expenses)).toBe(expenses[0].amount+expenses[1].amount+expenses[2].amount);
});