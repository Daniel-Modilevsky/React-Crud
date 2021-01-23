import Delivery from  './delivery' 
//import list from '../../mock-data/delivery-data.json'
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
      firstData: [
        { index: 1, date : "01.01.2021", fullName: "John Doe", city :  "Tel Aviv" },
        { index: 2, date : "05.01.2021", fullName: "John Doe", city :  "Haifa" },
        { index: 3, date : "06.01.2021", fullName: "John Doe", city :  "Jerusalem" }
      ]
    }
    this.eachDelivety = this.eachDelivety.bind(this);
}

eachDelivety(item, index){
  return <Delivery key={index}>
    <ul>
      <li>{index+1}</li>
      <li>{item.date}</li>
      <li>{item.fullName}</li>
      <li>{item.city}</li>
    </ul>
    <Fab color="secondary" className="Fab" size="small"><DeleteIcon/></Fab>
    <Fab color="primary" className="Fab" size="small"> <CreateIcon/></Fab>
   </Delivery>
}

render() {
    return(
      <div className="DeliveryList">
        {
          this.state.firstData.map(this.eachDelivety)
        }
      </div>
    );
}
}
export default DeliveryList;
