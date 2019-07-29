import React from 'react';
import { shallow } from 'enzyme';
import {filters,altfilters} from '../fixtures/filters';
import {ExpenseListFilter} from '../../components/ExpenseListFilter';
import {DateRangePicker} from 'react-dates';


let setTextFilter,setStartDate,setEndDate,sortByDate,sortByAmount,wrapper;

beforeEach(()=>{

      setTextFilter=jest.fn();
      setEndDate=jest.fn();
      setStartDate=jest.fn();
      sortByAmount=jest.fn();
      sortByDate=jest.fn();
      wrapper=shallow(<ExpenseListFilter

            setTextFilter={setTextFilter}
            setStartDate={setStartDate}
            setEndDate={setEndDate}
            sortByAmount={sortByAmount}
            sortByDate={sortByDate}
            filters={filters}
            
      />);
});

test('should render expense list filter correctly',()=>{

      expect(wrapper).toMatchSnapshot();
});

test('should render expense list filter correctly with alt data',()=>{

      wrapper.setProps({
            filters:altfilters
      });
      expect(wrapper).toMatchSnapshot();
});

test('should handle text change',()=>{
      const value='test';
      wrapper.find('input').simulate('change',{
            target:{value}
      });
      expect(setTextFilter).toHaveBeenLastCalledWith(value);
});

test('should sort by date',()=>{
      const value='date';
      wrapper.find('select').simulate('change',{
            target:{value}
      });
      expect(sortByDate).toHaveBeenCalled();
});

test('should sort by amount',()=>{
      const value='amount';
      wrapper.find('select').simulate('change',{
            target:{value}
      });
      expect(sortByAmount).toHaveBeenCalled();
});

test('should handle date changes',()=>{
      const value={startDate:100,endDate:200};
      wrapper.find(DateRangePicker).prop('onDatesChange')(value);
      expect(setStartDate).toHaveBeenLastCalledWith(value.startDate);
      expect(setEndDate).toHaveBeenLastCalledWith(value.endDate);
});

test('should handle date focus changes',()=>{
      const value='startDate';
      wrapper.find(DateRangePicker).prop('onFocusChange')(value);
      expect(wrapper.state('calenderFocussed')).toBe(value);
});



