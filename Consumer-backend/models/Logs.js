"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Log extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Log.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      level: {
        type: DataTypes.STRING,
      },
      message: {
        type: DataTypes.TEXT,
      },
      resourceId: {
        type: DataTypes.STRING,
      },
      timestamp: {
        type: DataTypes.DATE,
      },
      traceId: {
        type: DataTypes.STRING,
      },
      spanId: {
        type: DataTypes.STRING,
      },
      commit: {
        type: DataTypes.STRING,
      },
      parentResourceId: {
        type: DataTypes.STRING,
      },
      metadata: {
        type: DataTypes.JSONB,
      },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    },

    {
      sequelize,
      paranoid: true,
      modelName: "Log",
      tableName: "logs",
    },
  );
  return Log;
};
