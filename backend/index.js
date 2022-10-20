const express = require('express')
const app = express()
var bodyParser = require('body-parser')
const mongoose = require('mongoose')
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))
// parse application/json
app.use(bodyParser.json())


mongoose.connect('mongodb://localhost:27017/assignment-1');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
 
db.once('open', function() {
    console.log("Connection Successful!");
});
// define Schema
var userSchema = mongoose.Schema({
    firstname : {type:String , required: true,},
    lastname : {type:String , required: true},
    email : {type:String ,unique:true, required: true},
    password :{type:String ,required: true},
    confirmpassword :{type: String , required:true},
     
  });

  // compile schema to model
  var user = mongoose.model('customers', userSchema);





app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
app.get("/Signup",(req,res , next)=>{
    res.json({"users":["userone","usertwo","userthree"]})
})

app.use(express.json());
app.use(express.urlencoded());

app.post("/Signup",(req,res,next)=>{

    //const article = new cust(req.body)
  
    var u = new user({firstname: req.body.firstName , lastname: req.body.lastName, email: req.body.email, password: req.body.password, confirmpassword: req.body.confirmPassword});
    u.save(function (err, user) {
    
        if (err) return console.error(err);
        console.log(req.body);
        console.log(user + " saved to database collection.");
        console.log(req.body.firstName);
      });

})

app.post("/Signup",(req,res,next)=>{

    //const article = new cust(req.body)
    console.log(req.body);

})

app.listen(3001,()=>{
    console.log("server started on port 3001")
})