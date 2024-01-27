import cheerio from "cheerio"
import fs from "fs"
import path from "path"
import serverMail from "./server-mail"
import makeSendMailResetPassword from "./send-mail-token-password"

const sendMailResetPassword = makeSendMailResetPassword({
  serverMail,
  domParser: cheerio,
  fs,
  path
})

const sendMailService = Object.freeze({ sendMailResetPassword })

export default sendMailService
