import axios from 'axios';
import history from '../history';

// ACTION TYPES
const SET_PACCAND = 'SET_PACCAND';

// ACTION CREATORS
const setPaccand = (cands) => ({
  type: SET_PACCAND,
  cands,
});

// THUNK CREATORS

export const setPacCandThunk = (pacid) => async (dispatch) => {
    try {
      const { data } = await axios.get(`/api/pac/pacidsum/${pacid}`);
      dispatch(setPaccand(data));
    } catch (err) {
      console.error(err);
    }
}


// REDUCER
export default function paccand(state = {}, action) {
  switch (action.type) {
    case SET_PACCAND:
      return action.cands;
    default:
      return state;
  }
}
