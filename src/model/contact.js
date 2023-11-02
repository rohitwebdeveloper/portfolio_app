const mongoose  = require('mongoose');

const customerSchema = new mongoose.Schema({
    username:{
        type:String,
        defined:true,
        lowercase:true,
        unique:true
    },
    email:{
        type:String,
        defined:true,
    },
    
    password:{
        type:Number,
        defined:true,
    }
    
})

const Customer = new mongoose.model('Customer', customerSchema);

module.exports = Customer;
