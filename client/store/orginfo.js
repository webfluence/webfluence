import axios from "axios";

//action type
const GET_ORG_INFO = 'GET_ORG_INFO'

//action creator
const getOrgInfo = (orgInfo) => ({
    type: GET_ORG_INFO,
    orgInfo
})

//thunk
export const getOrgInfoThunk = (orgName, orgId) => async (dispatch) => {
    const searchName = orgName.replace(/,?\h*(?:\b(?:inc|Inc|LLC|co|corp|Co|Corp)\b\.?)?$/i,"");
    const encodedSearchName = encodeURIComponent(searchName)
    try {
        const {data} = await axios.get(`/api/orgs/${encodedSearchName}/${orgId}/info`)
        dispatch(getOrgInfo(data))
    } catch (error) {
        Error(error)
    }
}

//reducer
export default function orginfo (state = {}, action) {
    switch (action.type) {
      case GET_ORG_INFO:
        return action.orgInfo;
      default:
        return state;
    }
  }