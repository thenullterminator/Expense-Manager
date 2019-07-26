import expenseReducer from '../../Reducers/expenses';
import moment from 'moment';

import expenses from '../fixtures/expenses';


test('should set up default state for expense reducer',()=>{
      const result=expenseReducer(undefined,{type:'@@INIT'});
      expect(result).toEqual([]);
});

test('should remove expenses of a particular id',()=>{

      const result=expenseReducer(expenses,{type:'REMOVE_EXPENSE',id:expenses[2].id});
      expect(result).toEqual([expenses[0],expenses[1]]);
});

test('should not remove expenses of not existing id',()=>{

      const result=expenseReducer(expenses,{type:'REMOVE_EXPENSE',id:'-1'});
      expect(result).toEqual(expenses);
});

test('should add  an expense',()=>{

      const expense={
            id:'10',
            description:'Rent 10',
            note:'',
            amount:121,
            createdAt:moment(0).subtract(14,'days').valueOf()
      };

      const result=expenseReducer(expenses,{type:'ADD_EXPENSE',expense});
      expect(result).toEqual([...expenses,expense]]);
});

test('should edit expense of an existing id' ,()=>{

      const updates={
            description:'Rent 10',
            note:'2123',
            amount:121,
            createdAt:moment(0).subtract(14,'days').valueOf()
      };

      const result=expenseReducer(expenses,{type:'EDIT_EXPENSE',id:'1',updates});

      expect(result[0]).toEqual({...result[0],...updates});
});

test('should not edit expense of non-existing id' ,()=>{

      const updates={
            description:'Rent 10',
            note:'2123',
            amount:121,
            createdAt:moment(0).subtract(14,'days').valueOf()
      };

      const result=expenseReducer(expenses,{type:'EDIT_EXPENSE',id:'10',updates});

      expect(result).toEqual(expenses);
});