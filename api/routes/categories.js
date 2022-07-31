const router = require("express").Router();
const Category = require("../models/category.model");

// ADD CATEGORIES
router.post("/", async (req, res) => {
  try {
    const newCat = new Category(req.body);
    const savedCat = await newCat.save();
    res.status(200).json(savedCat);
  } catch (e) {
    console.log(e);
    res.status(500).json(e);
  }
});

// GET CATEGORIES
router.get("/", async (req, res) => {
  try {
    const cats = await Category.find();
    res.status(200).json(cats);
  } catch (e) {
    console.log(e);
    res.status(500).json(e);
  }
});

module.exports = router;
