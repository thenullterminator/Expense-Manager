import React from 'react';
import moment from 'moment';
// import 'react-dates/initialize';
// import 'react-dates/lib/css/_datepicker.css';
// import {SingleDatePicker} from 'react-dates';
// import 'react-dates/lib/css/_datepicker.css';

export default class ExpenseForm extends React.Component{

      state={
            description:'',
            note:'',
            amount:''
      };

      onDescriptionChange=(e)=>{
            this.setState({
                  description:e.target.value
            });
      };

      onNoteChange=(e)=>{
            this.setState({
                  note:e.target.value
            });
      };

      onAmountChange=(e)=>{

            const amount=e.target.value;
            if(amount.match(/^\d*(\.\d{0,2})?$/))
            {
                  this.setState({
                        amount
                  });
            }
            
      };


      render(){
            return (
                  <div>
                        <form>
                              <input
                              type='text'
                              placeholder='Description'
                              autoFocus
                              value={this.state.description}
                              onChange={this.onDescriptionChange}
                              />
                              <input
                              type='text'
                              placeholder='Amount'
                              value={this.state.amount}
                              onChange={this.onAmountChange}
                              />
                              <p></p>
                              <textarea 
                              placeholder='Add a note for the expense'
                              value={this.state.note}
                              onChange={this.onNoteChange}
                              ></textarea>
                              <button>Add Expens  e</button>
                        </form>
                  </div>
            );
      }
}