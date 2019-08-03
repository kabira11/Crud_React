const express = require('express');

require("express-async-errors");

const app = express();

const mongoose = require("mongoose");

const bodyParser = require("body-parser")

const cors = require('cors')

app.use(cors()) 

// const morgon = require("morgon")

//data base connection
require("./mongo")

//Model
require('./model/employees')
require('./model/department')
require('./model/users')

//MiddleWare
app.use(bodyParser.json())
    // .use(morgon())


//Routes
app.use("/employee",require("./routes/post"))
app.use("/user",require("./routes/user"))


//Not Found Routes
app.use((req,res,next) => {
    console.log("ravi11");
    req.status = 404;
    const error = new Error("Routes not found.")
    next(error);
})

if(app.get("env") === "production"){
    console.log("ravi6567");
    app.use((error , req ,res , next) => {
        res.status(req.status || 500).send({
            message : error.message
        })
    })
}

app.use((error , req ,res , next) => {
    console.log("ravi");
    res.status(req.status || 500).send({
        message : error.message,
        stack : error.stack
    })
})

app.listen(5004,()=>{
    console.log('Express server started at port : 5004');
})

//npm run dev for running server.js which is define in package.json