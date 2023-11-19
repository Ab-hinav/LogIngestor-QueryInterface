"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.createTable("logs", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      level: {
        type: Sequelize.STRING(20),
      },
      message: {
        type: Sequelize.TEXT,
      },
      resourceId: {
        type: Sequelize.STRING(50),
      },
      timestamp: {
        type: Sequelize.DATE,
      },
      traceId: {
        type: Sequelize.STRING(50),
      },
      spanId: {
        type: Sequelize.STRING(50),
      },
      commit: {
        type: Sequelize.STRING(50),
      },
      parentResourceId: {
        type: Sequelize.STRING(50),
      },
      metadata: {
        type: Sequelize.JSONB,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
    // Create indexes for efficient searches
    // await queryInterface.addIndex("logs", ["level"]);
    // await queryInterface.addIndex("logs", ["resourceId"]);
    // await queryInterface.addIndex("logs", ["timestamp"]);
    // await queryInterface.addIndex("logs", ["traceId"]);
    // await queryInterface.addIndex("logs", ["spanId"]);
    // await queryInterface.addIndex("logs", ["commit"]);
    // await queryInterface.addIndex("logs", ["parentResourceId"]);
    // await queryInterface.addIndex("logs", ["level", "timestamp"], {
    //   name: "idx_level_timestamp",
    // });

    // Optional: Create an index for full-text search
    // await queryInterface.sequelize.query(
    //   "CREATE INDEX idx_full_text_search ON logs USING GIN (to_tsvector('english', message) || to_tsvector('english', parentResourceId));",
    // );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     *
     */

    await queryInterface.dropTable("logs");
  },
};
