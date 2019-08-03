import React, { Component } from 'react'
import  { alertmesage }  from './alertMessage';

export class logout extends Component {


    componentDidMount(){
        console.log("componentDIDsMount")
        console.log(sessionStorage.getItem("email"))
        if(sessionStorage.getItem("email")){
            sessionStorage.clear()
            this.props.history.push("/");
            alertmesage.createNotification(201,"Logged out Successfully")
        }else{
            this.props.history.push("/");
            alertmesage.createNotification(500,"Please Login to Access")
        }

      }


    render() {
        return (
            <div>
                
            </div>
        )
    }
}

export default logout
