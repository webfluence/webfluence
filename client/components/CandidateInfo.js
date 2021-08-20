import React from "react";
import { connect } from "react-redux";

export const CandidateInfo = (candidate) => {
  return (
    <div>
      <div>
        <img
          src={`https://theunitedstates.io/images/congress/225x275/${candidate.id}.jpg`}
        />
        <h2>{candidate.name}</h2>
        <p>{candidate.party}</p>
        <p>{candidate.state}</p>
        <p>{candidate.district}</p>
      </div>
      <div>
        <p>{candidate.email}</p>
        <p>{candidate.phone}</p>
      </div>
    </div>
  );
};

const mapState = (state) => {
  return {};
};

export default connect(mapState)(CandidateInfo);
