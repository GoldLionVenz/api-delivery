"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _models = require("../models");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const SuperAdmin = async (req, res, next) => {
  if (!req.header("Authorization")) {
    throw {
      message: "Tokent not found"
    };
  }

  const token = req.header("Authorization").replace("Bearer ", "");

  try {
    const data = _jsonwebtoken.default.verify(token, process && process.env && process.env.JWT_KEY || "WinterIsComingGOT2020");

    const user = await _models.userModel.findById(data._id);

    if (!user) {
      throw {
        message: "User not found"
      };
    }

    if (user.user_roll !== "root") {
      res.status(401).send({
        message: "Not authorized to access this resource"
      });
      return;
    }

    req.user = user;
    req.token = token;
    next();
  } catch (error) {
    res.status(401).send({
      message: "Not authorized to access this resource"
    });
  }
};

var _default = SuperAdmin;
exports.default = _default;