"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = makeUserModel;

function makeUserModel({
  Schema,
  Model,
  plugins,
  encryptPassword
}) {
  const UserSchema = new Schema({
    name: {
      type: String,
      required: true
    },
    userName: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true
    },
    document: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true,
      minLength: 7
    },
    phoneNumber: {
      type: String,
      required: true
    },
    address: {
      type: String,
      required: true
    },
    userRoll: {
      type: String,
      required: true
    }
  });

  UserSchema.statics.findByCredentials = async (email, password) => {
    // Search for a user by email and password.
    const user = await User.findOne({
      email
    });

    if (!user) {
      throw {
        message: "Invalid login credentials"
      };
    }

    const isPasswordMatch = await encryptPassword.compare(password, user.password);

    if (!isPasswordMatch) {
      throw {
        message: "Invalid login credentials"
      };
    }

    return {
      name: user.name,
      email: user.email,
      _id: user._id,
      sale_point: user.sale_point,
      user_roll: user.user_roll
    };
  };

  UserSchema.statics.existsEmail = async email => {
    const resp = await User.findOne({
      email: email
    }, (err, doc) => {
      if (err) throw {
        message: "error"
      };

      if (doc === null) {
        return false;
      } else {
        return true;
      }
    });
    return resp;
  };

  UserSchema.statics.existsUserName = async userName => {
    const resp = await User.findOne({
      userName: userName
    }, (err, doc) => {
      if (err) throw {
        message: "error"
      };

      if (doc === null) {
        return false;
      } else {
        return true;
      }
    });
    return resp;
  };

  UserSchema.plugin(plugins);
  const User = Model("User", UserSchema);
  return User;
}