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
      `https://www.opensecrets.org/api/?method=candIndustry&cid=${crp_id}&cycle=2020&apikey=d2345f30fa2dc3b73bfcdb43da40eef3&output=json`
    );
    dispatch(setCandIndustries(data));
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
