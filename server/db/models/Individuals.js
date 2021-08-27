const { NOW } = require("sequelize");
const Sequelize = require("sequelize");
const db = require("../db");

// For reference, see the datadictionary provided here: https://www.opensecrets.org/resources/datadictionary/Data%20Dictionary%20for%20PAC%20to%20Cands%20Data.htm

const Individuals = db.define("individual", {
  // Last year (even year) of the federal 2-year election cycle
  cycle: {
    //This could be INT, but it is marked
    type: Sequelize.STRING,
  },
  // A unique record identifier within a given cycle.
  fectransid: {
    type: Sequelize.STRING,
  },
  // A unique identifier for individual donors.  Family groups match on first 11 chars
  contribid: {
    type: Sequelize.STRING,
  },
  // The name of the contributor, usually in the format Last name, First Name.
  contrib: {
    type: Sequelize.STRING,
  },
  // The recipient's id number. If the contribution is to a candidate this will be the candidate's unique candidate id number. Otherwise, it will be the FEC committee id number.
  recipid: {
    type: Sequelize.STRING,
  },
  // The standardized organization name for the contributor. This is usually based on the donor's employer. The donor may not have an income producing occupation (e.g. homemaker)
  orgname: {
    type: Sequelize.STRING,
  },
  // The standardized parent organization for the organization listed in the Orgname field. If there is no parent identified, this field will be blank or null.
  ultorg: {
    type: Sequelize.STRING,
  },
  // The standard five character code identifying the donor's industry or ideology. Usually based on Orgname (e.g., the orgname "Microsoft Corp" would normally get realcode C5120 for computer software.)
  realcode: {
    type: Sequelize.STRING,
  },
  // The reported date of the contribution
  date : {
    type: Sequelize.STRING,
  },
  // Identifies type of candidate - "I" is incumbent, "C" is challenger, "O" is open seat. This may be blank if the candidate is neither a member of Congress nor running this cycle. Note this is based on the office sought. A House incumbent running for the Senate would have a CRPICO of "C" or "O", not "I."
  amount: {
    type: Sequelize.STRING,
  },
  // 2000+ cycle only, and only for committees that file electronically
  street: {
    type: Sequelize.STRING,
  },
  // The donor's city. This could be based on a home address or an employer's address.
  city: {
    type: Sequelize.STRING,
  },
  // The donor's state. This could be based on a home address or an employer's address.
  state: {
    type: Sequelize.STRING,
  },
  // The donor's zip code. This could be based on a home address or an employer's address.
  zip: {
    type: Sequelize.STRING,
  },
  // A two-character code defining the type of recipient. For candidates, the first character is party ("D" for Democratic, "R" for Republican, "3" for Independent, Libertarian or third party, "U" for Unknown.) The second character is "W" for Winner, "L" for Loser, "I" for incumbent, "C" for Challenger, "O" for "Open Seat", and "N" for Non-incumbent. "N" is reserved for candidates that are neither in office nor running during the cycle in question. For party committees, the first character is party and the second character is "P." For PACs, the first character is "P" and the second character is "B" for Business, "L" for Labor", "I" for Ideological, "O" for "Other" and "U" for unknown.
  recipcode: {
    type: Sequelize.STRING,
  },
  // The transaction type code for the contribution. 15 is a contribution, 15e is an earmarked contribution (made through a group such as Club for Growth or Emily's List), 15j is a contribution through a joint fund raising committee and 22y is a refund. "10" indicates "soft" or nonfederal money for the 2002 cycle and earlier. For the 2004 cycle and later type "10" indicates Levin funds.or outside spending.
  type: {
    type: Sequelize.STRING,
  },
  // The committee id number for the recipient. Note that a candidate can have more than one committee — this field indicates the exact committee receiving the contribution.
  cmteid: {
    type: Sequelize.STRING,
  },
  // The committee id number for the intermediary party to earmarked contributions.
  otherid: {
    type: Sequelize.STRING,
  },
  // The donor's gender. Can also be "U" if unknown or "N" if the name is ambiguous.
  gender: {
    type: Sequelize.STRING,
  },
  // Refers to specific page of FEC report images on which this transaction appears.
  microfilm: {
    type: Sequelize.STRING,
  },
  // The donor's disclosed occupation.
  occupation: {
    type: Sequelize.STRING,
  },
  // The donor's s disclosed employer
  employer: {
    type: Sequelize.STRING,
  },
  // Indicates how the RealCode was determined — see the How to Use Source in the OpenSecrets OpenData Guide
  source: {
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

module.exports = Individuals;
