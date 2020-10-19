import nodemailer from "nodemailer";
const serverMail = nodemailer.createTransport({
  host: "email-smtp.us-east-1.amazonaws.com",
  port: 587,
  secure: false,
  auth: {
    user: "AKIAV27FGQZHT3NTD2E6",
    pass: "BHPk5cpk+qJ00Sp8/trUxL3tYPjIXfrkOmneSwfKTIbH"
  }
});

export default serverMail;
