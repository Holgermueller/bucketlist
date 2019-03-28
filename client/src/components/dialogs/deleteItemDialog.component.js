import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";

const deleteButton = {
  backgroundColor: "purple",
  color: "white"
}

function Transition(props) {
  return <Slide direction="right" {...props} />;
}

class DeleteAlertDialog extends React.Component {
  state = {
    open: false
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    return (
      <div>
        <Button
        style={deleteButton}
        variant="contained"
        onClick={this.handleClickOpen}
      >
        DELETE
      </Button>
        <Dialog
          open={this.state.open}
          TransitionComponent={Transition}
          keepMounted
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-slide-title"
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle id="alert-slide-title">
            {"Delete this item?"}
          </DialogTitle>

          <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">
              Are you sure you want to delete this item?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              NO!
            </Button>
            <Button onClick={this.handleClose} color="primary">YES!!!</Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default DeleteAlertDialog;
