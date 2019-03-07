const express = require('express');
const router  = express.Router();
const User = require("../models/User");
const passport = require("passport");
const uploadCloud = require("../helpers/cloudinary");


//Middle wares

function isAuth(req, res, next) {
  if (req.isAuthenticated()) {
    next();
  } else {
    res.status(401).json({ message: "You haven't logged in yet." });
  }
}





//Sign up
router.post("/signup", (req, res, next) => {
  User.register(req.body, req.body.password)
    .then(user => {
      res.status(201).json(user);
    })
    .catch(e => next(e));
});



//Login
router.post("/login", passport.authenticate("local"), (req, res, next) => {
  console.log(req.user);
  res.status(200).json(req.user);
});




//Privates
router.get("/children", isAuth, (req, res, next) => {
  res.status(200).json({ message: "Access granted", user: req.user });
});




//Logout

router.get("/logout", isAuth, (req, res, next) => {
  req.logout();

  req.session.destroy(err => {
    if (!err) {
      res
        .status(200)
        .clearCookie("connect.sid", { path: "/" })
        .json({ message: "Logout successful" });
    }
  });
});
module.exports = router;
