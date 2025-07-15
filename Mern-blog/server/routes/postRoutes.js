const express = require("express");
const {
  createPost,
  getPost,
  getPostById,
  updatePost,
  deletePost,
} = require("../controllers/postContoller");

const router = express.Router();

router.post("/post", createPost);
router.get("/post/all", getPostById);
router.get("/post/:id", getPost);
router.put("/post/:id", updatePost);
router.delete("/post/:id", deletePost);

module.exports = router;
