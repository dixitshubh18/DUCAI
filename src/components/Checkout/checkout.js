import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ReactPayPal from "C:/Users/Lucifer/Downloads/Archive/Archive/src/components/Checkout/payment";
const [checkout, setCheckout] = React.useState(false);
export default class Checkout extends Component {
    
    render() {
        const [checkout, setCheckout] = React.useState(false);
        return (

            <div className="container">
                <div className="row">
                    <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
                        <form>
                            <label>Enter your name:
                                <input type="text" />
                            </label>
                            <label>Enter your Address:
                                <input type="text" />
                            </label>
                            <label>Enter your ZIP:
                                <input type="text" />
                            </label>
                        </form>

                        <div className="App">
                        <header className="App-header">
                          {(checkout === true) 
                            ? <div className="payment-div">
                              <ReactPayPal />
                            </div> 
                  
                            :<div>
                              <h1>React-PayPal</h1>
                              <button onClick={() => {setCheckout(true)}} className="checkout-button">Checkout</button>
                            </div>
                          }
                        </header>
                      </div>


                    </div>
                </div>
            </div>


        );
    }
}



