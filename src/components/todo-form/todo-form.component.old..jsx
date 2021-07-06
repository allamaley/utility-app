import { Component } from 'react';
import './todo-form.styles.scss';

class TodoForm extends Component {

  constructor() {
    super();
    this.state = {
      newTodo: '',
      isDisabled: true,
    }
  }

  componentDidMount() {
    console.log('componentDidMount() in todo-form')
  }
  componentDidUpdate() {
    console.log('componentDidUpdate() in todo-form')
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextState.newTodo !== this.state.newTodo || nextState.isDisabled !== this.state.isDisabled;
  }

  handleChange = ({ target: { value } }) => {
    this.setState({
      newTodo: value,
      isDisabled: !value,
    })
  }

  onNewTodo = () => {
    this.props.onNewTodo(this.state.newTodo);

    this.setState({
      newTodo: '',
      isDisabled: false,
    })
  }

  render() {
    console.log('render() in todoform')
    return (
      <div className="todo-form">
        <input type="text" value={this.state.newTodo} placeholder="Enter" onChange={this.handleChange} />
        <button disabled={this.state.isDisabled} onClick={this.onNewTodo}>Save</button>
      </div>
    )
  }

}

export default TodoForm;