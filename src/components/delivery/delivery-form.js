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
      }
  }
  handleDateChange = (date) => { this.setSelectedDate(date) }  

  render() {
      return(
          <div className="DeliveryForm">
            <div className="formControl">
              <TextField variant="outlined" className="TextField"/>
              <TextField variant="outlined" className="TextField"/>
              <TextField variant="outlined" className="TextField"/>
              <Button variant="outlined" color="primary" className="saveButton">Save</Button>
            </div>
          </div>
      );
  }
}
export default DeliveryForm;

