require("dotenv").config();
const express = require("express");
const router = express.Router();
const app = express();
const http = require("http").createServer(app);

router.use(function (req, res, next) {
  // Website you wish to allow to connect
  res.setHeader("Access-Control-Allow-Origin", "*");

  // Request methods you wish to allow
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );

  // Request headers you wish to allow
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,Content-Type,Access-Control-Allow-Headers, Authorization,auth-token,company,url,username"
  );

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader("Access-Control-Allow-Credentials", true);

  // Pass to next layer of middleware
  next();
});

app.use(express.json({ limit: "200mb" }));
app.use(express.urlencoded({ limit: "200mb", extended: true }));

app.use("/api", router);
require("./Routes/WarehouseRoutes.js")(router);

http.listen(process.env.PORT, () => {
  //eslint-disable-next-line
  console.log("Listening on port %s", http.address().port);
});
