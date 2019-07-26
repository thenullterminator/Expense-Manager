import React from 'react';
import { connect } from 'react-redux';

import {setTextFilter,sortByAmount,sortByDate,setStartDate,setEndDate} from '../Actions/filters';


import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import {DateRangePicker} from 'react-dates';

class ExpenseListFilter extends React.Component{

      state={
            calenderFocussed:false
      };
      onDateChange=({ startDate, endDate })=>{
            if(startDate){
                  this.props.dispatch(setStartDate(startDate));
            }
            if(endDate){
                  this.props.dispatch(setEndDate(endDate));
            }
      };

      onFocusChange=(focusedInput)=>{
            this.setState({calenderFocussed:focusedInput});
      };

      render(){
            return (
                  <div>
                        <input 
                              type='text' 
                              value={this.props.filters.text} 
                              onChange={(e)=>{
                                    this.props.dispatch(setTextFilter(e.target.value));
                              }}
                        />

                        <select 
                        value={this.props.filters.sortBy} 
                        onChange={(e)=>{

                              if(e.target.value==='date'){
                                    this.props.dispatch(sortByDate());
                              }else{
                                    this.props.dispatch(sortByAmount());
                              }
                        }}
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

const mapStateToProps=(state)=>{

      return {
            filters:state.filters
      };
};

export default connect(mapStateToProps)(ExpenseListFilter);