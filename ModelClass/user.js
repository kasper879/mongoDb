var {Todo} = require('./todo');
var mongoose = require('mongoose'); 

var User = mongoose.model('User', {
    email: {
        type: String, 
        required: true, 
        trim: true,
        minlength: 1
    },
    name: {
        type: String, 
        required: true, 
        trim: true,
        minlength: 1
    }, 
    age: {
        type: Number, 
        required: true, 
        trim: true,
        min: 18,
        max: 120
    },
    todos: [
        Todo
    ]
 
        
    
}); 
module.exports = {User};