const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const userSchema = new Schema({
    
    firstName : {
        type : String,
        required : true
    },
    
    lastName : {
        type : String,
        required : false
    },

    email : {
        type : String,
        required:true
    },
    
    password: {
        type: String,
        required: true
    }
}, {timestamps: true} )

const User = mongoose.model('users', userSchema)

module.exports = User;