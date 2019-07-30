import React from 'react';
import {shallow} from 'enzyme';
import {ExpenseSummary} from '../../components/ExpenseSummary';
import expenses from '../fixtures/expenses';

test('should render Expense Summary correctly for no expenses',()=>{

      const wrapper=shallow(<ExpenseSummary expenses={[]}/>);
      expect(wrapper).toMatchSnapshot();
});

test('should render Expense Summary correctly for multiple expenses',()=>{

      const wrapper=shallow(<ExpenseSummary expenses={expenses}/>);
      expect(wrapper).toMatchSnapshot();
});

