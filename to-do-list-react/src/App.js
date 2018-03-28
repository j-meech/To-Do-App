import React, { Component } from 'react';
import ToDoList from './components/ToDoList';

class App extends Component {
  render() {
    return (
      <div>
        <h1>To Do</h1>
        <ToDoList/>
      </div>
    );
  }
}

export default App;