import React, { Component } from 'react';
import axios from 'axios'
import { userModule } from '../api/api';
import { Link } from 'react-router-dom'
import '../App.css'
import  { alertmesage }  from './alertMessage'; 

class AddEmployee extends Component {

    constructor(props){
        super(props);
        this.state = {
            _id: "" ,
            fullName: "" ,
            email: "" ,
            mobile: "",
            city: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmitForm =  this.handleSubmitForm.bind(this);
        this.handleUpdateUser =  this.handleUpdateUser.bind(this);
    }

    async componentWillMount(){
        //this data will come from employeelist.js from state property in Link
        //this.props.location.state.employeeId
        const selectedEmployee = await userModule.selectedUser(this.props.location.state.employeeId)
        this.setState({
            _id: selectedEmployee._id ,
            fullName: selectedEmployee.fullName ,
            email: selectedEmployee.email ,
            mobile: selectedEmployee.mobile,
            city: selectedEmployee.city
        })
      }

    //Udate User
    async handleUpdateUser(event){
        event.preventDefault();
        if(this.state.fullName && this.state.email && this.state.mobile && this.state.city){
        const res = await userModule.updateUser(this.state)
         this.setState({
            _id: "" ,
            fullName: "" ,
            email: "" ,
            mobile: "",
            city: ""
           });
         this.props.history.push("/");
         alertmesage.createNotification(res.status,"Employee "+res.data.fullName+" Updated")
       }else{
           alertmesage.createNotification(400,"Did you miss filling some field.")
       }
    }

    //Update value in state on type something in Input Fields.
    handleChange(event){
        this.setState({
            fullName: this.refs.fullName.value ,
            email: this.refs.email.value ,
            mobile: this.refs.mobile.value,
            city: this.refs.city.value
        })
    }

    //Method for Submit Form.
    async handleSubmitForm(event){
        event.preventDefault();
        if(this.state.fullName && this.state.email && this.state.mobile && this.state.city){
            const res = await userModule.addUser(this.state)
             this.setState({
                fullName: "" ,
                email: "" ,
                mobile: "",
                city: ""
               });
            //for redirecting home page
             this.props.history.push("/");
             alertmesage.createNotification(res.status,"Employee "+res.data.fullName+" created ")
        }else{
            //Alert message
            alertmesage.createNotification(400,"Did you miss filling some field.")
        }

     }


    render(){
        return(
            <form className="text-center border border-light p-5" onSubmit={this.handleSubmitForm}>
                <div className = "col-md-4 offset-md-4">
                    {
                        !this.props.location.state.employeeId ?
                            <p className="h4 mb-4">ADD EMPLOYEE</p> :
                            <p className="h4 mb-4">UPDATE EMPLOYEE</p>
                    }
                    

                    <input type="text" id="name" className="form-control mb-4" placeholder="Name" value={this.state.fullName} onChange={this.handleChange} ref="fullName"/>

                    <input type="email" id="email" className="form-control mb-4" placeholder="E-mail" value={this.state.email} onChange={this.handleChange} ref="email"/>

                    <input type="text" id="mobile" className="form-control mb-4" placeholder="Mobile Number" value={this.state.mobile} onChange={this.handleChange} ref="mobile"/>

                    <input type="text" id="city" className="form-control mb-4" placeholder="City" value={this.state.city} onChange={this.handleChange} ref="city"/>
                    {
                            !this.props.location.state.employeeId ?
                            <button className="btn btn-info btn-block btn-sm" type="submit" onClick={this.handleSubmitForm}>Submit</button> :
                            <button className="btn btn-info btn-block btn-sm" type="submit" onClick={this.handleUpdateUser}>Update</button>
                    }
                    
                </div>
            </form>

        )
    }
}

export default AddEmployee;
