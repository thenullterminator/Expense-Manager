import React from 'react';
import moment from 'moment';
import ModernDatepicker from 'react-modern-datepicker';


export default class ExpenseForm extends React.Component{

      constructor(props)
      {
            super(props);
            
            this.state={
                  description:props.expense !== undefined? props.expense.description:'',
                  note:props.expense!== undefined? props.expense.note:'',
                  amount:props.expense!== undefined? props.expense.amount.toString():'',
                  createdAt:props.expense!== undefined? moment(props.expense.createdAt):moment(),
                  error:''
            };
      }

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
            if(!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/))
            {
                  this.setState({
                        amount
                  });
            }
            
      };

      onDateChange=(date)=>{
            
            if(date)
            {
                  const newdate=date.substring(3,5)+'-'+date.substring(0,2)+'-'+date.substring(6,10);//Consverting into International Standard for js date object.
                  this.setState({createdAt:moment(new Date(newdate))});     // Creating a moment object date.
            }
      };

      onSubmitForm=(e)=>{

            e.preventDefault();
            if(!this.state.description || !this.state.amount)
            {
                  this.setState({error:'Please provide both Description and Amount.'});
            }
            else
            {
                  this.setState({error:''});

                  this.props.onSubmit({
                        description:this.state.description,
                        amount:parseFloat(this.state.amount),
                        createdAt:this.state.createdAt.valueOf(),
                        note:this.state.note
                  });
            }
      };


      render(){
            return (
                  <div>
                        {this.state.error && <p>{this.state.error}</p>}
                        <form onSubmit={this.onSubmitForm}>
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
                                    date={(this.state.createdAt).format('DD-MM-YYYY')}
                                    format={'DD-MM-YYYY'}
                                    showBorder
                                    onChange={this.onDateChange}
                                    placeholder={'Select a date'}
                              />
                              <button>Add Expense</button>
                        </form>
                  </div>
            );
      };
}