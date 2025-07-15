const mongoose = require('mongoose');
// const Category = require('./Category');

const postSchema = new mongoose.Schema({
    title: {type: String, required: true},
    content: {type: String, required: true},
    category:{type: mongoose.Schema.Types.ObjectId, ref: "Category"}
})
module.exports = mongoose.model('post', postSchema);