import { Typography, Grid, CardMedia, Box } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Avatar from "@material-ui/core/Avatar";
import { useBreakpoints } from "./hooks/useBreakpoints";

export const CandidateInfo = () => {
  const legislator = useSelector((state) => state.legislator);
  const name = legislator.name.official_full;
  const party = legislator.terms[legislator.terms.length - 1].party[0];
  const repOrSen =
    legislator.terms[legislator.terms.length - 1].type === "rep"
      ? "Representative"
      : "Senator";
  const state = legislator.terms[legislator.terms.length - 1].state;
  const contact = legislator.terms[legislator.terms.length - 1].contact_form;
  const leadershipPosition = legislator.leadership_roles
    ? legislator.leadership_roles[legislator.leadership_roles.length - 1].title
    : "";
  const firstElection = legislator.terms[0].start.slice(0, 4);
  const nextElection =
    parseInt(legislator.terms[legislator.terms.length - 1].end.slice(0, 4)) - 1;
  const district = legislator.terms[legislator.terms.length - 1].district;
  const phone =
    "(" +
    legislator.terms[legislator.terms.length - 1].phone.slice(0, 3) +
    ") " +
    legislator.terms[legislator.terms.length - 1].phone.slice(4);
  const url = legislator.terms[legislator.terms.length - 1].url;
  const breakpoint = useBreakpoints();

  return legislator && Object.keys(legislator).length ? (
    <Box
      display="flex"
      direction="row"
      padding={breakpoint.isTabletFloor ? "5px" : "40px"}
      width="100%"
    >
      {!breakpoint.isTabletFloor && (
        <Avatar
          src={`https://cdn1.opensecrets.org/congress-members/photos/${legislator.id.opensecrets}.jpg`}
          // src={`https://theunitedstates.io/images/congress/225x275/${legislator.id}.jpg`}
          style={{ height: "225px", width: "225px", marginRight: "50px" }}
        />
      )}
      <Grid
        style={{
          display: "flex",
          direction: "row",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <Grid>
          <Typography
            style={
              breakpoint.isTabletFloor
                ? { fontSize: "18px", marginBottom: "5px" }
                : { fontSize: "36px", marginBottom: "20px" }
            }
          >
            {name}
          </Typography>
          <Typography
            style={
              breakpoint.isTabletFloor
                ? { fontSize: "16px" }
                : { fontSize: "20px" }
            }
          >
            {repOrSen} ({party} - {state})
          </Typography>
          <Typography style={{ fontStyle: "italic", fontSize: "20px" }}>
            {leadershipPosition}
          </Typography>
          {district && (
            <Typography
              style={
                breakpoint.isTabletFloor
                  ? { fontSize: "16px" }
                  : { fontSize: "20px" }
              }
            >
              District {district}
            </Typography>
          )}
          {/* <Typography>contact: <Link to={contact} > contact form </Link></Typography> */}
          <Typography
            style={
              breakpoint.isTabletFloor
                ? { fontSize: "16px" }
                : { fontSize: "20px" }
            }
          >
            office phone #: {phone}
          </Typography>
          <Typography
            style={
              breakpoint.isTabletFloor
                ? { fontSize: "16px" }
                : { fontSize: "20px" }
            }
          >
            {"Website:  "}
            <a target="_blank" href={url}>
              {url}
            </a>
          </Typography>
        </Grid>
        {!breakpoint.isTabletFloor && (
          <Typography style={{ fontSize: "20px" }}>
            first elected: {firstElection} <br /> next election: {nextElection}{" "}
          </Typography>
        )}
      </Grid>
    </Box>
  ) : (
    <Typography>
      To see information about your legislator, please make a selection.
    </Typography>
  );
};
