const Sequelize = require("sequelize");
const db = require("../db");
const { NOW } = require("sequelize");


const PacsSum = db.define("pacs_sum", {
  // The committee id number for the PAC making the contribution.
  pacid: {
    type: Sequelize.STRING,
  },
  // A unique identifier for candidates that is constant throughout cycles.
  cid: {
    type: Sequelize.STRING,
  },
  // The amount contributed. This will be negative for refunds.
  total_amount: {
    type: Sequelize.FLOAT,
  },
  createdAt: {
    type: Sequelize.DATE,
    defaultVaule: NOW
  },
  updatedAt: {
    type: Sequelize.DATE,
    defaultVaule: NOW
  }
});

module.exports = PacsSum;
