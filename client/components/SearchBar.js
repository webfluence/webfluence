import React, { useEffect, useState } from "react";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { TextField, Button } from "@material-ui/core";

import { useSelector, useDispatch } from "react-redux";
import { getLegislatorsThunk } from "../store/legislators";

export default function SearchBar() {
  const [selectedLegislator, setSelectedLegislator] = useState({});
  const dispatch = useDispatch();

  const legislators = useSelector((state = []) => state.legislators);

  useEffect(() => {
    dispatch(getLegislatorsThunk());
  }, []);

  // const handleChange = (e) => {
  //   setSearchValue(e.target.value);
  // };

  const handleSelect = (legislator) => {
    console.log("This is the legislator you selected>>>",legislator)
    setSelectedLegislator(legislator);
  };

  return (
    <div>
      <Autocomplete
        id="combo-box-demo"
        options={legislators}
        onChange={(event, value)=>handleSelect(value)}
        getOptionLabel={(option) =>
          `${option.short_title} ${option.first_name} ${option.last_name} (${option.party}), ${option.state} District ${option.district}`
        }
        style={{ width: 400 }}
        renderInput={(params) => (
          <TextField {...params} label="Search Legislator" variant="outlined" />
        )}
      />
    </div>
  );
}
