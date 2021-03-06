import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { TextField, Button } from "@material-ui/core";

import { useSelector, useDispatch } from "react-redux";
import { getLegislatorsThunk } from "../store/legislators";
import { setLegislatorThunk } from "../store/legislator";
import { setCandContributorsThunk } from "../store/candcontrib";
import { setCandIndustriesThunk } from "../store/candindustry";
import { isLoading } from "../store/loading";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";

export default function SearchBar(props) {
  const history = useHistory();

  const classes = useStyles();
  const [selectedLegislator, setSelectedLegislator] = useState({});
  const dispatch = useDispatch();

  const legislators = useSelector((state = []) => state.legislators);
  const legislator = useSelector((state = []) => state.legislator);

  useEffect(() => {
    dispatch(getLegislatorsThunk());
  }, []);

  const handleSelect = (legislator) => {
    // Pass the legislator into the selected legislator thunk
    if (legislator) {
      dispatch(isLoading(true));
      dispatch(setLegislatorThunk(legislator));
      if (legislator) {
        const crp_id = legislator.id.opensecrets;
        // find contributors via congressional crp_id
        dispatch(setCandContributorsThunk(crp_id));
        // dispatch(setCandIndustriesThunk(crp_id));
      }

      history.push("/dashboard");
    }
  };

  return (
    <div>
      <Autocomplete
        id="search-box"
        className={clsx(classes.searchBar, "search")}
        // className="search"
        options={legislators}
        onChange={(event, value) => handleSelect(value)}
        // here we create the label that is rendered as the search bar options
        getOptionLabel={(option) => {
          const title =
            option.terms[option.terms.length - 1].type.charAt(0).toUpperCase() +
            option.terms[option.terms.length - 1].type.substring(1) +
            ".";

          return `${title} ${option.name.official_full} (${
            option.terms[option.terms.length - 1].party[0]
          }), ${option.terms[option.terms.length - 1].state} ${
            // renders the district if legislator is house memeber
            title === "Rep."
              ? "District " + option.terms[option.terms.length - 1].district
              : ""
          }`;
        }}
        style={{ width: props.width }}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Search Members of Congress"
            variant="outlined"
            style={{ zIndex: 0 }}
          />
        )}
      />
    </div>
  );
}

const useStyles = makeStyles(() => ({
  searchBar: {
    backgroundColor: "white",
    boxShadow: "rgba(0, 0, 0, 0.3) 0px 10px 20px 0px",
    zIndex: "1",
  },
}));
