import React, { Component } from "react";
import axios from 'axios'
// import CustomerLogin from './customer-login.component';
import Swal from 'sweetalert2';


export default class RegisterCustomer extends Component {
      constructor(props) {
    super(props)

    // Setting up functions
    this.onChangeCustomerName = this.onChangeCustomerName.bind(this);
    this.onChangeCustomerEmail = this.onChangeCustomerEmail.bind(this);
    this.onChangeCustomerPhoneNo = this.onChangeCustomerPhoneNo.bind(this);
    this.onChangeCustomerCurrentAddress = this.onChangeCustomerCurrentAddress.bind(this);
    this.onChangeCustomerPassword = this.onChangeCustomerPassword.bind(this);
    
    this.onSubmit = this.onSubmit.bind(this);

    // Setting up state
    this.state = {
      name: '',
      email: '',
      phoneNo: '',
      currentAddress: '',
      password: ''
    }
  }

  onChangeCustomerName(e) {
    this.setState({name: e.target.value})
    console.log(this.state)
  }

  onChangeCustomerEmail(e) {
    this.setState({email: e.target.value})
    console.log(this.state)
  }

  onChangeCustomerPhoneNo(e) {
    this.setState({phoneNo: e.target.value})
    console.log(this.state)
  }

  onChangeCustomerCurrentAddress(e) {
    this.setState({currentAddress: e.target.value})
    console.log(this.state)
  }

  onChangeCustomerPassword(e){
    this.setState({password: e.target.value})
    console.log(this.state)
  }

  onSubmit(e) {
    e.preventDefault()
     const customer = {
      name: this.state.name,
      email: this.state.email,
      phoneNo: this.state.phoneNo,
      currentAddress: this.state.currentAddress,
      password: this.state.password
    };
    axios.post('http://localhost:8000/api/addcustomer/', customer)
    // axios.post('https://yupizza-backend.herokuapp.com/api/addcustomer/', customer)
      .then(res => console.log(res.data));
    Swal.fire(
  'Welcome!',
  'Account created Successfully',
  'success'
)

    this.setState({name: '', email: '', phoneNo: '', currentAddress: '', password: ''})
  }

  render() {
    return (
        <div className="container">
          <br />
          <div className="wrapper">
            <h4 className="fontT">Create account</h4>
            <hr />
          </div>
  
          <div class="container">
            <form class="col s12" onSubmit={this.onSubmit}>
              <div class="row">
                <div class="input-field col s6">
                  <input id="name" type="text" class="validate" name="name" value={this.state.name} onChange={this.onChangeCustomerName} required/>
                  <label for="name">Name</label>
                </div>
                <div class="input-field col s6">
                  <input id="email" type="email" class="validate" name="email"  value={this.state.email} onChange={this.onChangeCustomerEmail} required/>
                  <label for="email">Email</label>
                </div>
              </div>
              <div class="row">
                <div class="input-field col s12">
                  <input id="address" type="text" class="validate" name="phoneNo"  value={this.state.currentAddress} onChange={this.onChangeCustomerCurrentAddress} required/>
                  <label for="address">Address</label>
                </div>              
                <div class="input-field col s12">
                  <input id="phone" type="text" class="validate" name="currentAddress" value={this.state.phoneNo} onChange={this.onChangeCustomerPhoneNo} required/>
                  <label for="phone">Phone</label>
                </div>
              </div>
              <div class="row">
                <div class="input-field col s12">
                  <input id="password" type="password" class="validate" name="password" value={this.state.password} onChange={this.onChangeCustomerPassword} required/>
                  <label for="password">Password</label>
                </div>
              </div>            
              <div class="row">
                <input type="submit" className="btn btn-primary" value="Signup" />
              </div>
            </form>
          </div>
        </div>
      );
  }
}

