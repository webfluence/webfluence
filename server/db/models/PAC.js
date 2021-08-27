const Sequelize = require("sequelize");
const db = require("../db");
const { NOW } = require("sequelize");

// For reference, see the datadictionary provided here: https://www.opensecrets.org/resources/datadictionary/Data%20Dictionary%20for%20PAC%20to%20Cands%20Data.htm

const Pacs = db.define("pac", {
  // Last year (even year) of the federal 2-year election cycle
  cycle: {
    //This could be INT, but it is marked
    type: Sequelize.STRING,
  },
  // A unique record identifier within a given cycle given by the FEC
  fecrecno: {
    type: Sequelize.STRING,
  },
  // The committee id number for the PAC making the contribution.
  pacid: {
    type: Sequelize.STRING,
  },
  // A unique identifier for candidates that is constant throughout cycles.
  cid: {
    type: Sequelize.STRING,
  },
  // The amount contributed. This will be negative for refunds.
  amount: {
    type: Sequelize.FLOAT,
  },
  // The reported date of the contribution.
  date: {
    type: Sequelize.STRING,
  },
  // The standard five character code identifying the donor's industry or ideology. Usually based on Primcode. Sometimes a PAC sponsor will have secondary interests which may replace the main realcode depending on recipient. For example, Boeing is primarily Air Transport but has Air Defense interests. Thus Boeing contributions to members of the Armed Services committee would have a realcode of Air Defense.
  realcode: {
    type: Sequelize.STRING,
  },
  // The transaction type code for the contribution. 24A is an Independent Expenditure against the candidate, 24C is a coordinated expenditure, 24E is an independent expenditure for the candidate, 24F is a communication cost for the candidate, 24K is a direct contribution, 24N is a communication cost against the candidate and 24Z is an in kind contribution
  type: {
    type: Sequelize.STRING,
  },
  // Whether the contribution is direct ("D") or indirect ("I."). Indirect contributions include independent expenditures and communications costs, are not subject to contribution limits and must be made completely independently of the candidate. Indirect contributions can also be against the candidate.
  di: {
    type: Sequelize.STRING,
  },
  // FEC CandID of recipient candidate
  feccandid: {
    type: Sequelize.STRING,
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

module.exports = Pacs;
