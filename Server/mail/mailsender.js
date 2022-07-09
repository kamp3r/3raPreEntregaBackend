const nodemailer = require("nodemailer");
const { configuration } = require("../config/config");

const sendMail = async (data) => {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: configuration.mail,
      pass: configuration.mailPass,
    },
  });
  await transporter.sendMail({
    from: '"Ecommerce-API" <admin@vinit.com>',
    to: `${configuration.mail}`,
    subject: "Nuevo usuario registrado",
    text: `
    ${data.name} ${data.lastName} se ha registrado en la API de Ecommerce,
    su correo es: ${data.email},
    su direccion es: ${data.address},
    su telefono es: ${data.phone}`,
  });
};

module.exports = sendMail;
