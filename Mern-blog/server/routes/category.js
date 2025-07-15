const express = require("express");
const Category = require("../models/Category")
const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const categories = await Category.find();
    res.json(categories);
  } catch (err) {
    next(err);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const category = new Category({ name: req.body.name });
    await category.save();
    res.status(201).json(category);
  } catch (err) {
    next(err);
  }
});


module.exports = router;