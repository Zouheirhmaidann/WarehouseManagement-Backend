const req = require("express/lib/request.js");
const WarehouseModel = require("../Models/WarehouseModel.js");
const WarehouseRoutes = (app) => {
  app.post("/loginUser", (req, res) => {
    WarehouseModel.loginUser(req.body, (err, result) => {
      if (err) {
        return res.status(500).json(err);
      } else {
        return res.status(200).send(result);
      }
    });
  });
  app.get("/fetchOrders", (req, res) => {
    WarehouseModel.fetchOrders(
      req.headers.username,
      req.query.status,
      (err, result) => {
        if (err) {
          return res.status(500).json(err);
        }
        return res.status(200).send(result);
      }
    );
  });
};

module.exports = WarehouseRoutes;
