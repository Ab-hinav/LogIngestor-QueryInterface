const { Op } = require("sequelize");
const db = require("../models");

exports.healthCheck = async () => {
  try {
    await db.sequelize.authenticate();
    return true;
  } catch (e) {
    console.log(e);
    return false;
  }
};

exports.consumeLog = async (log) => {
  console.log("consuming log");
  return await db.Log.create({
    level: log.level,
    message: log.message,
    resourceId: log.resourceId,
    timestamp: new Date(log.timestamp),
    traceId: log.traceId,
    spanId: log.spanId,
    commit: log.commit,
    metadata: log.metadata,
    parentResourceId: log.metadata.parentResourceId,
  });
};

exports.getLogs = async (query) => {
  console.log(query);
  let queries = {};

  if (query.level) {
    queries.level = { [Op.iLike]: `%${query.level}%` };
  }

  if (query.resourceId) {
    queries.resourceId = { [Op.iLike]: `%${query.resourceId}%` };
  }

  if (query.message) {
    queries.message = { [Op.iLike]: `%${query.message}%` };
  }

  if (query.startDate) {
    queries.timestamp = { [Op.gte]: query.startDate };
  }

  if (query.endDate) {
    queries.timestamp = { ...queries.timestamp, [Op.lte]: query.endDate };
  }

  if (query.traceId) {
    queries.traceId = { [Op.iLike]: `%${query.traceId}%` };
  }

  if (query.spanId) {
    queries.spanId = { [Op.iLike]: `%${query.spanId}%` };
  }
  if (query.commitId) {
    queries.commit = { [Op.iLike]: `%${query.commitId}%` };
  }

  if (query.parentResourceId) {
    queries.parentResourceId = { [Op.iLike]: `%${query.parentResourceId}%` };
  }

  let response;
  try {
    response = await db.Log.findAll({
      where: queries,
    });
  } catch (e) {
    console.log(e);
    response = false;
  }

  return response;
};
