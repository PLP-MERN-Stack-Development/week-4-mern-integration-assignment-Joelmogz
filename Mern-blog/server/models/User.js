const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {type: String, required: true, unique: true, trim: true, minLength: 3, maxLength: 30},
    email: {type: String, required: true, unique: true, trim: true, lowercase: true },
    password: { type: String, required: true, minLength: 6},
    role: {type: String, enum:['user'], default: 'user'},
    avatar:{type: String, default: ''},
});

module.exports = mongoose.model('user', userSchema);