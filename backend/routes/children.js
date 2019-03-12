const router = require("express").Router();
const User = require("../models/User");
const Child = require("../models/Child");
const Post = require("../models/Post");
const Badge = require("../models/Badge")
const uploadCloud = require("../helpers/cloudinary");
// let { sendUpdateEmail } = require("../helpers/mailer");


function isAuth(req, res, next) {
  if (req.isAuthenticated()) {
    next();
  } else {
    res.status(401).json({ message: "You haven't logged in yet." });
  }
}

router.get('/badgesAll',  async (req, res, next) => {
  try {
    let badges = await Badge.find()
    res.status(200).json(badges)
  }
  catch (e) {
    next(e)
  }
})


router.get('/childrenAll',  async (req, res, next) => {
  try {
    let children = await Child.find()
    res.status(200).json(children)
  }
  catch (e) {
    next(e)
  }
})


router.post('/addBadge', (req,res,next)=>{
  Badge.create({...req.body})
    .then(response =>{
      res.status(201).json({
        message: "Badge added sucessfully"
      })
    })

    .catch(e=> console.log(e))
})



//Revisar si es mejor con Child.Create con datos normales y luego Child.findbyId and update
router.post("/add", uploadCloud.single("profilePic"), (req, res, next) => {
  Child.create({ ...req.body, profilePic: req.file.url })
    .then(response => {
      res.status(201).json({
        message: "Child added successfully"
      })
    })
    .catch(e => console.log(e))
});



//Para popular Child.find().populate("sponsorChilderen")


module.exports = router;
