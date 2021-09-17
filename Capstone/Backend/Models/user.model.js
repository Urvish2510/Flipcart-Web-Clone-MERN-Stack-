const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = mongoose.Schema({
    firstname: {
        type: String,
        required: [true, "Please provide your FirstName"],
        trim: true,
        min: 3,
        max: 20
    },
    lastname: {
        type: String,
        required: [true, "Please provide your LastName"],
        trim: true, //Remove spaces after and before the word
        min: 3,
        max: 20
    },
    email: {
        type: String,
        required: [true, "Please provide your email"],
        trim: true,
        unique: true,    //Only 1 people use that
        lowercase: true
    },
    username: {
        type: String,
        required: [true, "Please provide your Username"],
        trim: true,
        unique: true,    //Only 1 people use that
        lowercase: true,
        index: true
    },
    role: {
        type: String,
        enum: ["user", "admin", "super-admin"], // emun means role will take either of this values only. No other values are taken by role. 
        default: "user"
    },
    contact_number: {
        type: String
    },
    hash_password: {
        type: String,
        required: [true, "Please provide your Password"]
    },
}, {
    timestamps: true // It will tell us when was the collections created and when updated last time.
})

userSchema.virtual('password').set( function (password) {
    this.hash_password = bcrypt.hashSync(password, 12);
})

userSchema.virtual('fullname').get(function () {
    return this.firstname + ' ' + this.lastname;
}).set(function (fullname) {
    this.firstname = fullname.split(' ')[0];
    this.lastname = fullname.split(' ')[1];
})

userSchema.methods = {
    authenticate: function (password){
        return bcrypt.compareSync(password, this.hash_password);
    }
}

module.exports = mongoose.model('User', userSchema);