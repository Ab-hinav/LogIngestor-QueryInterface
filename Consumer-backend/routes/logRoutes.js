const logController = require("../controllers/logController");
const express = require("express");
const router = express.Router();

router.get("/hello", (req, res, next) => {
  return res.status(200).json("hello back");
});

router.post("/consumeLog", logController.consumeLog);

router.get("/getLogs", logController.getLogs);

router.get("/", logController.healthCheck);

module.exports = router;
