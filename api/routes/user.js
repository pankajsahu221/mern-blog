const router = require("express").Router();
const User = require("../models/user.model");
const Post = require("../models/post.model");
const saltRounds = 10;

// UPDATE
router.put("/:id", async (req, res) => {
  if (req.body.userId === req.params.id) {
    if (req.body.password) {
      req.body.password = await brcypt.hash(req.body.password, saltRounds);
    }

    try {
      const updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      ); //new : true will give the updated version of the user
      res.status(200).json(updatedUser);
    } catch (e) {
      console.log(e);
      res.status(500).json(e);
    }
  } else {
    res.status(401).json("You are not the owner of this account!");
  }
});

// DELETE
router.delete("/:id", async (req, res) => {
  if (req.body.userId === req.params.id) {
    try {
      const user = await User.findById(req.params.id);
      try {
        // before deleting the user, delete all the posts created by that user.
        await Post.deleteMany({ username: user.username });
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json("User Deleted!");
      } catch (e) {
        res.status(404).json("User not found");
      }
    } catch (e) {
      res.status(404).json("User not found!");
    }
  } else {
    res.status(401).json("You are not the owner of this account!");
  }
});

// GET USER
router.get("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    const { password, ...others } = user._doc;
    res.status(200).json(others);
  } catch (e) {
    res.status(500).json(e);
  }
});

module.exports = router;
