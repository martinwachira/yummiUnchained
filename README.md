# Basic e-commerce cart application built with React & Laravel api's (yummi pizza app)

This simple shopping cart application prototype shows how we can use React and Laravel to build a friendly user experience with instant visual updates.

# Steps on how to manouvre through the App

### Landing Page
* The Landing page displays all the pizzas stored in the DB using (https://yupizza-backend.herokuapp.com/api/pizza) api

### Cart Page
* This page consist of the items added from the landing/shop page, here the user can add pizza quantity, deduct quantity and delete item to remove  it in the cart
* With this page, is a delivery option which users can select represented with a checkbox to confirm if they are willing to incure extra cost for shipping cost. It is not mandatory and ence can be left unselected meaning no delivery is required.
* If no selected pizza from the list on landing/shop page, the user gets a notification to alert them they have selected no pizza
* This page is represented with a Cart Icon

### Registration Page
* This signing up page consist of a registration for that enables users to create new accounts that they can use to login and view their sessions
* The api responsible for this task is on (https://yupizza-backend.herokuapp.com/api/addcustomer/)

# Demo

#### [Frontend](https://yummi-unchained.herokuapp.com/)
* https://yummi-unchained.herokuapp.com/
#### [Backend-Api's](https://yupizza-backend.herokuapp.com/)

* https://yupizza-backend.herokuapp.com/api/pizza - get pizzas
* https://yupizza-backend.herokuapp.com/api/addcustomer - create user accounts
* https://yupizza-backend.herokuapp.com/api/customer/{customer-id} - get individual user

## Features
* Add and remove pizzas on the list 
* Remove pizzas
* Edit the quantity of the pizzas in real time and save to mysql DB
* Calculate automatically the total including the delivery fee (if chosen)

# Getting started
### Requirements

* Node.js
* NPM

### Package installation
```bash
npm install
```
 ### Start the React App
 Excute the following command: 
```bash
npm start
```
The application will start automatically in your browser on http://localhost:3000




