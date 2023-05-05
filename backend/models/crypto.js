const mongoose=require('mongoose');
const cryptoschema =new mongoose.Schema({
    Name:{type:String, require:true,},
    last:{type:Number, required:true,},
    volume:{type:Number, required:true,},
    buy:{type:Number, required:true,},
    sell:{type:Number, required:true,},
    base_unit:{type:String, required:true},

});
const cryptos=mongoose.model('crypto',cryptoschema)
module.exports=cryptos