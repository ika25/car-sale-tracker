const mongoose = require('mongoose');
//schema is blueprint that object has follow
const Schema = mongoose.Schema;

const CarSchema = new Schema ({

    carMaker :{
        type: String,
        required: true
    },

    carModel :{
        type: String,
        required: true
    },

    carColor :{
        type: String,
        required: true
    },

    carPrice :{
        type: Number,
        required: true
    }


});

//exoprt this to use in another file
module.exports = mongoose.model('car', CarSchema);