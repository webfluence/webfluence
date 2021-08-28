import axios from "axios";
import history from "../history";

// ACTION TYPES

const SET_CANDIDATE_CONTRIBUTORS = "SET_CANDIDATE_CONTRIBUTORS";

// ACTION CREATORS

const setCandidateContributors = contributors => ({
  type: SET_CANDIDATE_CONTRIBUTORS,
  contributors,
});

// THUNK CREATORS

export const setCandidateContributorsThunk = (cid) => async dispatch => {
  try {
    const {data} = await axios.get(`/api/candidates/${cid}/????`);
    const contributors =
    dispatch(setCandidateContributors(data));
  } catch (error) {
    console.error(error);
  }
}


// REDUCER
export default function candcontribdb(state = [], action) {
  switch (action.type) {
    case SET_CANDIDATE_CONTRIBUTORS:
      return action.contributors;
    default:
      return state;
  }
}
