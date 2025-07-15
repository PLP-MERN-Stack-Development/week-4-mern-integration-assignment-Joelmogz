const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    name: {type: String, required: true, unique: true, trim: true, maxLength:50},
    description: {type: String, trim: true, maxLength: 200},
    color: {type: String, default:'#3B82F6'}
});

module.exports = mongoose.model('category', categorySchema);