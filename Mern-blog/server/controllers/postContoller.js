const Category = require('../models/Category');
const Post = require('../models/Post');

// Post /api/post

const createPost = async (req, res) => {
    const posts = await Post.create({ ...req.body, category: req.user.id });
    res.json(posts);
};

// GET /api/post/all

const getPostById = async (req, res) => {
    const posts = await Post.find({ category: req.user.id });
    res.json(posts);
};

// GET /api/id
const getPost = async ( req, res) => {
    const posts = await Post.find().populate("category", "email");
    res.json(posts);
};

// PUT /api/id
 
const updatePost = async (req, res) => {
    const posts = await Post.findByIdAndUpdate({ category: req.user.id });
    res.json(posts);
}


const deletePost = async (req, res) => {
    const posts = await Post.findByIdAndDelete({ category: req.user.id });
    res.json(posts);
}

module.exports = {
  createPost,
  getPost,
  getPostById,
  updatePost,
  deletePost,
};
