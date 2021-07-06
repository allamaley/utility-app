import TodoList from '../components/todo-list/todo-list.component'
import TodoForm from '../components/todo-form/todo-form.component'
import { Component } from 'react'
class Tasklist extends Component {

  constructor() {
    super();
    this.state = {
      todos: [],
      checkedTodos: [],
    }
  }

  onNewTodo = (newTodo) => {
    const id = this.state.todos.length + 1;

    //wrong:
    //only if state is not dependent on any previous state
    // this.setState(
    //   {
    //     todos: this.state.todos.concat([{ id: id, title: newTodo, createdDate: new Date() }])
    //   }
    // )


    //setState() is async, it is batched
    //if state is dependent on previous state
    this.setState((prevState, prevProps) => {
      return {
        todos: prevState.todos.concat([{ id: id, title: newTodo, createdDate: new Date() }])
      }
    });


  }

  handleChange = (todo, checked) => {
    if (checked) {
      this.setState((prevState) => {
        return {
          checkedTodos: prevState.checkedTodos.concat([todo])
        }
      }) //render() is triggered 
    } else {
      this.setState((prevState) => {
        return {
          checkedTodos: prevState.checkedTodos.filter(existingTodo => existingTodo !== todo)
        }
      })
    }
  }

  removeTodos = () => {
    this.setState((prevState) => {
      return {
        todos: prevState.todos.filter(item => this.state.checkedTodos.indexOf(item) === -1),
        checkedTodos: []
      }
    })
  }

  render() {
    return (
      <div>
        <TodoForm onNewTodo={this.onNewTodo} />
        <TodoList todos={this.state.todos} handleChange={this.handleChange} />
        <button disabled={!this.state.checkedTodos.length} onClick={this.removeTodos}>Clear completed todos</button>({this.state.checkedTodos.length})
      </div>
    )
  }

}
export default Tasklist;