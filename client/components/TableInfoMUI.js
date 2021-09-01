import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: "absolute",
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
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
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

export default function TableInfoMUI(props) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button  onClick={handleClickOpen}>
        {props.text}
      </Button>
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          {props.text}
        </DialogTitle>
        {props.text === "Contributor" && (
          <DialogContent dividers>
            <Typography variant="h6">What is a Contributor?</Typography>
            <Typography gutterBottom>
              {" "}
              A contributor may be an individual, a corporation, limited
              liability company (LLC/PLLC), another candidate's political
              committee, an unincorporated union or trade organization, a PAC or
              any other entity such as a league or association, etc.
            </Typography>
          </DialogContent>
        )}
        {props.text === "Individuals" && (
          <DialogContent dividers>
            <Typography gutterBottom>
              Individuals are required to put their place of work when making a
              contribution to a certain campain. This column displays the total
              donations by individuals in each company.
            </Typography>
          </DialogContent>
        )}
        {props.text === "PACs" && (
          <DialogContent dividers>
            <Typography variant="h6">What is a PAC?</Typography>
            <Typography gutterBottom>
              A popular term for a political committee organized for the purpose
              of raising and spending money to elect and defeat candidates. Most
              PACs represent business, labor or ideological interests. PACs can
              give $5,000 to a candidate committee per election (primary,
              general or special). They can also give up to $15,000 annually to
              any national party committee, and $5,000 annually to any other
              PAC. PACs may receive up to $5,000 from any one individual, PAC or
              party committee per calendar year. A PAC must register with the
              FEC within 10 days of its formation, providing name and address
              for the PAC, its treasurer and any connected organizations.
              Affiliated PACs are treated as one donor for the purpose of
              contribution limits.
            </Typography>
            <Typography gutterBottom>
              This column displays the total contributions made to the
              politician by the actual company
            </Typography>
          </DialogContent>
        )}
        {props.text === "Total" && (
          <DialogContent dividers>
            <Typography gutterBottom>
              Total amount of money given from individuals and Pacs
            </Typography>
          </DialogContent>
        )}
      </Dialog>
    </div>
  );
}
