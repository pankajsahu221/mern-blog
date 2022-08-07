const router = require("express").Router();
const User = require("../models/user.model");
const bcrypt = require("bcrypt");
const saltRounds = 10;

// REGISTER
router.post("/register", async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, saltRounds);

    const newUser = {
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
    };

    const user = await User.create(newUser);

    res.status(500).json(user);
  } catch (e) {
    console.log(e);
    res.status(500).json(e);
  }
});

// LOGIN
router.post("/login", async (req, res) => {
  try {
    const foundUser = await User.findOne({ username: req.body.username });
    !foundUser && res.status(400).json("Wrong Credential");

    const validated = await bcrypt.compare(
      req.body.password,
      foundUser.password
    );

    if (!validated) {
      res.status(400).json("Wrong credentails");
    } else {
      // that will store all other values except the password of the foundUser
      const { password, ...others } = foundUser._doc;
      res.status(200).json(others);
    }
  } catch (e) {
    console.log(e);
    res.status(500).json(e);
  }
});

module.exports = router;
