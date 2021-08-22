import React, { useEffect, useState } from "react";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { TextField, Button } from "@material-ui/core";

import { useSelector, useDispatch } from "react-redux";
import { getLegislatorsThunk } from "../store/legislators";
import { setLegislatorThunk } from "../store/legislator";
import { setCandContributorsThunk } from "../store/candcontrib";
import { setCandIndustriesThunk } from "../store/candindustry";

export default function SearchBar() {
  const [selectedLegislator, setSelectedLegislator] = useState({});
  const dispatch = useDispatch();

  const legislators = useSelector((state = []) => state.legislators);
  const legislator = useSelector((state = []) => state.legislator);

  useEffect(() => {
    dispatch(getLegislatorsThunk());
    // dispatch(setCandContributorsThunk("A000370"));
  }, []);

  // const handleChange = (e) => {
  //   setSearchValue(e.target.value);
  // };

  const handleSelect = (legislator) => {
    console.log("Handling select!");
    console.log(legislator);
    // Pass the legislator into the selected legislator thunk
    dispatch(setLegislatorThunk(legislator));
    const crp_id = legislator.crp_id;
    console.log(crp_id);
    // find contributors via congressional crp_id
    dispatch(setCandContributorsThunk(crp_id));
    dispatch(setCandIndustriesThunk(crp_id));
  };

  return (
    <div>
      <Autocomplete
        id="combo-box-demo"
        options={legislators}
        onChange={(event, value) => handleSelect(value)}
        // here we create the label that is rendered as the search bar options
        getOptionLabel={(option) =>
          `${option.short_title} ${option.first_name} ${option.last_name} (${
            option.party
          }), ${option.state} ${
            // renders the district if legislator is house memeber
            option.short_title === "Rep." ? "District " + option.district : ""
          }`
        }
        style={{ width: 400 }}
        renderInput={(params) => (
          <TextField {...params} label="Search Legislator" variant="outlined" />
        )}
      />
    </div>
  );
}
