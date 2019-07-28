import React from 'react';
import {shallow} from 'enzyme';
import ExpenseForm from '../../components/ExpenseForm';
import expenses from '../fixtures/expenses';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';

test('should render Expense Form with defaults',()=>{

      const wrapper=shallow(<ExpenseForm/>);
      expect(wrapper).toMatchSnapshot();

});

test('should render Expense Form with given data',()=>{

      const wrapper=shallow(<ExpenseForm expense={expenses[1]} />);
      expect(wrapper).toMatchSnapshot();
});

test('should render error for invalid form submission',()=>{

      const wrapper=shallow(<ExpenseForm />);
      expect(wrapper).toMatchSnapshot();

      wrapper.find('form').simulate('submit',{
            preventDefault:()=>{}
      });
      expect(wrapper.state('error').length).toBeGreaterThan(0);
      expect(wrapper).toMatchSnapshot();

});

test('should set description on input change',()=>{

      const wrapper=shallow(<ExpenseForm />);
      expect(wrapper).toMatchSnapshot();

      const value="New Description";
      wrapper.find('input').at(0).simulate('change',{
            target:{value}
      });
      expect(wrapper.state('description')).toBe(value);
      expect(wrapper).toMatchSnapshot();

});

test('should set note on input change',()=>{

      const wrapper=shallow(<ExpenseForm />);
      expect(wrapper).toMatchSnapshot();

      const value="New Note";
      wrapper.find('textarea').simulate('change',{
            target:{value}
      });
      expect(wrapper.state('note')).toBe(value);
      expect(wrapper).toMatchSnapshot();

});

test('should set amount if valid',()=>{

      const wrapper=shallow(<ExpenseForm />);
      expect(wrapper).toMatchSnapshot();

      const value='12.32';
      wrapper.find('input').at(1).simulate('change',{
            target:{value}
      });
      expect(wrapper.state('amount')).toBe(value);
      expect(wrapper).toMatchSnapshot();

});

test('should not set amount if invalid',()=>{

      const wrapper=shallow(<ExpenseForm />);
      expect(wrapper).toMatchSnapshot();

      const value='12.3233';
      wrapper.find('input').at(1).simulate('change',{
            target:{value}
      });
      expect(wrapper.state('amount')).toBe('');
      expect(wrapper).toMatchSnapshot();

});

test('should call onSubmit prop for valid form submission',()=>{

      const onSubmitSpy=jest.fn();
      const wrapper=shallow(<ExpenseForm  expense={expenses[0]} onSubmit={onSubmitSpy}/>);

      wrapper.find('form').simulate('submit',{
            preventDefault:()=>{}
      });

      expect(wrapper.state('error')).toBe('');
      expect(onSubmitSpy).toHaveBeenCalledWith({
            description:expenses[0].description,
            note:expenses[0].note,
            amount:expenses[0].amount,
            createdAt:expenses[0].createdAt,
      });

});


test('should set new Date on date change',()=>{

      const now=moment();
      const wrapper=shallow(<ExpenseForm />)
      wrapper.find(SingleDatePicker).prop('onDateChange')(now);
      expect(wrapper.state('createdAt')).toBe(now);
});

test('should set new focus on focus change',()=>{

      const focus={focused:true};
      const wrapper=shallow(<ExpenseForm />)
      wrapper.find(SingleDatePicker).prop('onFocusChange')(focus);
      expect(wrapper.state('calenderFocussed')).toBe(focus.focused);
});