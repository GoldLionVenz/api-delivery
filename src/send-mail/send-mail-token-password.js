export default function makeSendMailResetPassword({
  serverMail,
  domParser,
  fs,
  path,
}) {
  return async function sendMailResetPassword(email, user, token) {
    const htmlTemplate = await getEmailTemplate();
    const buildEmailTemplate = buildEmailBodyTemplate({
      htmlTemplate,
      user,
      token
    });
    const info = await serverMail.sendMail({
      from: 'clubdeboxeo@back9.com.ve',
      to: email,
      subject: "Restablecer contraseña",
      html: buildEmailTemplate,
    });
    console.log("Message sent: %s", info.messageId);
  };
  async function getEmailTemplate() {
    const requestFile = await new Promise((resolve, reject) =>
      fs.readFile(
        path.resolve(__dirname, "../../files/reset-password.html"),
        "utf8",
        (err, content) => (err ? reject(err) : resolve(content))
      )
    );
    return requestFile;
  }
  function buildEmailBodyTemplate({ htmlTemplate, user, token }) {
    const dom = domParser.load(htmlTemplate);
    dom("#token").text(token);
    dom("#passengerName").text(`${user.name} ${user.lastName}`);
    return dom.html();
  }
}
