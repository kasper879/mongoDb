var mongoose = require('mongoose'); 

var Todo = {
    task: {
        type: String, 
        required: true, 
        trim: true,
        minlength: 1
    },
    difficulty: {
        type: Number, 
        required: true, 
        trim: true, 
        min: 1, 
        max: 5
    },
    importance: {
        type: Number, 
        required: true, 
        trim: true, 
        min: 1, 
        max: 5
    }

}; 

module.exports={Todo}