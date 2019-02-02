import React, { Component } from 'react';
import Header from './components/Layouts/Header';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import './App.css';

class App extends Component {

  state = {
      todos: [
      {
        id: 1,
        title: 'Clean the room',
        completed: false
      },

      {
        id: 2,
        title: 'Read 10 pages from my fav column',
        completed: true
      },
      {
        id: 3,
        title: 'Watch 2hrs of VR content',
        completed: false
      },
      {
        id: 4,
        title: 'Take a walk to flex muscles',
        completed: false
      }
    ]
  }

  markComplete = (id) =>{
    this.setState({todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          this.completed = !todo.completed;
        }

        return todo;
    })});
  } 


  delTodo = (id) => {
    this.setState({todos: [...this.state.todos.filter(todo => todo.id !== id)]})
  }

  addTodo = (title) =>{
    const newTodo = {
      id: 7,
      title: title,
      completed: false
    }

    this.setState({ todos: [...this.state.todos, newTodo]});
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <Header />
          <AddTodo addTodo = {this.addTodo}/>
          <Todos 
          todos={this.state.todos} markComplete={this.markComplete} delTodo = {this.delTodo}/>
        </div>      
      </div>
    );
  }
}

export default App;
