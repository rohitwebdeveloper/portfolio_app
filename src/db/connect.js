const mongoose  = require('mongoose');
const mongoDB= "mongodb://127.0.0.1:27017/customerinfo"
mongoose.set('strictQuery', true);
mongoose.connect(mongoDB,(err)=>{
    if(err){
        console.log('unable to connect');
    }
    else{
        console.log('connection successfull');
    }
})