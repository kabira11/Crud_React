const router = require("express").Router(); 

const mongoose = require("mongoose");

const User = mongoose.model("User")
const bcrypt = require('bcryptjs')
const config = require('../config/database')
const sec = config.jwtSecret;
const jwt = require ('jsonwebtoken')



//  Get data
 router.get("/" , async (req , res) => {
    const user = await User.find()
    res.send(user)
})


 //Get data
 //we can also get data for specific fields like below we are using  select(for specific field u want)
 //exec() used not for save()
//  router.get("/" , async (req , res) => {
//     const user = await User.find()
//     .select("firstName email password")
//     .exec()
//     .then(docs =>{
//         res.status(201).send(docs)
//     })
    // res.send(user)
// })




router.post("/checklogin" , async (req,res) => {
    const users = await User.findOne({
        email : req.body.email,
        password : req.body.password
    })
    .then(response => {
        console.log("pankaj SUCCESS");
        console.log(response.password);
    
     return res.status(201).json(response)
   })
   .catch(err => {
     console.log("bhardwaj ERROR");
     const response = {
        message : "Either Email or Password is wrong."
     }
     return res.status(404).json(response)
   });

})



// Post data
router.post("/" , async (req,res) => {
    // console.log("in user0")
    // console.log(req.body)
    //Destructuring of request parameter
    const { firstName , lastName , email, password} = req.body;

    const users = await User.findOne({
        email : email
    },'email')
    if(users){
        response = {
            message : "email already exist."
        }
        return res.status(400).json(response)
    }else{
        const user = new User();
        user.firstName = firstName;
        user.lastName = lastName;
        user.email = email;
        user.password = password;
        user.save()
        return res.status(201).json({
            "data":user
        })
//create salt & hash
        // bcrypt.genSalt(10,(err , salt) => {
        //     bcrypt.hash(user.password,salt,(err,hash) => {
        //         if (err) throw err;
        //         user.password = hash;
        //         user.save()
        //         .then(response => {
        //             console.log("pankaj");
        //             console.log(response._id);
        //             jwt.sign(
                        
        //                 {id:response._id},
        //                 sec,
        //                 {expiresIn : 3600},

        //             (err,token) => {
        //                 if(err) throw err;

        //                 return res.status(201).json({
        //                     "data":response,
        //                     "token":token
        //                 })
        //             }
        //             )

        //         //  return res.status(201).json(response)
        //        })
        //        .catch(response => {
        //          console.log("bhardwaj");
        //          return res.status(500).json({response})
        //        });
        //     })
        // })

    //    await user.save()
    //    .then(response => {
    //        console.log("pankaj");
    //        console.log(response.data);
    //     return res.status(201).json(response)
    //   })
    //   .catch(response => {
    //     console.log("bhardwaj");
    //     return res.status(500).json(response)
    //   });


    }





    //    res.send(user);
 })

 //Get data
 router.get("/:employeeId" , async (req , res) => {
        const employee = await Employee.findOne({_id: req.params.employeeId})
        res.send(employee)
 })

 //Update data
 router.put("/:employeeId" , async (req , res) => {
        const employee = await Employee.findByIdAndUpdate({
            _id: req.params.employeeId}
            ,req.body,{
                new : true,
                runValidators : true
            })
        res.send(employee)
 })

 //Delete data
 router.delete("/:userId" , async (req , res) => {
        const user = await User.findByIdAndRemove({
            _id: req.params.userId})
        res.send(user)
 })



module.exports = router;