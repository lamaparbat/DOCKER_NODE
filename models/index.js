const { Schema, model } = require("mongoose");


const userSchema = new Schema({
    name: String,
    age: Number,
    position: String
});

const userModel = model('users', userSchema);


module.exports = {
    userModel,
}