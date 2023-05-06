const express=require("express")
const app=express()
const cryptcur=require("./api/api")
const cors=require('cors')
const connectDatabase = require("./config/database");
connectDatabase()
const bodyParser  = require('body-parser');
app.listen(8090);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors());
const catchAsyncErrors=require('./catchAsyncErrors')
const asynch=require("express-async-handler")
const crypto = require("./models/crypto");
cryptcur();

exports.crypto =catchAsyncErrors(async (req, res) => {


  
    
  
  const Prod = await crypto.create(req.body);
   
    console.log(req.body);
 
  res.json({
    "pavan":"reddy",
  })})
  

  exports.cryptoo =catchAsyncErrors(async (req, res) => {


  
    
  
    const Prod = await crypto.find().limit(10);
     
      
   
    res.json({
     

      Prod
    })})
  
app.post("/add",this.crypto)
app.get("/crypto/prices",this.cryptoo)