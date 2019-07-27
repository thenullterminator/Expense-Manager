import React from 'react';
import {shallow} from 'enzyme';
import ExpenseDashboard from '../../components/ExpenseDashboardPage';

test('should render expense dashboard page',()=>{

      const wrapper=shallow(<ExpenseDashboard />);
      expect(wrapper).toMatchSnapshot();

});