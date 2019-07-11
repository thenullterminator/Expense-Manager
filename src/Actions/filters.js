// Action generator for filters reducers.
const setTextFilter=(text='')=>{

      return {
            type:'SET_TEXT_FILTER',
            text
      };

};

const sortByDate=()=>{

      return {
            type:'SORT_BY_DATE'
      };

};

const sortByAmount=()=>{

      return {
            type:'SORT_BY_AMOUNT'
      };

};

const setStartDate=(date)=>{

      return{
            type:'SET_START_DATE',
            date
      };
};

const setEndDate=(date)=>{

      return{
            type:'SET_END_DATE',
            date
      };
};

export {setEndDate,setStartDate,setTextFilter,sortByAmount,sortByDate};