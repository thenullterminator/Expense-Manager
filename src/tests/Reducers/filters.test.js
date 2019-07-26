import filterReducer from '../../Reducers/filters';
import moment from 'moment';
import { exportAllDeclaration } from '@babel/types';

test('should set up default filter values',()=>{

      const result=filterReducer(undefined,{type:'@@INIT'});

      expect(result).toEqual({
            text:'',
            sortBy:'date',
            startDate:moment().startOf('month'),
            endDate:moment().endOf('month')
      });
});

test('should set sort by to amount',()=>{

      const result=filterReducer(undefined,{type:'SORT_BY_AMOUNT'});
      expect(result.sortBy).toBe('amount');
});

test('should set sort by to date',()=>{

      const result=filterReducer({
            sortBy:'amount',
            text:'',
            startDate:undefined,
            endDate:undefined

      },{type:'SORT_BY_DATE'});
      expect(result.sortBy).toBe('date');
});

test('should set text filter',()=>{

      const result=filterReducer(undefined,{type:'SET_TEXT_FILTER',text:'test'});
      expect(result.text).toBe('test');
});

test('should set start date',()=>{

      const result=filterReducer(undefined,{type:'SET_START_DATE',date:101});
      expect(result.startDate).toBe(101);
});

test('should set end date',()=>{

      const result=filterReducer(undefined,{type:'SET_END_DATE',date:101});
      expect(result.endDate).toBe(101);
});