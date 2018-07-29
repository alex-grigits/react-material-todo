import React, { Component } from 'react';
import './App.css';
// material-ui components
import Typography from '@material-ui/core/Typography';
// custom components
import InputForm from './components/InputForm';
import TodoList from './components/TodoList';

function Title() {
  const styles = {
    marginTop: 30
  };
  return (
    <Typography
      style={styles}
      className="app-title"
      align="center"
      color="primary"
      variant="display2"
    >
      ToDo List App
    </Typography>
  );
}

class App extends Component {
  state = {
    inputValue: '',
    todos: [
      {
        value: 'First test task',
        done: true
      },
      {
        value: 'Second test task',
        done: false
      }
    ]
  };

  handleChange = event => {
    this.setState({
      inputValue: event.target.value
    });
  };

  handleKeyDown = event => {
    const { inputValue, todos } = this.state;
    const newTask = { value: inputValue, done: false };

    if (event.keyCode === 13 && event.target.value !== '') {
      this.setState(
        {
          inputValue: '',
          todos: [...todos, newTask]
        },
        () => console.log(this.state)
      );
    }
  };

  handleCheck = id => {
    const todos = this.state.todos;

    todos[id].done = !todos[id].done;
    this.setState({
      todos
    });
  };

  handleDeleteTask = id => {
    const todos = this.state.todos;

    todos.splice(id, 1);
    this.setState({ todos });
  };

  render() {
    const { inputValue, todos } = this.state;

    return (
      <div className="wrapper">
        {Title()}
        <InputForm
          inputValue={inputValue}
          handleChange={this.handleChange}
          handleKeyDown={this.handleKeyDown}
        />
        {todos.length !== 0 ? (
          <TodoList
            todos={todos}
            handleCheck={this.handleCheck}
            handleDeleteTask={this.handleDeleteTask}
          />
        ) : (
          ''
        )}
      </div>
    );
  }
}

export default App;
