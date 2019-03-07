exports.isRole = function(role){
  return(req,res,next)=>{
    if(req.user.role === role)  next()
    else res.status(401).json({ message: "You haven't logged in yet." });
  }
}





function isAuth(req, res, next) {
  if (req.isAuthenticated()) {
    next();
  } else {
    res.status(401).json({ message: "You haven't logged in yet." });
  }
}