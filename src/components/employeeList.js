import React, { Component } from 'react';
import axios from 'axios'
import { userModule } from '../api/api';
import { Link } from 'react-router-dom'
import '../App.css'
import  { alertmesage }  from './alertMessage'; 
import {connect} from 'react-redux'
 


class EmployeeList extends Component {

    constructor(props) {
      super(props)
      // this.state = {
      //     employee  : ""
      // }

      this.handleDeleteUser =  this.handleDeleteUser.bind(this);
    }
      
    async componentWillMount(){
      // console.log("componentWillMount")

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
      const employe = this.props.users;
      // console.log("reneder")
      // console.log(this.props.users);
      console.log(employe)
      // console.log("-----------------------------------")

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
          <button className="btn  btn-light btn-sm my-0">
            <Link 
                  to={{pathname :`/signup` 
                      }}> Sign UP
            </Link>
          </button>
          <button className="btn  btn-light btn-sm my-0">
            <Link 
                  to={{pathname :`/signin` 
                      }}> Sign In
            </Link>
          </button>
          <table className ="table table-bordered  table-hover">
          <thead className ="black white-text">
            <tr>
              <th>Serial NO.</th>
              <th>Employee Name</th>
              <th>Email</th>
              <th>Mobile Number</th>
              <th>City</th>
              <th>Edit</th>
              <th>Delete</th>
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


  function mapStateToProps(state){
    // console.log("in mapStateToProps")
    // console.log(state.rootReducer.users);
    // console.log("-----------------------------------")
    return {
      users : state.rootReducer.users
    }
}

const  mapDispatchToProps = dispatch => {
    //   console.log("in mapStateToProps")
    // console.log("-----------------------------------")
  return {
    allUser: async () =>  dispatch({
        type: "USER_LIST", 
        payload: await userModule.getUser()
    })
  }
};


export default connect(mapStateToProps , mapDispatchToProps)(EmployeeList);
