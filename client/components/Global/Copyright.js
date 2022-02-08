import React from "react"


export default Copyright = () => {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        {"https://webfluence.herokuapp.com "}
      </Link>
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
