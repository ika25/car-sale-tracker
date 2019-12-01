// In here we start importing things

import React from 'react';
// Import components we havnt created yet
import CarsTable from './components/CarsTable';
import Form from './components/Form';
import Message from './components/Message';
import CarsAPI from './CarsAPI';

class App extends React.Component{
    constructor(props){
        super(props); // Will let me use .this keyword within constuctor
        this.state = {
            car : [],
            isEditForm : false,
            cars : {
                CarsMaker : "",
                CarsModel : "",
                carsColor : "",
                carsPrice : ""
            },
            message : ""
        },

        this.deleteHandler = this.deleteHandler.bind(this);
        this.addHandler = this.addHandler.bind(this);
        this.updateHandler = this.updateHandler.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.showEditForm = this.showEditForm.bind(this);
    }

    // This will be executed onece app component initially renders and after renders Dom s loaded,which means we can set the state of car array and then trigger a rerender
    componentDidMount(){
        CarsAPI.getCar().then(data=>{
            console.log(data);
            this.setState({car : data.response})});
    }

    resetForm(){
        this.setState({
            cars: {
                CarsMaker : "",
                CarsModel : "",
                arsColor : "",
                carsPrice : ""
            }
        });
    }

    handleChange(e){
        this.setState({
            cars : {
                ...this.state.cars,
                [e.target.name] : e.target.value
            }
        });
    }

    showEditForm(cars){
        this.setState({isEditForm : true, cars : cars});
    }



async deleteHandler(id){
    const deleteData = await CarsAPI.deleteCars(id);
    const message = deleteData.message;
    if(message.msgError){
        this.setState({message});
    }
    else{
        const data = await CarsAPI.getCars();
        this.setState({message,car : data.response})
    }
}

async updateHandler(e){
    e.preventDefault();
    const updateData = await CarsAPI.updateCars(this.state.cars);
    const message = updateData.message;
    if(message.msgError){
        this.setState({message});
    }
    else{
        const data = await CarsAPI.getCar();
        this.setState({message,car : data.response})
    }
    this.setState({isEditForm: false});
    this.resetForm();
}

async addHandler(e){
    e.preventDefault();
    const postData = await CarsAPI.createCars(this.state.cars);
    const message = postData.message;
    if(message.msgError){
        this.setState({message});
    }
    else{
        const data = await CarsAPI.getCar();
        this.setState({message,car : data.response});
    }
    this.resetForm();
}

renderCarsTable(){
    if(this.state.car.length > 0){
        return(
            <EmployeeTable car={this.state.car}
                           deleteHandler={this.deleteHandler}
                           showEditForm={this.showEditForm}/>
        );
    }
    return null;
}

// Render form function
renderForm(){
    return(
        <Form isEditForm={this.state.isEditForm}
              cars={this.state.cars}
              handleChange={this.handleChange} //This will listen when user types onto form cars object will get updated
              handler={!this.state.isEditForm ? this.addHandler : this.updateHandler}/>
    ); 
 }

 renderMessage(){
    if(this.state.message === "") // to check message state in empty
        return null;
    return(
        <Message message={this.state.message}/> //pas massage as prop
    );
}

// Main render function for app component
render(){
    return(
        <div className="row">
            <div className="col"></div>
            <div className="col-10">
                {this.renderCarsTable()}
                {this.renderForm()}
                {this.renderMessage()}
            </div>
            <div className="col"></div>
        </div>
    )
}
}

// export component within app component
export default App;


