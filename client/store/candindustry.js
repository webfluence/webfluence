import axios from "axios";
import history from "../history";

// ACTION TYPES

const SET_INDUSTRIES = "SET_INDUSTRIES";

// ACTION CREATORS

const setCandIndustries = (industries) => ({
  type: SET_INDUSTRIES,
  industries,
});

// THUNK CREATORS

export const setCandIndustriesThunk = (crp_id) => async (dispatch) => {
  try {
    const { data } = await axios.get(
      `/api/candindustry/${crp_id}`
    );
    const dataString = JSON.stringify(data);
    const newString = dataString.replaceAll("@attributes", "attributes");
    const newData = JSON.parse(newString);
    dispatch(setCandIndustries(newData));
  } catch (error) {
    Error(error);
  }
};

export default function candindustry(state = {}, action) {
  switch (action.type) {
    case SET_INDUSTRIES:
      return action.industries;
    default:
      return state;
  }
}
