import React, { Fragment, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import { ClipLoader } from "react-spinners";


const useStyles = makeStyles({
  table: {
    minWidth: 650,
    border: "solid 1px #828282"
  }
});

export default function ContribModal(props) {
  const imgSrcFormat = (contribName) => {
    const companyAbbrevs = ["Co", "Inc", "LLC", "Corp"];
    return contribName
      .replace("&", "and")
      .split(" ")
      .filter((word) => !companyAbbrevs.includes(word))
      .join("")
      .toLowerCase();
  };

  function createData(title, amount) {
    return { title, amount };
  }

  function formatCurrency (num){
  
    const formatted = parseInt(num).toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
    }).slice(0, -3)
    return formatted
  }
  
  function isOrgInfoArray(props) {
    let orgInfo = {};
    if(Object.keys(props.org).length > 0 && !Array.isArray(props.org.orgInfo.response.organization)){
      orgInfo = props.org.orgInfo.response.organization.attributes;
    }else if (Object.keys(props.org).length > 0 && Array.isArray(props.org.orgInfo.response.organization)){
      orgInfo = props.org.orgInfo.response.organization[0].attributes;
    }
    return orgInfo;
  }

  const rows = Object.keys(props.org).length > 0 ? [
      createData('Contributions to Democrats', formatCurrency(isOrgInfoArray(props).dems)),
      createData('Contributions to Republicans', formatCurrency(isOrgInfoArray(props).repubs)),
      createData('Contributions to Candidates', formatCurrency(isOrgInfoArray(props).gave_to_cand)),
      createData('Contributions to Party', formatCurrency(isOrgInfoArray(props).gave_to_party)),
      createData('Contributions to PACS', formatCurrency(isOrgInfoArray(props).gave_to_pac)),
      createData('Contributions from individuals', formatCurrency(isOrgInfoArray(props).indivs)),
      createData('Contributions from lobbying', formatCurrency(isOrgInfoArray(props).lobbying)),
      createData('Contributions from PACS', formatCurrency(isOrgInfoArray(props).pacs)),
      createData('Soft money', formatCurrency(isOrgInfoArray(props).soft)),
      createData('Total contributions', formatCurrency(isOrgInfoArray(props).total))
    ] : [];

  const classes = useStyles()

  Object.keys(props.org).length > 0 && console.log("props", props.org.orgInfo.response.organization.attributes);

  return (
    <Fragment>
        
      <Grid style={{ display: "flex", justifyContent: "space-between", zIndex: "2", overflow: "hidden";}}>
        <Grid style={{display: "flex"}}>
        <Avatar
          variant="square"
          style={{ height: "150px", width: "150px", marginRight: "20px", marginBottom: "40px" }}
          src={`//logo.clearbit.com/${imgSrcFormat(props.selectedContrib)}.com`}
        />
        <h1>{props.selectedContrib}</h1>
        </Grid>
      </Grid>
      {Object.keys(props.org).length > 0 ?
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.title}>
                  <TableCell component="th" scope="row" className={classes.tableCell}>
                  {row.title}
                </TableCell>
                <TableCell component="th" scope="row" className={classes.tableCell}>
                  {row.amount}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer> : <Grid style={{ width: "100%", height: "60%", display: "flex", alignItems: "center", justifyContent: "center" }}> <ClipLoader color={"darkgray"} loading={true} size={200} /> </Grid>}
    </Fragment>
  );
}
