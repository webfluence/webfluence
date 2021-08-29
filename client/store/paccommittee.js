import axios from 'axios';
import history from '../history';

// ACTION TYPES
const SET_PACID = 'SET_PACID';


// ACTION CREATORS
const setPacID = pacId => ({
  type: SET_PACID,
  pacId,
});

// THUNK CREATORS
export const setPacIDThunk = (pacShort) => async (dispatch) => {
    // pacShort = pacShort.split(' ').join('+')
    pacShort = encodeURIComponent(pacShort)
   try{
    const {data} = await axios.get(`/api/committee/pacshort/${pacShort}`);
      dispatch(setPacID(data));
   } catch (err) {
     console.log(err);
   }
};

// REDUCER
export default function pacid (state = {}, action) {
  switch (action.type) {
    case SET_PACID:
      return action.pacId;
    default:
      return state;
  }
}