import axios from 'axios';
import history from '../history';


// ACTION TYPES
const SET_CANDPACS = 'SET_CANDPACS';

// ACTION CREATORS
const setCandpacs = (pacs) => ({
  type: SET_CANDPACS,
  pacs,
});


// THUNK CREATORS

export const setCandPacThunk = (crp_id) => async (dispatch) => {
  try {
    const { data } = await axios.get(`/api/pac/${crp_id}`);
    dispatch(setCandpacs(data));
  } catch (err) {
    console.error(err);
  }
}

// REDUCER
export default function candpac(state = {}, action) {
  switch (action.type) {
    case SET_CANDPACS:
      return action.pacs;
    default:
      return state;
  }
}
