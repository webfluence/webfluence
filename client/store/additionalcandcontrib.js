import axios from "axios";
import history from "../history";


// ACTION TYPES

const SET_ADDITIONAL_CANDCONTRIBUTORS = "SET_ADDITIONAL_CANDCONTRIBUTORS";

// ACTION CREATORS
const setAdditionalCandContributors = (contributors) => ({
  type: SET_ADDITIONAL_CANDCONTRIBUTORS,
  contributors,
});

// THUNK CREATORS

export const setAdditionalCandContributorsThunk = (crp_id) => async (dispatch) => {
  try {
    const { data } = await axios.get(
      `/api/contrib/${crp_id}`
    );
    const dataString = JSON.stringify(data);
    const newString = dataString.replaceAll("@attributes", "attributes");
    const newData = JSON.parse(newString);
    dispatch(setAdditionalCandContributors(newData));
  } catch (error) {
    Error(error);
  }
};

//REDUCER
export default function additionalcandcontrib(state = {}, action) {
  switch (action.type) {
    case SET_ADDITIONAL_CANDCONTRIBUTORS:
      return action.contributors;
    default:
      return state;
  }
}
