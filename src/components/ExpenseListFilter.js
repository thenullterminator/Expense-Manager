import React from 'react';
import { connect } from 'react-redux';
import ModernDatepicker from 'react-modern-datepicker';
import {setTextFilter,sortByAmount,sortByDate,setStartDate,setEndDate} from '../Actions/filters';

import Moment from 'moment';
import { extendMoment } from 'moment-range';
import '../styles/components/datepicker.scss';
const moment = extendMoment(Moment);

class ExpenseListFilter extends React.Component{

      onStartDateChange=(date)=>{
            if(date)
            {
                  const newdate=date.substring(3,5)+'-'+date.substring(0,2)+'-'+date.substring(6,10);//Consverting into International Standard for js date object.
                  this.props.dispatch(setStartDate(moment(new Date(newdate))))
            }
      };

      onEndDateChange=(date)=>{
            if(date)
            {
                  const newdate=date.substring(3,5)+'-'+date.substring(0,2)+'-'+date.substring(6,10);//Consverting into International Standard for js date object.
                  this.props.dispatch(setEndDate(moment(new Date(newdate))))
            }
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
                        <h4>Start Date</h4>
                        <ModernDatepicker
                              date={(this.props.filters.startDate).format('DD-MM-YYYY')}
                              format={'DD-MM-YYYY'}
                              showBorder
                              className='color'
                              onChange={this.onStartDateChange}
                              placeholder={'Select a date'}
                              
                        />
                        <br/>
                        <br/>
                        <h4> End Date</h4>
                        <ModernDatepicker
                              date={(this.props.filters.endDate).format('DD-MM-YYYY')}
                              format={'DD-MM-YYYY'}
                              className='color'
                              showBorder
                              onChange={this.onEndDateChange}
                              placeholder={'Select a date'}
                              minDate={(this.props.filters.startDate).format('DD-MM-YYYY')}
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