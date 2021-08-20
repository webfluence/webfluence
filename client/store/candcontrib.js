import axios from "axios";
import history from "../history";

// ACTION TYPES

const SET_CANDCONTRIBUTORS = "SET_CANDCONTRIBUTORS";

// ACTION CREATORS
const setCandContributors = (contributors) => ({
  type: SET_CANDCONTRIBUTORS,
  contributors,
});

// THUNK CREATORS

export const setCandContributorsThunk = (crp_id) => async (dispatch) => {
  try {
    console.log(crp_id);
    console.log("CAND CONTRIBUTE THUNK RUNNING");
    const { data } = await axios.get(
      `https://www.opensecrets.org/api/?method=candContrib&cid=${crp_id}&cycle=2020&apikey=d2345f30fa2dc3b73bfcdb43da40eef3&output=json`
    );
    const dataString = JSON.stringify(data);
    const newString = dataString.replaceAll("@attributes", "attributes");
    const newData = JSON.parse(newString);
    console.log("candcontribute----", newData);
    dispatch(setCandContributors(newData));
  } catch (error) {
    Error(error);
  }
};

//REDUCER
export default function candcontrib(state = {}, action) {
  switch (action.type) {
    case SET_CANDCONTRIBUTORS:
      return action.contributors;
    default:
      return state;
  }
}
