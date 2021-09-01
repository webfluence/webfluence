import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import  { Grid } from '@material-ui/core';
import FullscreenExitIcon from "@material-ui/icons/FullscreenExit";
import SearchIcon from "@material-ui/icons/Search";
import PanToolIcon from "@material-ui/icons/PanTool";
import FullscreenIcon from "@material-ui/icons/Fullscreen";
import CallSplitIcon from "@material-ui/icons/CallSplit";
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';


const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

export default function InfoDialogMUI() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Grid style={{position: "absolute", top: "15px", right: "15px", zIndex: "999"}}>
      <Button onClick={handleClickOpen} >
      <HelpOutlineIcon fontSize="large" onClick={handleClickOpen} />
      </Button>
      </Grid>
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open} style={{zIndex: 1000}}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          Understanding the Graph
        </DialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
            The network graph shows the relationships between federal legislators/candidates (blue or red) and the organizations who donated to their election campaigns (green). Not all orginizations donated directly to legislators/candidates, but their employees did. Some organizations are political action committees (PACs) and some are businesses/organizations which have their own PAC associated with them by the FEC.
          </Typography>

          <table>
            <thead>
            <tr>
              <th>Icon</th>
              <th>Meaning</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td><div style={{height: "25px",
          width: "25px",
          backgroundColor: "#ff3636",
          borderRadius: "50%",
          display: "inline-block",
          }}></div></td>
              <td>Republican legislator/candidate</td>
            </tr>
            <tr>
              <td><div style={{height: "25px",
          width: "25px",
          backgroundColor: "#364aff",
          borderRadius: "50%",
          display: "inline-block",
          }}></div></td>
              <td>Democratic legislator/candidate</td>
            </tr>
            <tr>
              <td><div style={{height: "25px",
          width: "25px",
          backgroundColor: "#78E983",
          borderRadius: "50%",
          display: "inline-block",
          }}></div></td>
              <td>Organization/PAC</td>
            </tr>
            <tr>
              <td><FullscreenIcon/></td>
              <td>Enable fullscreen mode.</td>
            </tr>
            <tr>
              <td><CallSplitIcon/></td>
              <td>Enable branching on node-click to explore relationships further.</td>
            </tr>
            <tr>
              <td><SearchIcon/></td>
              <td>Enable zoom via scrolling.</td>
            </tr>
            <tr>
              <td><PanToolIcon/></td>
              <td>Enable pan via click and drag.</td>
            </tr>
            </tbody>
          </table>
          {/* <Typography gutterBottom>
            <FullscreenIcon/> - Enable fullscreen mode.
          </Typography>
          <Typography>
            <CallSplitIcon/> - Enable branching on node-click to explore relationships further.
          </Typography>
          <Typography>
            <SearchIcon/> - Enable zoom via scrolling.
          </Typography>
          <Typography>
            <PanToolIcon/> - Enable pan via click and drag.
          </Typography> */}
        </DialogContent>
      </Dialog>
    </div>
  );
}
