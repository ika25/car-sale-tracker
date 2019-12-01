const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());


//routes
const cars = require('./routes/cars');
app.use('/cars',cars);

// we test o see what environment that we are at and to see we in production environment
if(process.env.NODE_ENV === 'pruduction'){// This mean we are hosted on horuku
    app.use(express.static('client/build'));// tell express where static files are located
    app.get('*',(req,res)=>{// * means any get request we gonna do is send to react application to the user
        res.sendFile(path.join(_dirname,'client','build','index.html'));
    });
}

const uri = process.env.mongodb || 'mongodb://localhost:27017/mernstack'; // this is to check if there is veriable called MangoDB and if there sint that means we developing locally and i want to use this uri
mongoose.connect(uri,
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

