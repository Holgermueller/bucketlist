import React from "react";
import Button from "@material-ui/core/Button";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  button: {
    margin: theme.spacing.unit
  }
});

function SubmitButton(props) {
  const { classes } = props;
  return (
    <div>
      <Button
        type="submit"
        variant="contained"
        color="primary"
        className={classes.button}
      >
        SUBMIT
      </Button>
    </div>
  );
}

SubmitButton.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SubmitButton);
