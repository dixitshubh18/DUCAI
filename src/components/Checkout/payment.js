import ReactPayPal from './checkout';
import React from 'react'
import { Component } from 'react';


export default class Paymentst extends Component {
    render() {
         return (
            <div className="App">
           <div className="payment-div">
                  <ReactPayPal />
                </div>            
          </div>
        );
    }
}



