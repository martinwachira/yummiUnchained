import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Cart from './components/Cart'
import RegisterCustomer from './components/RegisterCustomer'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">

          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/cart" component={Cart} />
            <Route path="/register-account" component={RegisterCustomer} />

          </Switch>
          <footer class="page-footer">
            &copy; 2020 Yummi Pizza App by <a target="_blank" href="https://github.com/martinwachira">Martin</a>
         </footer>
        </div>
      </BrowserRouter>

    );
  }
}

export default App;
