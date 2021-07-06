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
    return (
      <div className="todo-form">
        <input type="text" value={this.state.newTodo} placeholder="Enter" onChange={this.handleChange} />
        <button disabled={this.state.isDisabled} onClick={this.onNewTodo}>Save</button>
      </div>
    )
  }

}

export default TodoForm;