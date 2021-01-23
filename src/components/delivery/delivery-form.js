import React, { Component } from 'react';
import './delivery.css'

// import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
// import NativeSelect from '@material-ui/core/NativeSelect';
// import InputBase from '@material-ui/core/InputBase';
// import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
// import InputLabel from '@material-ui/core/InputLabel';

class DeliveryForm extends Component {
  constructor(props){
      super(props);
      this.state = {
          isOpen : true,
          setSelectedDate : new Date()
      }
  }
  handleDateChange = (date) => { this.setSelectedDate(date) }
  render() {
      return(
          <div className="DeliveryForm">
            <p>DeliveryForm</p>
            <FormControl className="formControl">
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Grid container justify="space-around">
                <KeyboardDatePicker
                  disableToolbar
                  variant="inline"
                  format="MM/dd/yyyy"
                  id="date-picker-inline"
                  label="Date"
                  value={this.selectedDate}
                  onChange={this.handleDateChange}
                  KeyboardButtonProps={{
                    'aria-label': 'change date',
                  }}
                />
                </Grid>
              </MuiPickersUtilsProvider>
              <Button variant="outlined" color="primary">inline-style</Button>
            </FormControl>
          </div>
      );
  }
}
export default DeliveryForm;

