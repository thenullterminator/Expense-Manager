import {setTextFilter,setEndDate,setStartDate,sortByAmount,sortByDate} from '../../Actions/filters';

test('should set filter action object to sort by date',()=>{
      const result=sortByDate();
      expect(result).toEqual({
            type:'SORT_BY_DATE'
      });
});

test('should set filter action object to sort by amount',()=>{
      const result=sortByAmount();
      expect(result).toEqual({
            type:'SORT_BY_AMOUNT'
      });
});

test('should set filter action object with start date',()=>{
      const result=setStartDate(123);
      expect(result).toEqual({
            type:'SET_START_DATE',
            date:123
      });
});

test('should set filter action object with end date',()=>{
      const result=setEndDate(123);
      expect(result).toEqual({
            type:'SET_END_DATE',
            date:123
      });
});

test('should set text filter with provided values',()=>{
      const result=setTextFilter('test');
      expect(result).toEqual({
            type:'SET_TEXT_FILTER',
            text:'test'
      });
});

test('should set text filter with default values',()=>{
      const result=setTextFilter();
      expect(result).toEqual({
            type:'SET_TEXT_FILTER',
            text:''
      });
});