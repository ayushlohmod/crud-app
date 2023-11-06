const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: String,
    lastName: String,
    email: String,
    mobile: Number,
    project: String
})
const UserModel = mongoose.model('users', UserSchema)
module.exports = UserModel