export default function makeEditPasswordUser({
  userModel,
  encryptPassword,
  isTokenValid
}) {
  return async function editUserPassword({ token, password } = {}) {
    if (!token) {
      throw { message: "Token requerido" };
    }

    const user = await userModel.findOne({
      "token.value": token
    });

    if (!user) {
      throw { code: 412, message: "Token inválido" };
    }

    if (!isTokenValid(user.token)) {
      throw { code: 412, message: "Token vencido" };
    }

    const passwordEncode = await encryptPassword.hash(password, 8);

    await userModel.findOneAndUpdate(
      {
        email: user.email
      },
      {
        $set: {
          token: {},
          password: passwordEncode
        }
      },
      { useFindAndModify: false }
    );

    return {
      message: "Contraseña actualizada"
    };
  };
}
