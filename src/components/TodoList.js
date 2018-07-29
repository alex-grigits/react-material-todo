import React from 'react';
import PropTypes from 'prop-types';
// material-ui components
import { Grid, Paper } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
// custom components
import TaskItem from './TaskItem';

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

class TodoList extends React.Component {
  render() {
    const { classes, todos, handleCheck, handleDeleteTask } = this.props;

    return (
      <div className={classes.root}>
        <Grid container justify="center">
          <Grid item xs={10}>
            <Paper className={classes.paper}>
              <List>
                {todos.map((task, index) => (
                  <TaskItem
                    key={index}
                    id={index}
                    task={task}
                    handleCheck={handleCheck}
                    handleDeleteTask={handleDeleteTask}
                  />
                ))}
              </List>
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}

TodoList.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(TodoList);
