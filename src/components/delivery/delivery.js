import React, { Component } from 'react';
import './delivery.css'

class Delivery extends Component {
    constructor(props){
        super(props);

        this.state = {
            isOpen : true,
            // index: 0,
            // date: new Date(),
            // fullName: '',
            // city : '',
        }

        this.updateDelivery = this.updateDelivery.bind(this);
        this.removeDelivery = this.removeDelivery.bind(this);
    }

    updateDelivery(){
        alert('updateDelivery');
        //this.props.onDelete(this.props.index);
    }
    removeDelivery(){
        alert('removeDelivery');
        this.setState({
            isOpen: false
        })
        //this.props.onDelete(this.props.index);
    }
    render() {
        return(
            <div className="Delivery">
                <p>{this.props.children}</p>
            </div>
        );
    }
}
export default Delivery;