import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Details from './components/Details';
import Cart from './components/Cart';
import Default from './components/Default';
import Modal from './components/Modal';
import Paymentst from './components/Checkout/payment';
import loadSigUpIn from './components/Signup/loadScreen';
import loadshippingform from './components/Shipping/loadShippingform';



class App extends Component {

  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Switch>
          <Route exact path="/" component={ProductList}></Route>
          <Route path="/details" component={Details}></Route>
          <Route path="/cart" component={Cart}></Route>
          <Route  path="/checkout" component={Paymentst}></Route>
          <Route  path="/register-login" component={loadSigUpIn}></Route>
          <Route  path="/shipping" component={loadshippingform}></Route>
          
          <Route component={Default}></Route>
        </Switch>
        <Modal />
      </React.Fragment>
    );
  }
}

export default App;
