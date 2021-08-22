import { Typography, Grid, CardMedia, Box } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";

const dummyData = {
  id: "P000197",
  crp_id: "N00007360",
  name: "Kyle Combs",
  party: "Whig",
  state: "MA",
  district: "2",
  email: "kyle.combs@whigs.org",
  phone: "(919) 999-9999"
}

export const CandidateInfo = () => {

  // const legislator = useSelector((state) => state.legislator)

  const legislator = dummyData

  return (legislator !== undefined) ?
   (
    <Box display="flex" direction="row">
       <img
          src={`https://cdn1.opensecrets.org/congress-members/photos/${legislator.crp_id}.jpg`}
          // src={`https://theunitedstates.io/images/congress/225x275/${legislator.id}.jpg`}
          style={{"height": "225px", "width": "225px", "objectFit": "cover", "borderRadius": "100%", "borderWidth": "1px"}}
        />
      <Grid>
        <Typography>{legislator.name}</Typography>
        <Typography>Party: {legislator.party}</Typography>
        <Typography>State: {legislator.state}</Typography>
        <Typography>District: {legislator.district}</Typography>
        <Typography>Email: {legislator.email}</Typography>
        <Typography>Phone: {legislator.phone}</Typography>
      </Grid>
    </Box>
  ): (<Typography>To see information about your legislator, please make a selection.</Typography>)
};
