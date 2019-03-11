let nodemailer = require("nodemailer");

let transport = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: process.env.MAIL,
    pass: process.env.PASS
  }
});

//Hay que mover el link de local a remoto

