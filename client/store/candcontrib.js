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
    const { data } = await axios.get(
      `/api/contrib/${crp_id}`
    );
    const dataString = JSON.stringify(data);
    const newString = dataString.replaceAll("@attributes", "attributes");
    const newData = JSON.parse(newString);
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
