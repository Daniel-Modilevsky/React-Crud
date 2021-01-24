import Delivery from  './delivery' 
import DeliveryForm from  './delivery-form' 
import DataFile from '../../mock-data/delivery-data.json';

import React, { Component } from 'react';
// maybe create here model or state it is maspik
// maybe firsData need to be in Delivery and not in list
import './delivery.css'
import Fab from '@material-ui/core/Fab'
import CreateIcon from '@material-ui/icons/Create';
import DeleteIcon from '@material-ui/icons/Delete';



class DeliveryList extends Component {
  constructor(props){
    super(props);
    this.state = {
      isOpen : true,
      firstData: DataFile,
      delivery: {
        index:-1,
        deliveryName: '',
        deliveryDate: '',
        deliveryCity: ''
      }
    }
    this.updateDelivery = this.updateDelivery.bind(this);
    this.deleteDelivery = this.deleteDelivery.bind(this);
    this.eachDelivety = this.eachDelivety.bind(this);
    this.addDelivery = this.addDelivery.bind(this);
  };
  addDelivery(delivery){
    delivery.index = this.state.firstData.length+1;
    console.log(`addDelivery - ${delivery.index}`);
    console.log(delivery);
    this.setState(
      { firstData: [...this.state.firstData, delivery] }
    )
  }

  updateDelivery(newDelivery, index){
    // using prev state
    console.log('update');
    this.setState(prevState => ({
      deliveries: prevState.firstData.map(
        deliver => deliver.index !== index ? deliver : {...deliver, deliver: newDelivery}
      )
    }))
  }
  deleteDelivery(index){
    console.log('delete');
    console.log(index);
    const deliveties = this.state.firstData.filter(item => item.index+1 !== index+1);
    this.setState({ firstData: deliveties });
  }
  eachDelivety(item, index){
    return <Delivery key={index}>
      <ul>
        <li>{index+1}</li>
        <li>{item.date}</li>
        <li>{item.fullName}</li>
        <li>{item.city}</li>
      </ul>
      <Fab color="secondary" className="Fab" size="small" onClick={this.deleteDelivery.bind(this, index)}><DeleteIcon/></Fab>
      <Fab color="primary" className="Fab" size="small" onClick={this.updateDelivery}> <CreateIcon/></Fab>
    </Delivery>
  };
  render() {
      return(
        <div className="DeliveryContainer">
          <div className="DeliveryList">
            {
              this.state.firstData.map(this.eachDelivety)
            }
          </div>
            <DeliveryForm change = {this.addDelivery}/>
        </div>
      );
  };
}
export default DeliveryList;
