const Sequelize = require('sequelize');
const db = require('../db');
const { NOW } = require("sequelize");


const Committees = db.define('committee', {
  //Last year (even year) of the federal 2-year election cycle
  cycle: {
    type: Sequelize.STRING,
  },
  //Unique ID given by FEC to each committee.
  cmte_id: {
    type: Sequelize.STRING,
  },
  //Standardized committee name based on PAC’s sponsor.
  pacshort: {
    type: Sequelize.STRING,
  },
  //Usually blank. For leadpacs, shows the sponsoring member
  affiliate: {
    type: Sequelize.STRING,
  },
  /*The standardized parent organization for the organization listed
in the PACShort field. If there is no parent identified, this field
will be equal to PACShort. */
  ultorg: {
    type: Sequelize.STRING,
  },
  /*For candidate committees this will be the candidate’s CID.
  Otherwise, it will be the same as CmteID. */
  recipid: {
    type: Sequelize.STRING,
  },
  /*A two-character code defining the type of recipient. For
candidates, the first character is party (“D” for Democratic, “R”
for Republican, “3” for Independent, Libertarian or third party,
“U” for Unknown.) The second character is “W” for Winner,
“L” for Loser, “I” for incumbent, “C” for Challenger, “O” for
“Open Seat”, and “N” for Non-incumbent. “N” is reserved for
candidates that are neither in office nor running during the cycle
in question. For party committees, the first character is party and
the second character is “P.” For PACs, the first character is “P”
and for outside spending groups, "O". For both, the second
character is “B” for Business, “L” for Labor”, “I” for
Ideological, “O” for “Other” and “U” for unknown. */
  recipcode: {
    type: Sequelize.STRING,
  },
  //Unique ID given to candidates by FEC.
  feccandid: {
    type: Sequelize.STRING,
  },
  /*(D,R,3,I,L) Will be null or empty if committee is not a party,
joint fundraising, leadership or candidate committee */
  party: {
    type: Sequelize.STRING,
  },
  /*The standard five character code identifying the committee’s
industry or ideology*/
  primcode: {
    type: Sequelize.STRING,
  },
  //Indicates how the PrimCode was determined.
  source: {
    type: Sequelize.STRING,
  },
  /*If "Y", the committee has significant business in multiple
industries, some of which fall under the jurisdiction of specific
congressional committees. */
  sensitive: {
    type: Sequelize.STRING,
  },
  /*Off/False indicate that the company is not owned by a foreign
entity. Those that are owned by a foreign entity are on/True,
sometimes -1 */
  foreign: {
    type: Sequelize.STRING,
  },
  //Determines if cmte is active in the cycle – 0 is no and 1 is yes
  active: {
    type: Sequelize.INTEGER,
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

module.exports = Committees;
