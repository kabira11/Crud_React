import React, { Component } from 'react';
import axios from 'axios'
import { userModule } from '../api/api';
import { Link } from 'react-router-dom'
import '../App.css'
import  { alertmesage }  from './alertMessage'; 
import {connect} from 'react-redux'
import store from '../store';
 


class EmployeeList extends Component {

    constructor(props) {
      console.log("object")
      super(props)
      // this.state = {
      //     employee  : ""
      // }

      this.handleDeleteUser =  this.handleDeleteUser.bind(this);
    }
      
    async componentDidMount(){
      console.log("componentDIDsMount")
      console.log(sessionStorage.getItem("email"))

      const emp = await this.props.allUser()
      // console.log(this.props.users);
      // console.log(emp.payload);
      // console.log(await userModule.getUser())
      // console.log("-----------------------------------")
      // await userModule.getUser()
      // this.setState({
      //   employee : emp.payload
      // })

    }

  
    async handleDeleteUser(userid){ 
      const res = await userModule.deleteUser(userid)
      //after deleting data call getalluser for showing updated records
      // await userModule.getUser()
      const emp = await this.props.allUser()
      // console.log("in delete");
      // console.log(emp.payload);
      // console.log("--------------------------");
      // this.setState({
      //   employee : emp.payload
      // })
      alertmesage.createNotification(res.status,"Employee "+res.data.fullName+" Deleted ")
    }
    
    render() {
      console.log("reneder")
      const employe = this.props.users;
      console.log("reneder1")
      console.log(store.getState());
      // console.log("-----------------------------------")

      
      const logout = sessionStorage.getItem("email") &&
      (
          <button className="btn  btn-light btn-sm my-0">
            <Link 
                  to={{pathname :`/logout` 
                      }}> Logout
            </Link>
          </button>
      )

      const signin = !sessionStorage.getItem("email") &&
      (
               <button className="btn  btn-light btn-sm my-0">
            <Link 
                  to={{pathname :`/signin` 
                      }}> Sign In
            </Link>
          </button>
      )

      const signup = !sessionStorage.getItem("email") &&
      (
          <button className="btn  btn-light btn-sm my-0">
            <Link 
                  to={{pathname :`/signup` 
                      }}> Sign UP
            </Link>
          </button>
      )

      if(!Object.keys(employe).length){
        return (<div></div>);
      }


      return(
        <div>
          <h1 className= "App">Employee Lists</h1>
          <button className="btn  btn-light btn-sm my-0">
            <Link 
                  to={{pathname :`/addemployee` ,
                  state: {employeeId:""}
                      }}> ADD Employee
            </Link>
          </button>
          {signup}
          {signin}
          {logout}
          <table className ="table table-bordered table-hover">
          <thead className ="black white-text">
            <tr>
              <th>Serial NO.</th>
              <th>Employee Name</th>
              <th>Email</th>
              <th>Mobile Number</th>
              <th>City</th>

              {
                  sessionStorage.getItem("email") && 
                (
                  <>
                    <th>Edit</th>
                    <th>Delete</th>
                  </>
                )
                }




            </tr>
          </thead>
        {
    employe.map((emp , index) => {

          return (
            <tbody key = {emp._id} className = {emp._id}>
              <tr >
                <th scope="row">{index + 1}</th>
                <td>{emp.fullName}</td>
                <td>{emp.email}</td>
                <td>{emp.mobile}</td>
                <td>{emp.city}</td>
                {
                  sessionStorage.getItem("email") && 
                (
                  <>
                  <td>
                    <button type="button"
                          className="btn btn-danger btn-rounded btn-sm my-0">
                                <Link 
                                      to={{pathname :`/addemployee`,
                                      state: {employeeId:emp._id}
                                          }}>Edit
                                </Link>
                    </button>
                </td>

                
                <td>
                  <span className="table-remove"><button type="button"
                      className="btn btn-danger btn-rounded btn-sm my-0" 
                      onClick={()=>this.handleDeleteUser(emp._id)}>Delete</button></span>
                </td>
                </>
                )
                }

              </tr>
            </tbody>
            );

        })
      }
          </table>
        </div>
      )
    }
  }

//calling this method very first internally with the help of connect()
  function mapStateToProps(state){
    console.log("in mapStateToProps")
    console.log(state.rootReducer.users);
    // console.log("-----------------------------------")
    //with below name "users" we can access users data like this ---> this.props.users
    return {
      users : state.rootReducer.users
    }
}

//this method is calling dispatch method as argument dispatch method behind the scene
//calling this method when any changes happen with the help of allUser property like this ------> this.props.allUser()
const  mapDispatchToProps = dispatch => {
      console.log("in mapDispatchToProps")
    // console.log("-----------------------------------")
  return {
    allUser: async () =>  dispatch({
        type: "USER_LIST", 
        payload: await userModule.getUser()
    })
  }
};


export default connect(mapStateToProps , mapDispatchToProps)(EmployeeList);
