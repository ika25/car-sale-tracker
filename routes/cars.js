const express = require('express');
const carsRouter = express.Router();
const cars = require('../model/Cars');

//creat read update delete

//read
//read
carsRouter.get('/',(req,res)=>{
    Cars.find({},(err,response)=>{
        if(err)
            res.status(500).json({message:{
                msgBody : "Unable to get cars",
                msgError : true
            }});
        else{
            res.status(200).json({response});
        }
            
    });
});

//create
carsRouter.post('/',(req,res)=>{
    const cars = new Cars(req.body);
    cars.save((err,document)=>{
        if(err)
            res.status(500).json({message:{
                msgBody : "Unable to add cars",
                msgError : true
            }});
        else
            res.status(200).json({message:{
                msgBody: "Successfully Added cars",
                msgError : false
            }});
    });
});