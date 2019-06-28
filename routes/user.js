const router = require("express").Router(); 

const mongoose = require("mongoose");

const User = mongoose.model("User")



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
    },'email')
    .then(response => {
        console.log("pankaj");
        console.log(response.data);
     return res.status(201).json(response)
   })
   .catch(err => {
     console.log("bhardwaj");
     const response = {
        message : "email doesn't exist."
     }
     return res.status(404).json(response)
   });

})


// Post data
router.post("/" , async (req,res) => {
    console.log("in user0")
    const users = await User.findOne({
        email : req.body.email
    },'email')
console.log("in user")
    if(users){
        console.log("in user1")
        response = {
            message : "email already exist."
        }
        return res.status(400).json(response)
    }else{

        const user = new User();
        user.firstName = req.body.firstName;
        user.lastName = req.body.lastName;
        user.email = req.body.email;
        user.password = req.body.password;


       await user.save()
       .then(response => {
           console.log("pankaj");
           console.log(response.data);
        return res.status(201).json(response)
      })
      .catch(response => {
        console.log("bhardwaj");
        return res.status(500).json(response)
      });


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