export default function makeLoginUser({
    userModel,
    jwt
  }) {
    return async function loginUser({ ...userInfo } = {}) {
      console.log(userInfo)
        const user = await userModel.findByCredentials(userInfo.email, userInfo.password)
        if (!user) {
            throw new Error ({error: 'Login failed! Check authentication credentials'})
        }
        const token = jwt.sign({_id: user._id}, process.env.JWT_KEY, { expiresIn: 6000 * 6000 });
      return { 
          message: "Okey",
          user,
          token
        };
    };
  }
  