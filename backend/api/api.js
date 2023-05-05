const axios =require('axios')
const mongoose=require('mongoose')
const connectDatabase=require("../config/database")
const catchAsyncErrors=require('../catchAsyncErrors')
const cryptcur=()=>{
connectDatabase()
const crypto = require("../models/crypto");
const intervalId = setInterval(() => {
    axios.get("https://api.wazirx.com/api/v2/tickers?limit=10",{
        params: {
          limit: 10
        }})
      .then((response) => {
        const tickers = response.data;
        console.log(response.data)
        for (const [key, value] of Object.entries(tickers)) {
          crypto.findOneAndUpdate(
            { Name: key },
            {
              last: value.last,
              buy: value.buy,
              sell: value.sell,
              volume: value.volume,
              base_unit: value.base_unit,
            },
            { upsert: true }
          )
          .then(() => {
            console.log("success")
          })
          .catch((err) => {
            console.log(err);
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, 50000);
  
  // Stop the interval after 1 minute
  setTimeout(() => {
    clearInterval(intervalId);
  }, 60000);}

cryptcur()
  module.exports=cryptcur;
     
     
   
   
    

    

 


