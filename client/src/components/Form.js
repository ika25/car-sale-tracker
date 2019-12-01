import React from 'react';
import Input from './Input';

const Form = (props)=>{
    return(
        <form onSubmit={props.handler}>
            <h4>{props.isEditForm ? "Editing Cars: " : "Add Cars: "}</h4>
            <div className="form-group">
                <Input name="carMaker"
                       placeholder="Enter Car Maker"
                       labelName="Car Maker: "
                       handleChange={props.handleChange}
                       value={props.cars.carsMaker}/>
                <Input name="carModel"
                       placeholder="Enter Car Model"
                       labelName="Car Model: "
                       handleChange={props.handleChange}
                       value={props.cars.carsModel}/>
                <Input name="carColor"
                        placeholder="Enter Color"
                        labelName="Color: "
                        handleChange={props.handleChange}
                        value={props.cars.job}/>
                <Input name="CarPrice"
                        placeholder="Enter Car Price"
                        labelName="Price: "
                        handleChange={props.handleChange}
                        value={props.cars.carsPrice}/>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form> 
    )
}

export default Form;