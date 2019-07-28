import React from 'react';
import { connect } from 'react-redux';
import {setTextFilter,sortByAmount,sortByDate,setStartDate,setEndDate} from '../Actions/filters';
import 'react-dates/initialize';
import {DateRangePicker} from 'react-dates';

class ExpenseListFilter extends React.Component{

      state={
            calenderFocussed:false
      };
      onDateChange=({ startDate, endDate })=>{
            if(startDate){
                  this.props.setStartDate(startDate);
            }
            if(endDate){
                  this.props.setEndDate(endDate);
            }
      };
      onFocusChange=(focusedInput)=>{
            this.setState({calenderFocussed:focusedInput});
      };
      onTextFilterChange=(e)=>{
            this.props.setTextFilter(e.target.value);
      };
      onSortByChange=(e)=>{

            if(e.target.value==='date'){
                  this.props.sortByDate();
            }else{
                  this.props.sortByAmount();
            }
      }
      render(){
            return (
                  <div>
                        <input 
                              type='text' 
                              value={this.props.filters.text} 
                              onChange={this.onTextFilterChange}
                        />

                        <select 
                        value={this.props.filters.sortBy} 
                        onChange={this.onSortByChange}
                        >
                              <option value='date'>Date</option>
                              <option value='amount'>Amount</option>
                        </select>

                        <DateRangePicker
                        startDate={this.props.filters.startDate} 
                        endDate={this.props.filters.endDate} 
                        onDatesChange={this.onDateChange} 
                        focusedInput={this.state.calenderFocussed} 
                        onFocusChange={this.onFocusChange} 
                        showClearDates={true}
                        showDefaultInputIcon={true}
                        numberOfMonths={1}
                        isOutsideRange={()=>false}
                        />
                  </div>
            );
      }
}

const mapStateToProps=(state)=>({
      filters:state.filters
});
const mapDispatchToProps=(dispatch)=>({
      setStartDate:(data)=>dispatch(setStartDate(data)),
      setEndDate:(data)=>dispatch(setEndDate(data)),
      setTextFilter:(data)=>dispatch(setTextFilter(data)),
      sortByDate:()=>dispatch(sortByDate()),
      sortByAmount:()=>dispatch(sortByAmount())
});

export default connect(mapStateToProps,mapDispatchToProps)(ExpenseListFilter);