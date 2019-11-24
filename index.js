const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());


//routes
const employee = require('./routes/employee');
app.use('/employee',employee);

mongoose.connect('mongodb://localhost:27017/mernstack',
{
    //to avoid deprecation warning
    useNewUrlParser: true,
    useFindAndModify: false
},(err)=>{
    //if theress error unable to connect database/trminate application
    if(err){
        process.exit(1);
        console.log('unable to connect to database');
    }
    //if no error able to connect database
    else
        console.log('successfully connected to the database');
});

//when we deploy app online going to check to see environment variable called port, if there isnt by default is going to best set port 5000,
// creat react app listens on port 3000 we cant have two app listening on same port
const port = process.env.PORT || 5000;
app.listen(port,()=>{
    console.log('app is running');
})

