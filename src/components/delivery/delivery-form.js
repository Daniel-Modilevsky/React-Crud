import React, { Component } from 'react';
import './delivery.css'
import Button from '@material-ui/core/Button';
import { TextField } from '@material-ui/core';


class DeliveryForm extends Component {
  constructor(props){
      super(props);
      this.state = {
          isOpen : true,
          setSelectedDate : new Date(),
          index: -1,
          deliveryName: 'John Doe',
          deliveryDate: '01.01.2021',
          deliveryCity: 'Tel Aviv'
      }
  }
  // TRY + CATCH
  // LENTGH OF INPUT - CUT IT 
  saveForm = (event) => {
    let delivery = {
      index: -1,
      deliveryName: this.state.deliveryName,
      deliveryDate: this.state.deliveryDate,
      deliveryCity: this.state.deliveryCity
    };
    this.props.change(delivery)
  }
  editDate = (event) => {
    this.setState({deliveryDate : event.target.value});
  }
  editCity = (event) => {
    this.setState({deliveryCity : event.target.value});
  }
  editName = (event) => {
    this.setState({deliveryName : event.target.value});
  }
  updateDeliveryForm = (event) => {
    let index = this.props.updateDelivery();
    console.log(index);
  }
  render() {
      return(
          <div className="DeliveryForm">
            <div className="formControl">
              <form>
              <TextField variant="outlined" className="TextField date" value={this.state.deliveryDate} onChange={this.editDate}/>
              <TextField variant="outlined" className="TextField name" value={this.state.deliveryName} onChange={this.editName}/>
              <TextField variant="outlined" className="TextField city" value={this.state.deliveryCity} onChange={this.editCity}/>
              <Button variant="outlined" color="primary" className="saveButton" onClick={this.saveForm}>Save</Button>
              </form>
            </div>
          </div>
      );
  }
}
export default DeliveryForm;

