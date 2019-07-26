import selectExpenses  from '../../selectors/selectors';
import moment from 'moment';
import { exportAllDeclaration } from '@babel/types';

import expenses from '../fixtures/expenses';

test('should filter expenses by text',()=>{

      const filters={
            text:'3',
            sortBy:'date',
            startDate:undefined,
            endDate:undefined,
      };
      const result=selectExpenses(expenses,filters);
      expect(result).toEqual([expenses[2],expenses[1]]);

});

test('should filter by start date',()=>{

      const filters={
            text:'',
            sortBy:'date',
            startDate:moment(0),
            endDate:undefined,
      };
      const result=selectExpenses(expenses,filters);
      expect(result).toEqual([expenses[2],expenses[1]]);

});

test('should filter by end date',()=>{

      const filters={
            text:'',
            sortBy:'date',
            endDate:moment(0),
            startDate:undefined,
      };
      const result=selectExpenses(expenses,filters);
      expect(result).toEqual([expenses[1],expenses[0]]);

});

test('should sort by date',()=>{

      const filters={
            text:'',
            sortBy:'date',
            endDate:undefined,
            startDate:undefined,
      };
      const result=selectExpenses(expenses,filters);
      expect(result).toEqual([expenses[2],expenses[1],expenses[0]]);

});

test('should sort by amount',()=>{

      const filters={
            text:'',
            sortBy:'date',
            endDate:undefined,
            startDate:undefined,
      };
      const result=selectExpenses(expenses,filters);
      expect(result).toEqual([expenses[2],expenses[1],expenses[0]]);

});