import axios from "axios";
import history from "../history";

//action type
const GET_ORG = "GET_ORG";

//action creator
const getOrg = (orgData) => ({
  type: GET_ORG,
  orgData,
});


//thunk
export const getOrgThunk = (orgName) => async (dispatch) => {
  try {
    orgName = encodeURIComponent(orgName)
    // Get the org id from the name
    const { data } = await axios.get(`/api/orgs/${orgName}`);
      
    const dataString = JSON.stringify(data);
    const newString = dataString.replaceAll("@attributes", "attributes");
    const newData = JSON.parse(newString);
    
    // Use the org id to find the org info
    const orgId = Array.isArray(newData.response.organization) ? newData.response.organization[0].attributes.orgid : newData.response.organization.attributes.orgid
    
    const {data : orgInfoData} = await axios.get(`/api/orgs/${orgName}/${orgId}`)
    const dataString2 = JSON.stringify(orgInfoData);
    const newString2 = dataString2.replaceAll("@attributes", "attributes");
    const orgInfo = JSON.parse(newString2);
    // Optional: Combine the two objects into one, and then return it.
    const orgData = { newData, orgInfo}
  
    dispatch(getOrg(orgData));
    
  } catch (error) {
    Error(error);
  }
};


//reducer
export default function org (state = {}, action) {
  switch (action.type) {
    case GET_ORG:
      return action.orgData;
    default:
      return state;
  }
}
