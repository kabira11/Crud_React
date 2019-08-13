(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{100:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(21),o=a.n(r),l=(a(56),a(8)),i=a(9),c=a(12),u=a(10),m=a(11),h=(a(19),a(29),a(16)),d=a(18),p=a(2),f=a.n(p),b=a(13),g=a(4),y=a(19);a(30).polyfill();var E={get:function(e){return y.get(e).then(function(e){return e.data}).catch(function(e){return e.data})},post:function(e,t){return y.post(e,t).then(function(e){return e}).catch(function(e){return e})},put:function(e,t){return y.put(e,t).then(function(e){return e}).catch(function(e){return console.log(e)})},delete:function(e,t){return y.delete(e).then(function(e){return e}).catch(function(e){return console.log(e)})}},v=function(){return E.get("http://localhost:5004/employee/")},N=function(e){return E.get("http://localhost:5004/employee/"+e)},w=function(e){return E.post("http://localhost:5004/employee/",e)},k=function(e){return E.put("http://localhost:5004/employee/"+e._id,e)},j=function(e){return E.delete("http://localhost:5004/employee/"+e)},O=a(17),S=(a(92),function(e,t){switch(e){case 200:return O.NotificationManager.info(t);case 201:return O.NotificationManager.success(t);case 400:return O.NotificationManager.warning(t);case 500:default:return O.NotificationManager.error(t)}}),C=a(27),x=a(20),D=a(49),I={users:{}},P=Object(x.b)({rootReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,t=arguments.length>1?arguments[1]:void 0;switch(console.log("in reducer -"),t.type){case"USER_LIST":return Object(D.a)({},e,{users:t.payload});default:return e}}}),U=Object(x.c)(P,{},window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()),F=function(e){function t(e){var a;return Object(l.a)(this,t),console.log("object"),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).handleDeleteUser=a.handleDeleteUser.bind(Object(g.a)(a)),a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=Object(b.a)(f.a.mark(function e(){return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("componentDIDsMount"),console.log(sessionStorage.getItem("email")),e.next=4,this.props.allUser();case 4:e.sent;case 5:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"handleDeleteUser",value:function(){var e=Object(b.a)(f.a.mark(function e(t){var a;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j(t);case 2:return a=e.sent,e.next=5,this.props.allUser();case 5:e.sent,S(a.status,"Employee "+a.data.fullName+" Deleted ");case 7:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;console.log("reneder");var t=this.props.users;console.log("reneder1"),console.log(U.getState());var a=sessionStorage.getItem("email")&&s.a.createElement("button",{className:"btn  btn-light btn-sm my-0"},s.a.createElement(h.b,{to:{pathname:"/logout"}}," Logout")),n=!sessionStorage.getItem("email")&&s.a.createElement("button",{className:"btn  btn-light btn-sm my-0"},s.a.createElement(h.b,{to:{pathname:"/signin"}}," Sign In")),r=!sessionStorage.getItem("email")&&s.a.createElement("button",{className:"btn  btn-light btn-sm my-0"},s.a.createElement(h.b,{to:{pathname:"/signup"}}," Sign UP"));return Object.keys(t).length?s.a.createElement("div",null,s.a.createElement("h1",{className:"App"},"Employee Lists"),s.a.createElement("button",{className:"btn  btn-light btn-sm my-0"},s.a.createElement(h.b,{to:{pathname:"/addemployee",state:{employeeId:""}}}," ADD Employee")),r,n,a,s.a.createElement("table",{className:"table table-bordered table-hover"},s.a.createElement("thead",{className:"black white-text"},s.a.createElement("tr",null,s.a.createElement("th",null,"Serial NO."),s.a.createElement("th",null,"Employee Name"),s.a.createElement("th",null,"Email"),s.a.createElement("th",null,"Mobile Number"),s.a.createElement("th",null,"City"),sessionStorage.getItem("email")&&s.a.createElement(s.a.Fragment,null,s.a.createElement("th",null,"Edit"),s.a.createElement("th",null,"Delete")))),t.map(function(t,a){return s.a.createElement("tbody",{key:t._id,className:t._id},s.a.createElement("tr",null,s.a.createElement("th",{scope:"row"},a+1),s.a.createElement("td",null,t.fullName),s.a.createElement("td",null,t.email),s.a.createElement("td",null,t.mobile),s.a.createElement("td",null,t.city),sessionStorage.getItem("email")&&s.a.createElement(s.a.Fragment,null,s.a.createElement("td",null,s.a.createElement("button",{type:"button",className:"btn btn-danger btn-rounded btn-sm my-0"},s.a.createElement(h.b,{to:{pathname:"/addemployee",state:{employeeId:t._id}}},"Edit"))),s.a.createElement("td",null,s.a.createElement("span",{className:"table-remove"},s.a.createElement("button",{type:"button",className:"btn btn-danger btn-rounded btn-sm my-0",onClick:function(){return e.handleDeleteUser(t._id)}},"Delete"))))))}))):s.a.createElement("div",null)}}]),t}(n.Component);var _=Object(C.b)(function(e){return console.log("in mapStateToProps"),console.log(e.rootReducer.users),{users:e.rootReducer.users}},function(e){return console.log("in mapDispatchToProps"),{allUser:function(){var t=Object(b.a)(f.a.mark(function t(){return f.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=e,t.next=3,v();case 3:return t.t1=t.sent,t.t2={type:"USER_LIST",payload:t.t1},t.abrupt("return",(0,t.t0)(t.t2));case 6:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}()}})(F),L=a(26),M=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={_id:"",fullName:"",email:"",mobile:"",city:""},a.handleChange=a.handleChange.bind(Object(g.a)(a)),a.handleSubmitForm=a.handleSubmitForm.bind(Object(g.a)(a)),a.handleUpdateUser=a.handleUpdateUser.bind(Object(g.a)(a)),a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=Object(b.a)(f.a.mark(function e(){var t;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log("object"),!this.props.location.state.employeeId){e.next=7;break}return e.next=4,N(this.props.location.state.employeeId);case 4:t=e.sent,console.log(t),this.setState({_id:t._id,fullName:t.fullName,email:t.email,mobile:t.mobile,city:t.city});case 7:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"handleUpdateUser",value:function(){var e=Object(b.a)(f.a.mark(function e(t){var a;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),!(this.state.fullName&&this.state.email&&this.state.mobile&&this.state.city)){e.next=10;break}return e.next=4,k(this.state);case 4:a=e.sent,this.setState({_id:"",fullName:"",email:"",mobile:"",city:""}),this.props.history.push("/"),S(a.status,"Employee "+a.data.fullName+" Updated"),e.next=11;break;case 10:S(400,"Did you miss filling some field.");case 11:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"handleChange",value:function(e){console.log(e.target.value),this.setState(Object(L.a)({},e.target.name,e.target.value)),e.preventDefault()}},{key:"handleSubmitForm",value:function(){var e=Object(b.a)(f.a.mark(function e(t){var a;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log("jkjkj"),t.preventDefault(),!(this.state.fullName&&this.state.email&&this.state.mobile&&this.state.city)){e.next=11;break}return e.next=5,w(this.state);case 5:a=e.sent,this.setState({fullName:"",email:"",mobile:"",city:""}),this.props.history.push("/"),S(a.status,"Employee "+a.data.fullName+" created "),e.next=12;break;case 11:S(400,"Did you miss filling some field.");case 12:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){return console.log("render"),console.log(!this.props.location.state.employeeId),s.a.createElement("form",{className:"text-center border border-light p-5",onSubmit:this.handleSubmitForm},s.a.createElement("div",{className:"col-md-4 offset-md-4"},this.props.location.state.employeeId?s.a.createElement("p",{className:"h4 mb-4"},"UPDATE EMPLOYEE"):s.a.createElement("p",{className:"h4 mb-4"},"ADD EMPLOYEE"),s.a.createElement("input",{type:"text",id:"name",className:"form-control mb-4",placeholder:"Name",value:this.state.fullName,onChange:this.handleChange,name:"fullName"}),s.a.createElement("input",{type:"email",id:"email",className:"form-control mb-4",placeholder:"E-mail",value:this.state.email,onChange:this.handleChange,name:"email"}),s.a.createElement("input",{type:"text",id:"mobile",className:"form-control mb-4",placeholder:"Mobile Number",value:this.state.mobile,onChange:this.handleChange,name:"mobile"}),s.a.createElement("input",{type:"text",id:"city",className:"form-control mb-4",placeholder:"City",value:this.state.city,onChange:this.handleChange,name:"city"}),this.props.location.state.employeeId?s.a.createElement("button",{className:"btn btn-info btn-block btn-sm",type:"submit",onClick:this.handleUpdateUser},"Update"):s.a.createElement("button",{className:"btn btn-info btn-block btn-sm",type:"submit",onClick:this.handleSubmitForm},"Submit")))}}]),t}(n.Component),R=a(19);a(30).polyfill();var T={get:function(e){return R.get(e).then(function(e){return e.data}).catch(function(e){return e.data})},post:function(e,t){return console.log(":in API"),R.post(e,t).then(function(e){return console.log("pankaj"),e}).catch(function(e){return console.log("pankaj114554"),console.log(e.response),{message:e.response.data.message,status:e.response.status}})},put:function(e,t){return R.put(e,t).then(function(e){return e}).catch(function(e){return console.log(e)})},delete:function(e,t){return R.delete(e).then(function(e){return e}).catch(function(e){return console.log(e)})}},A=function(e){return console.log(e),T.post("http://localhost:5004/user/",e)},B=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={_id:"",firstName:"",lastName:"",email:"",password:"",confirmPassword:""},a.handleChange=a.handleChange.bind(Object(g.a)(a)),a.handleSubmitForm=a.handleSubmitForm.bind(Object(g.a)(a)),a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"handleChange",value:function(e){console.log(this.refs.firstName.value),console.log(this.refs.lastName.value),console.log(this.refs.email.value),console.log(this.refs.confirmPassword.value),console.log(this.refs.password.value),this.setState({firstName:this.refs.firstName.value,lastName:this.refs.lastName.value,email:this.refs.email.value,password:this.refs.password.value,confirmPassword:this.refs.confirmPassword.value})}},{key:"handleSubmitForm",value:function(){var e=Object(b.a)(f.a.mark(function e(t){var a;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),this.state.password==this.state.confirmPassword){e.next=4;break}return S(400,"Password and Confirm Password Should be the same."),e.abrupt("return","");case 4:if(!(this.state.firstName&&this.state.email&&this.state.password&&this.state.confirmPassword)){e.next=12;break}return e.next=7,A(this.state);case 7:a=e.sent,console.log(a),201==a.status?(this.setState({firstName:"",lastName:"",email:"",password:"",confirmPassword:""}),this.props.history.push("/"),S(a.status,"Signed Up Successfully")):S(a.status,a.message),e.next=13;break;case 12:S(400,"Did you miss filling some field.");case 13:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){return s.a.createElement("form",{className:"text-center border border-light p-5",onSubmit:this.handleSubmitForm},s.a.createElement("div",{className:"col-md-4 offset-md-4"},s.a.createElement("p",{className:"h4 mb-4"},"Sign up"),s.a.createElement("div",{className:"form-row mb-4"},s.a.createElement("div",{className:"col"},s.a.createElement("input",{type:"text",id:"firstName",className:"form-control",placeholder:"First name",value:this.state.firstName,onChange:this.handleChange,ref:"firstName"})),s.a.createElement("div",{className:"col"},s.a.createElement("input",{type:"text",id:"lastName",className:"form-control",placeholder:"Last name",value:this.state.lastName,onChange:this.handleChange,ref:"lastName"}))),s.a.createElement("input",{type:"email",id:"email",className:"form-control mb-4",placeholder:"E-mail",value:this.state.email,onChange:this.handleChange,ref:"email"}),s.a.createElement("input",{type:"password",id:"password",className:"form-control",placeholder:"Password","aria-describedby":"defaultRegisterFormPasswordHelpBlock",value:this.state.password,onChange:this.handleChange,ref:"password"}),s.a.createElement("small",{id:"defaultRegisterFormPasswordHelpBlock",className:"form-text text-muted mb-4"},"At least 8 characters and 1 digit"),s.a.createElement("input",{type:"password",id:"confirmPassword",className:"form-control",placeholder:"Confirm Password","aria-describedby":"defaultRegisterFormPasswordHelpBlock",value:this.state.confirmPassword,onChange:this.handleChange,ref:"confirmPassword"}),s.a.createElement("button",{className:"btn btn-info my-4 btn-block btn-sm",type:"submit",onClick:this.handleSubmitForm},"Sign Up")))}}]),t}(n.Component),H=a(19);a(30).polyfill();var X={get:function(e){return H.get(e).then(function(e){return e.data}).catch(function(e){return e.data})},post:function(e,t){return console.log(":in API"),H.post(e,t).then(function(e){return console.log("pankaj"),e}).catch(function(e){return console.log("pankaj114554"),console.log(e.response),{message:e.response.data.message,status:e.response.status}})},put:function(e,t){return H.put(e,t).then(function(e){return e}).catch(function(e){return console.log(e)})},delete:function(e,t){return H.delete(e).then(function(e){return e}).catch(function(e){return console.log(e)})}},J=function(e){return console.log(e),X.post("http://localhost:5004/user/checklogin",e)},V=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={email:"",password:""},a.handleSubmitForm=a.handleSubmitForm.bind(Object(g.a)(a)),a.handleChange=a.handleChange.bind(Object(g.a)(a)),a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"handleChange",value:function(e){this.setState({email:this.refs.email.value,password:this.refs.password.value})}},{key:"handleSubmitForm",value:function(){var e=Object(b.a)(f.a.mark(function e(t){var a;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),!this.state.email||!this.state.password){e.next=9;break}return e.next=4,J(this.state);case 4:a=e.sent,console.log(a),201==a.status?(console.log(a.data.email),sessionStorage.setItem("email",a.data.email),this.setState({email:"",password:""}),console.log(sessionStorage.getItem("email")),this.props.history.push("/"),S(a.status,"Logged in Successfully")):S(a.status,a.message),e.next=10;break;case 9:S(400,"Did you miss filling some field.");case 10:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){return s.a.createElement("form",{className:"text-center border border-light p-5",onSubmit:this.handleSubmitForm},s.a.createElement("div",{className:"col-md-4 offset-md-4"},s.a.createElement("p",{className:"h4 mb-4"},"Log In"),s.a.createElement("input",{type:"email",id:"defaultRegisterFormEmail",className:"form-control mb-4",onChange:this.handleChange,placeholder:"E-mail",ref:"email"}),s.a.createElement("input",{type:"password",id:"defaultRegisterFormPassword",className:"form-control",onChange:this.handleChange,placeholder:"Password",ref:"password","aria-describedby":"defaultRegisterFormPasswordHelpBlock"}),s.a.createElement("button",{className:"btn btn-info my-4 btn-block btn-sm",type:"submit",onClick:this.handleSubmitForm},"Sign In")))}}]),t}(n.Component),W=function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){console.log("componentDIDsMount"),console.log(sessionStorage.getItem("email")),sessionStorage.getItem("email")?(sessionStorage.clear(),this.props.history.push("/"),S(201,"Logged out Successfully")):(this.props.history.push("/"),S(500,"Please Login to Access"))}},{key:"render",value:function(){return s.a.createElement("div",null)}}]),t}(n.Component),Y=function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement(h.a,null,s.a.createElement(d.c,null,s.a.createElement(d.a,{exact:!0,path:"/",component:_}),s.a.createElement(d.a,{exact:!0,path:"/addemployee",component:M}),s.a.createElement(d.a,{exact:!0,path:"/signup",component:B}),s.a.createElement(d.a,{exact:!0,path:"/signin",component:V}),s.a.createElement(d.a,{exact:!0,path:"/logout",component:W})),s.a.createElement(O.NotificationContainer,null)))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(s.a.createElement(C.a,{store:U},s.a.createElement(Y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},29:function(e,t,a){},51:function(e,t,a){e.exports=a(100)},56:function(e,t,a){}},[[51,1,2]]]);
//# sourceMappingURL=main.2db4c9cb.chunk.js.map