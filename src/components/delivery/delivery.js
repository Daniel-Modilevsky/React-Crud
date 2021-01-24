import React, { Component } from 'react';
import './delivery.css'

class Delivery extends Component {
    constructor(props){
        super(props);
        this.state = {
            isOpen : true,
        }
    }
    render() {
        return(
            <div className="Delivery">
                <div className="each">{this.props.children}</div>
            </div>
        );
    }
}
export default Delivery;