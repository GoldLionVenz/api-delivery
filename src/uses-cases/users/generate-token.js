import { makeToken } from "../../helpers";
export default function makeGenerateToken({ userModel, sendMailService }) {
  return async function generateToken({ email } = {}) {
    const token = makeToken();
    if (!email) {
      throw { message: "Correo requerido" };
    }
    if (!token) {
      throw { message: "Error en generación de token" };
    }

    const user = await userModel.findOne({ email });
    if (!user) {
      throw {
        message: "Usuario no encontrado"
      };
    }

    const userToUpdate = await userModel.findOneAndUpdate(
      {
        email
      },
      {
        $set: {
          token
        }
      },
      { useFindAndModify: false }
    );
    await sendMailService.sendMailResetPassword(
      userToUpdate.email,
      userToUpdate,
      userToUpdate.token.value
    );
    return {
      message: "Codigo de verificacion enviado correctamente",
    };
  };
}
