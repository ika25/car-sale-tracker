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

// delete
carsRouter.delete('/:id',(req,res)=>{
    Cars.findByIdAndDelete(req.params.id,err=>{
        if(err)
            res.status(500).json({message:{
                msgBody : "Unable to Delete car",
                msgError : true
            }});  
        else
            res.status(200).json({message:{
                msgBody: "Successfully Deleted car",
                msgError : false
            }});     
    });
});

//update 
carsRouter.put('/:id',(req,res)=>{
    Cars.findOneAndUpdate({_id : req.params.id},req.body,{runValidators: true},(err,response)=>{
        if(err)
            res.status(500).json({message:{
                msgBody : "Unable to Update Car",
                msgError : true
            }});
        else
        res.status(200).json({message:{
            msgBody: "Successfully Updated Car",
            msgError : false
        }});   
    });
});

module.exports = carsRouter;