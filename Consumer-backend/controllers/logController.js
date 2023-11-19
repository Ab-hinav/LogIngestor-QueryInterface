const logService = require("../services/logService");

exports.healthCheck = async (req, res, next) => {
  // check if db is still up
  const response = await logService.healthCheck();
  if (response) {
    return res.status(200).send({ status: "db is up" });
  }
  return res.status(200).send({ status: "db is down" });
};

exports.consumeLog = async (req, res, next) => {
  if (Object.keys(req.body).length === 0) {
    return res.status(404).send({ status: "req body is empty" });
  }

  const message = req.body.message;
  const response = await logService.consumeLog(message);
  console.log(response);
  res.status(200).send({ status: "saved" });
};

exports.getLogs = async (req, res, next) => {
  const queryParameters = req.query;
  console.log(queryParameters);
  // check if startdate and enddate are present in queryparameters
  if (queryParameters.startDate) {
    queryParameters.startDate = new Date(queryParameters.startDate);
  }
  if (queryParameters.endDate) {
    queryParameters.endDate = new Date(queryParameters.endDate);
  }
  if (
    queryParameters.startDate &&
    queryParameters.endDate &&
    queryParameters.startDate > queryParameters.endDate
  ) {
    return res
      .status(404)
      .send({ status: "startdate cannot be greater than enddate" });
  }

  const response = await logService.getLogs(queryParameters);
  if (response) {
    res.status(200).send({ status: "success", data: JSON.stringify(response) });
  } else {
    res.status(200).send({ status: "failed" });
  }
};
