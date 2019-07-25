import {addExpense,editExpense,removeExpense} from '../../Actions/expenses';
import { exportAllDeclaration } from '@babel/types';

test('should setup remove expense action object',()=>{
      const result =removeExpense({id:'123abc'});
      expect(result).toEqual({
            id:'123abc',
            type:'REMOVE_EXPENSE'

      });
});

test('should setup edit expense action object',()=>{
      const result =editExpense('123abc',{note:"A note for testing purpose."});
      expect(result).toEqual({

            type:'EDIT_EXPENSE',
            id:'123abc',
            updates:{
                  note:"A note for testing purpose."
            }

      });
});

test('should setup add expense action object with provided values',()=>{

      const testdata={description:'testing purpose',createdAt:1400,amount:100,note:'test case'};
      const result =addExpense(testdata);
      expect(result).toEqual({
           type:'ADD_EXPENSE',
            expense:{
            ...testdata,
            id:expect.any(String)
           }
           
      });
});

test('should setup add expense action object with default values',()=>{

      
      const result =addExpense();
      expect(result).toEqual({
           type:'ADD_EXPENSE',
            expense:{
            description:'',
            note:'',
            amount:0,
            createdAt:0,
            id:expect.any(String)
           }
           
      });
});