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
                firstName : "",
                lastName : "",
                salary : "",
                job : ""
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
                firstName : "",
                lastName : "",
                salary : "",
                job : ""
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
