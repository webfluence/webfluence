// ACTION TYPES
const SET_LEGISLATOR = "SET_LEGISLATOR";

// ACTION CREATORS

const setLegislator = (legislator) => ({
  type: SET_LEGISLATOR,
  legislator,
});

// THUNK CREATORS

export const setLegislatorThunk = (legislator) => {
  return (dispatch) => {
    dispatch(setLegislator(legislator));
  };
};

export default function (state = [], action) {
  switch (action.type) {
    case SET_LEGISLATOR:
      return action.legislator;
    default:
      return state;
  }
}
