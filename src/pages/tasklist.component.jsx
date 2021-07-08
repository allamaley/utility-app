import TodoList from '../components/todo-list/todo-list.component'
import TodoForm from '../components/todo-form/todo-form.component'
import { connect } from 'react-redux';
import { removeTodos } from '../redux/todos/todos.actions';

import { useState } from 'react';


// function TaskList({ todos, removeCompletedTodos }) {
function TaskList({ removeCompletedTodos }) {

  // const [todos,setTodos] = useState([]);
  const [checkedTodos, setCheckedTodos] = useState([]);

  // const onNewTodo = (newTodo) => {
  //   const id = todos.length + 1;

  //   setTodos(todos.concat([{ id: id, title: newTodo, createdDate: new Date() }]));
  // };

  const handleChange = (todo, checked) => {
    if (checked) {
      setCheckedTodos(checkedTodos.concat([todo]));
    } else {
      setCheckedTodos(checkedTodos.filter(existingTodo => existingTodo !== todo));
    }
  };

  const removeTodos = () => {
    removeCompletedTodos(checkedTodos);
    // setTodos(todos.filter(item => checkedTodos.indexOf(item) === -1));
    setCheckedTodos([]);
  };


  return (
    <div>
      <TodoForm />
      <TodoList handleChange={handleChange} />
      <button disabled={!checkedTodos.length} onClick={removeTodos}>Clear completed todos</button>({checkedTodos.length})
    </div>
  )
}

// const mapStateToProps = (state) => ({ // <-it is a global state from reducer
//   todos: state.todosReducer.todos
// });

const mapDispatchToProps = (dispatch) => ({
  removeCompletedTodos: (todosToRemove) => dispatch(removeTodos(todosToRemove))
})

// export default connect(mapStateToProps, mapDispatchToProps)(TaskList);
export default connect(null, mapDispatchToProps)(TaskList);