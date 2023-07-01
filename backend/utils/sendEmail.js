const nodeMailer = require("nodemailer");

const sendEmail = async function (option) {
  console.log("jhwwljw");
  const transpoter = nodeMailer.createTransport({
    host: "smpt.gmail.com",
    port: 465,
    service: process.env.SMPT_SERVICE,
    auth: {
      user: process.env.SMPT_MAIL,
      pass: process.env.SMPT_PASS,
    },
  });
  const mailOption = {
    from: process.env.SMPT_MAIL,
    to: option.email,
    subject: option.subject,
    text: option.message,
  };

  await transpoter.sendMail(mailOption);
  console.log("jhwwljw3");
};

module.exports = sendEmail;
