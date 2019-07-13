import React from 'react';
import moment from 'moment';
import ModernDatepicker from 'react-modern-datepicker';
export default class ExpenseForm extends React.Component{

      state={
            description:'',
            note:'',
            amount:'',
            createdAt:moment().format('DD-MM-YYYY')
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

      onDateChange=(date)=>{
            this.setState({createdAt:date});
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

                              <ModernDatepicker
                              date={this.state.createdAt}
                              format={'DD-MM-YYYY'}
                              showBorder
                              onChange={date => this.onDateChange(date)}
                              placeholder={'Select a date'}
                              />

                              <button>Add Expense</button>
                        </form>
                  </div>
            );
      }
}