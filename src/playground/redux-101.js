import {createStore} from 'redux';


const store=createStore((state={count:0},action)=>{

      switch(action.type)
      {
            case 'INCREMENT':
                  return{
                        count:state.count+action.incrementBy
                  };
            
            case 'DECREMENT':
                  return{
                        count:state.count-action.decrementBy
                  };

            case 'RESET':
                  return{
                        count:0
                  };
            case 'SET':
                  return{
                        count:action.set
                  };
            default:
                  return state;
      
      };

});

store.subscribe(()=>{
      console.log(store.getState())
});


const incrementCount=({incrementBy=1}={})=>({
      type:'INCREMENT',
      incrementBy:incrementBy
});

const decrementCount=({decrementBy=1}={})=>({
      type:'DECREMENT',
      decrementBy:decrementBy
});

const resetCount=()=>({
      type:'RESET',
});
const setCount=({setcount=0}={})=>({
      type:'SET',
      set:setcount
});


store.dispatch(incrementCount());
store.dispatch(incrementCount());
store.dispatch(incrementCount());
store.dispatch(decrementCount({decrementBy:100}));
store.dispatch(resetCount({decrementBy:100}));
store.dispatch(incrementCount());
store.dispatch(setCount({setcount:1000}));

