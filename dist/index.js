"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _cors = _interopRequireDefault(require("cors"));

var _dotenv = _interopRequireDefault(require("dotenv"));

var _http = _interopRequireDefault(require("http"));

var _figlet = _interopRequireDefault(require("figlet"));

var _fs = _interopRequireDefault(require("fs"));

var _path = _interopRequireDefault(require("path"));

var _controller = require("./controller");

var _expressCallback = _interopRequireDefault(require("./express-callback"));

var _expressRedirectCallback = _interopRequireDefault(require("./express-callback/express-redirect-callback"));

var _middleware = require("./middleware");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//import https from "https";
const accessControlAllow = function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.header("Access-Control-Allow-Headers", req.headers["access-control-request-headers"]);
  next();
};

_dotenv.default.config();

const app = (0, _express.default)();
app.use(_bodyParser.default.json());
app.use(_bodyParser.default.urlencoded({
  extended: false
}));
app.use(accessControlAllow);
app.use((0, _cors.default)());
app.use(_express.default.static(_path.default.resolve(__dirname, "../public")));
app.get("/api/v1/qr/:qr", function (req, res) {
  const filePath = _path.default.resolve(__dirname, "../public/qr");

  const getImage = req.params.qr;

  _fs.default.readFile(filePath + "/" + getImage, function (err, content) {
    if (err) {
      res.writeHead(400, {
        "Content-type": "text/html"
      });
      console.log(err);
      res.end("No such image");
    } else {
      res.writeHead(200, {
        "Content-type": "image/jpg"
      });
      res.end(content);
    }
  });
});
app.get("/", (req, res) => {
  return res.send({
    message: "Bienvenido"
  });
});
app.post("/api/v1/register", (0, _expressCallback.default)(_controller.userController.addUser));
app.post("/api/v1/login", (0, _expressCallback.default)(_controller.userController.loginUser));
app.post("/api/v1/updateuser", _middleware.Auth, (0, _expressCallback.default)(_controller.userController.updateUser));
app.post("/api/v1/addproduct", (0, _expressCallback.default)(_controller.productController.addProduct));
app.post("/api/v1/findproduct", (0, _expressCallback.default)(_controller.productController.findProduct));
app.post("/api/v1/getproducts", (0, _expressCallback.default)(_controller.productController.getProducts));
app.post("/api/v1/getproductspercategory", (0, _expressCallback.default)(_controller.productController.getProductsPerCategory));
app.post("/api/v1/findproducts", (0, _expressCallback.default)(_controller.productController.findProducts));
app.post("/api/v1/addproductshoppingcart", _middleware.Auth, (0, _expressCallback.default)(_controller.shoppingCartController.addProductShoppingCart));
app.post("/api/v1/getproductshoppingcart", _middleware.Auth, (0, _expressCallback.default)(_controller.shoppingCartController.getProductShoppingCart));
app.post("/api/v1/removeproductshoppingcart", _middleware.Auth, (0, _expressCallback.default)(_controller.shoppingCartController.removeProductShoppingCart));
app.post("/api/v1/incrementproductshoppingcart", _middleware.Auth, (0, _expressCallback.default)(_controller.shoppingCartController.incrementProductShoppingCart));
app.post("/api/v1/decrementproductshoppingcart", _middleware.Auth, (0, _expressCallback.default)(_controller.shoppingCartController.decrementProductShoppingCart));
app.post("/api/v1/cleanshoppingcart", _middleware.Auth, (0, _expressCallback.default)(_controller.shoppingCartController.cleanProductShoppingCart));
app.post("/api/v1/createorder", _middleware.Auth, (0, _expressCallback.default)(_controller.orderController.createOrder));
app.post("/api/v1/paypalredit", (0, _expressRedirectCallback.default)(_controller.orderController.checkOrderStatus));
app.get("/paypalaproved", function (req, res) {
  res.sendFile(_path.default.resolve(__dirname, "../public/payment-aproved.html"));
});
app.get("/paypalfail", function (req, res) {
  res.sendFile(_path.default.resolve(__dirname, "../public/payment-fail.html"));
});
app.use("/public/js", _express.default.static(_path.default.resolve(__dirname, "../public/js")));
app.get("/api/v1/view/payment", function (req, res) {
  res.sendFile(_path.default.resolve(__dirname, "../public/paypal-smart-button.html"));
});

const httpServer = _http.default.createServer(app); //const httpsServer = https.createServer(app);
//httpsServer.listen(443);


httpServer.listen(process && process.env && process.env.PORT || "8000" || 8000);
(0, _figlet.default)(process && process.env && process.env.APP || "DELIVERY API", function (err, data) {
  if (err) {
    return;
  } // eslint-disable-next-line no-console


  console.log(data);
});
var _default = app;
exports.default = _default;