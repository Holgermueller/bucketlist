import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";

const MyLink = props => <Link to="/" {...props} />;

const styles = theme => ({
  button: {
    margin: theme.spacing.unit
  }
});

function CancelButton(props) {
  const { classes } = props;
  return (
    <div>
      <Button
        component={MyLink}
        variant="contained"
        color="secondary"
        className={classes.button}
      >
        CANCEL
      </Button>
    </div>
  );
}

CancelButton.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CancelButton);
