const mongoose=require('mongoose');

const connectDatabase=()=>{
    mongoose
    .connect("mongodb+srv://vigneshreddy:Geetha@cluster0.dmjuere.mongodb.net/?retryWrites=true&w=majority", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      
    }) .then((data) => {
        console.log(`Mongodb connected with server: ${data.connection.host}`);
      });
  };
 
  module.exports = connectDatabase;