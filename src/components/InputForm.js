import React, { Component } from 'react';
// material-ui components
import { Grid, Paper, Input, withStyles } from '@material-ui/core';

const styles = theme => ({
  root: {
    flexGrow: 1,
    marginTop: 20
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary
  }
});

const InputForm = props => {
  const { classes, handleChange, handleKeyDown, inputValue } = props;

  return (
    <div className={classes.root}>
      <Grid container justify="center">
        <Grid item xs={10}>
          <Paper className={classes.paper}>
            <Input
              value={inputValue}
              placeholder="Enter the task"
              inputProps={{
                'aria-label': 'Description'
              }}
              fullWidth={true}
              onChange={handleChange}
              onKeyDown={handleKeyDown}
            />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default withStyles(styles)(InputForm);
