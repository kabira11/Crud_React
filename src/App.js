import React, { Component } from 'react';
import axios from 'axios'
import './App.css';
import { BrowserRouter as Router , Route , Switch } from 'react-router-dom'
// import { userModule } from './api/api';
import EmployeeList from './components/employeeList'
import AddEmployee from './components/AddEmployee'
import {NotificationContainer} from 'react-notifications';
import Signup from './components/Signup';
import Login from './components/Login';
 


    class App extends Component {
    render() {
      return (
        <div>
          <Router >
            <Switch>
              <Route exact path="/" component={EmployeeList}></Route>
              <Route exact path="/addemployee" component={AddEmployee}></Route>
              <Route exact path="/signup" component={Signup}></Route>
              <Route exact path="/signin" component={Login}></Route>
            </Switch>
            <NotificationContainer></NotificationContainer>
          </Router>
        </div>
          );
    }
  }



export default App;
