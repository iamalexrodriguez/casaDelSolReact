let nodemailer = require("nodemailer");

let transport = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: process.env.MAIL,
    pass: process.env.PASS
  }
});

//Hay que mover el link de local a remoto

exports.sendNewMail = function(emailTo, username, email, about, ahijado, compromiso){
  return transport
  .sendMail({
      from: "Casa del Sol Admin <jorge@casadelsol.com>",
      bcc: emailTo,
      subject: `Nueva solicitud de padrino: ${username}`,
      html: `<h2>Nueva solicitud!</h2>
      <p>El padrino ${username} con email: ${email} quiere apadrinar un niño más! </p>
      <p> Esta es la información proporcionada: </p>
      <ul>
          <li><strong>Acerca de:</strong> ${about}</li>
          <li><strong>Ahijado:</strong> ${ahijado}</li>
          <li><strong>Compromisos: </strong>${compromiso}</li>
      </ul>
      <h4>¡Contactar tan pronto como sea posible!</h4>
      `
  })
  .then(r => r)
  .catch(e => e)
}