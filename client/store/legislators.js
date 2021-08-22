import { data } from "../dummyData/legislatorDummyData"
// ACTION TYPES
const GET_LEGISLATORS = "GET LEGISLATORS"

// ACTION CREATORS

const getLegislators = (legislators) => ({
  type: GET_LEGISLATORS,
  legislators
})

// THUNK CREATORS

export const getLegislatorsThunk = () => {
  return dispatch => {
  console.log("GETLEGISLATORSTHUNK IS RUNNING!!!!")
  // Here, we should use the JSON data
  // const legislators = []
  // data.map(object => object.results[0].members.map(member => legislators.push(member)))

  dispatch(getLegislators(data))}
}

export default function(state = [], action) {
  switch (action.type) {
    case GET_LEGISLATORS:
      return action.legislators
   default:
      return state
  }
}
