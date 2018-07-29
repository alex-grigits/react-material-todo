import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Paper } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

const styles = theme => ({
  listItem: {
    textDecoration: 'none'
  },
  listItemDone: {
    textDecoration: 'line-through',
    color: 'gray'
  }
});

class TodoList extends React.Component {
  render() {
    const { classes, task, id, handleCheck, handleDeleteTask } = this.props;

    return (
      <ListItem
        role={undefined}
        dense
        className={task.done ? classes.listItemDone : classes.listItem}
      >
        <Checkbox
          onClick={() => handleCheck(id)}
          checked={task.done}
          tabIndex={-1}
          color="primary"
        />
        <ListItemText primary={task.value} />
        <ListItemSecondaryAction>
          <IconButton aria-label="Delete" onClick={() => handleDeleteTask(id)}>
            <DeleteIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    );
  }
}

TodoList.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(TodoList);
