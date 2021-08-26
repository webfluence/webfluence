const { NOW } = require("sequelize");
const Sequelize = require("sequelize");
const db = require("../db");

// For reference, see the datadictionary provided here: https://www.opensecrets.org/resources/datadictionary/Data%20Dictionary%20for%20PAC%20to%20Cands%20Data.htm

const Candidates = db.define("candidate", {
  // Last year (even year) of the federal 2-year election cycle
  cycle: {
    //This could be INT, but it is marked
    type: Sequelize.STRING,
  },
  // Assigned by FEC and selected by CRP as the active, should multiples exist.
  feccandid: {
    type: Sequelize.STRING,
  },
  // Unique identifier for each candidate. Every candidate should have one and only one CID throughout all cycles. Recipid for candidates is based on CID.
  cid: {
    type: Sequelize.STRING,
  },
  // Candidate name in format of firstname lastname and party in parens, like Steve Kagen (D)
  firstlastp: {
    type: Sequelize.STRING,
  },
  // The party of the candidate. "D" for Democratic, "R" for Republican", "I" for Independent, "L" for Libertarian", "3" for other third party and "U" for Unknown.
  party: {
    type: Sequelize.STRING,
  },
  // Four character identifier of the office sought by the candidate. For congressional races, the first two characters are the state and the next two are the district for House candidates and "S1" or "S2" for Senate candidates. "PRES" indicates a presidential candidate.
  distidrunfor: {
    type: Sequelize.STRING,
  },
  // Four character identifier of the office currently held (if any) by the candidate. For House members, the first two characters are the state and the next two are the district. For Senators the first two characters are the state and the last two characters are "S1" or "S2". "PRES" indicates a presidential candidate. For non-incumbents, this field is blank. If a member of Congress dies or leaves office, this field should become blank. This field is frozen on election day. For cycles prior to the current cycle, DistidCurr reflects office held on Election Day of the Cycle.
  distidcurr: {
    type: Sequelize.STRING,
  },
  // This field indicates whether the candidate is currently running for federal office - "Y" means yes, otherwise this field is blank. If a candidate loses a primary or drops out of the race, this field becomes blank. This field is frozen on Election Day, and thus for previous cycles can be used to show the candidate who ran in the general election.
  currcand: {
    type: Sequelize.STRING,
  },
  // This field indicates whether the candidate ever ran for federal office during the cycle in question. Like CurrCand, "Y" means yes and blank means no. This field should be "Y" for any candidate who filed to run for office or otherwise formally declared intention to run. This does NOT change if the candidate drops out or loses a primary. Be aware that we've tightened the definition in recent cycles - for older data, CycleCand is likely to cast a broader net. Also note that incumbents are usually assumed to be running for re-election and get a "Y" in CycleCand unless there is evidence to the contrary.
  cyclecand : {
    type: Sequelize.STRING,
  },
  // Identifies type of candidate - "I" is incumbent, "C" is challenger, "O" is open seat. This may be blank if the candidate is neither a member of Congress nor running this cycle. Note this is based on the office sought. A House incumbent running for the Senate would have a CRPICO of "C" or "O", not "I."
  cyccrpico: {
    type: Sequelize.STRING,
  },
  // A two-character code defining the type of candidate. The first character is party ("D" for Democratic, "R" for Republican, "3" for Independent or third party, "U" for Unknown.) The second character is "W" for Winner, "L" for Loser, "I" for incumbent, "C" for Challenger, "O" for "Open Seat", and "N" for Non-incumbent. Incumbent, Challenger and Open Seat are based on CRPICO. "N" is reserved for candidates that are neither in office nor running during the cycle in question. This lives in dbo_CandsCRP.
  recipcode: {
    type: Sequelize.STRING,
  },
  // Indicates whether candidate has publicly committed to forego contributions from PACs
  nopacs: {
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

module.exports = Candidates;
