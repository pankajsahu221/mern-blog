const router = require("express").Router();
const User = require("../models/user.model");
const Post = require("../models/post.model");
const saltRounds = 10;

// CREATE POST
router.post("/", async (req, res) => {
  try {
    const newPost = new Post(req.body);
    const savedPost = await newPost.save();
    res.status(200).json(savedPost);

    // we can also do this
    // const newPost = req.body;

    // await Post.create(newPost, (err, createdPost) => {
    //   if (err) {
    //     console.log(err);
    //     res.status(400).json("Error while creating new post");
    //   } else {
    //     res.status(200).json(createdPost);
    //   }
    // });
  } catch (e) {
    console.log(e);
    res.status(500).json(e);
  }
});

// UPDATE POST
router.put("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    if (post.username === req.body.username) {
      try {
        const updatedPost = await Post.findByIdAndUpdate(
          req.params.id,
          {
            $set: req.body,
          },
          {
            new: true,
          }
        );
        res.status(200).json(updatedPost);
      } catch (e) {
        console.log(e);
        res.status(500).json(e);
      }
    } else {
      res.status(401).json("You are not the owner of this post");
    }
  } catch (e) {
    console.log(e);
    res.status(500).json(e);
  }
});

// DELETE POST
router.delete("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    if (post.username === req.body.username) {
      try {
        await post.delete();
        res.status(200).json("Post deleted!");
      } catch (e) {
        console.log(e);
        res.status(500).json(e);
      }
    } else {
      res.status(401).json("You are not the owner of this post");
    }
  } catch (e) {
    console.log(e);
    res.status(500).json(e);
  }
});

// GET POST
router.get("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    res.status(200).json(post);
  } catch (e) {
    res.status(500).json(e);
  }
});

// GET ALL POSTS - localhost:8000/api/posts/?user=johnyyuuu
router.get("/", async (req, res) => {
  const username = req.query.user;
  const catName = req.query.cat;

  try {
    let posts;

    if (username) {
      posts = await Post.find({ username });
    } else if (catName) {
      posts = await Post.find({
        categories: {
          $in: [catName],
        },
      });
    } else {
      posts = await Post.find();
    }

    res.status(200).json(posts);
  } catch (e) {
    res.status(500).json(e);
  }
});

module.exports = router;
