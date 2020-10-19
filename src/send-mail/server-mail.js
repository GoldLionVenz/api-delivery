import nodemailer from "nodemailer";
const serverMail = nodemailer.createTransport({
  host: "",
  port: 587,
  secure: false,
  auth: {
    user: "",
    pass: ""
  }
});

export default serverMail;
