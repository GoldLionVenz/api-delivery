import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import http from "http";
//import https from "https";
import figlet from "figlet";
import fs from "fs";
import path from "path";
import {
  //paymentController,
  userController,
  productController,
  shoppingCartController,
  orderController,
} from "./controller";
import makeCallBack from "./express-callback";
import makeExpressRedirectCallBack from "./express-callback/express-redirect-callback";
import { Auth, SuperAdmin } from "./middleware";
const accessControlAllow = function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.header(
    "Access-Control-Allow-Headers",
    req.headers["access-control-request-headers"]
  );
  next();
};
dotenv.config();
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(accessControlAllow);

app.use(cors());
app.use(express.static(path.resolve(__dirname, "../public")));
app.get("/api/v1/qr/:qr", function(req, res) {
  const filePath = path.resolve(__dirname, "../public/qr");
  const getImage = req.params.qr;

  fs.readFile(filePath + "/" + getImage, function(err, content) {
    if (err) {
      res.writeHead(400, { "Content-type": "text/html" });
      console.log(err);
      res.end("No such image");
    } else {
      res.writeHead(200, { "Content-type": "image/jpg" });
      res.end(content);
    }
  });
});
app.get("/", (req, res) => {
  return res.send({
    message: "Bienvenido",
  });
});
app.post("/api/v1/register", makeCallBack(userController.addUser));
app.post("/api/v1/login", makeCallBack(userController.loginUser));
app.post("/api/v1/updateuser", Auth, makeCallBack(userController.updateUser));
app.post("/api/v1/addproduct", makeCallBack(productController.addProduct));
app.post("/api/v1/findproduct", makeCallBack(productController.findProduct));
app.post("/api/v1/getproducts", makeCallBack(productController.getProducts));
app.get("/api/v1/getcategories", makeCallBack(productController.getCategories));
app.post(
  "/api/v1/getproductspercategory",
  makeCallBack(productController.getProductsPerCategory)
);
app.post("/api/v1/findproducts", makeCallBack(productController.findProducts));
app.post(
  "/api/v1/addproductshoppingcart",
  Auth,
  makeCallBack(shoppingCartController.addProductShoppingCart)
);
app.post(
  "/api/v1/getproductshoppingcart",
  Auth,
  makeCallBack(shoppingCartController.getProductShoppingCart)
);
app.post(
  "/api/v1/removeproductshoppingcart",
  Auth,
  makeCallBack(shoppingCartController.removeProductShoppingCart)
);
app.post(
  "/api/v1/incrementproductshoppingcart",
  Auth,
  makeCallBack(shoppingCartController.incrementProductShoppingCart)
);
app.post(
  "/api/v1/decrementproductshoppingcart",
  Auth,
  makeCallBack(shoppingCartController.decrementProductShoppingCart)
);
app.post(
  "/api/v1/cleanshoppingcart",
  Auth,
  makeCallBack(shoppingCartController.cleanProductShoppingCart)
);
app.post(
  "/api/v1/createorder",
  Auth,
  makeCallBack(orderController.createOrder)
);
app.post("/api/v1/getorder", Auth, makeCallBack(orderController.getOrder));
app.post("/api/v1/getorders", Auth, makeCallBack(orderController.getOrders));
app.post(
  "/api/v1/paypalredit",
  Auth,
  makeCallBack(orderController.checkOrderStatus)
);
app.post("/api/v1/generatetoken", makeCallBack(userController.generateToken));
app.post("/api/v1/editpassword", makeCallBack(userController.editUserPassword));
app.get("/paypalaproved", function(req, res) {
  res.sendFile(path.resolve(__dirname, "../public/payment-aproved.html"));
});
app.get("/paypalfail", function(req, res) {
  res.sendFile(path.resolve(__dirname, "../public/payment-fail.html"));
});
app.use("/public/js", express.static(path.resolve(__dirname, "../public/js")));

app.get("/api/v1/view/payment", function(req, res) {
  res.sendFile(path.resolve(__dirname, "../public/paypal-smart-button.html"));
});
const httpServer = http.createServer(app);
//const httpsServer = https.createServer(app);

//httpsServer.listen(443);
httpServer.listen(process.env.PORT || 8000);

figlet(process.env.APP, function(err, data) {
  if (err) {
    return;
  }
  // eslint-disable-next-line no-console
  console.log(data);
});

export default app;
