import TodoList from "../components/todo-list/todo-list.component";
import TodoForm from "../components/todo-form/todo-form.component";
// import { connect } from "react-redux";
// import { removeTodos } from "../redux/todos/todos.actions";

import { useState, useContext } from "react";
import TodosContext from "../contexts/todos.context";

// function TaskList({ todos, removeCompletedTodos }) {
function TaskList({ /*removeCompletedTodos*/ }) {
  const [checkedTodos, setCheckedTodos] = useState([]);
  const existingTodos = useContext(TodosContext);
  const [todos, setTodos] = useState(existingTodos);
  // const onNewTodo = (newTodo) => {
  //   const id = todos.length + 1;

  //   setTodos(todos.concat([{ id: id, title: newTodo, createdDate: new Date() }]));
  // };

  const handleChange = (todo, checked) => {
    if (checked) {
      setCheckedTodos(checkedTodos.concat([todo]));
    } else {
      setCheckedTodos(
        checkedTodos.filter((existingTodo) => existingTodo !== todo)
      );
    }
  };

  const removeTodos = () => {
    // removeCompletedTodos(checkedTodos);
    setTodos(todos.filter(item => checkedTodos.indexOf(item) === -1));
    setCheckedTodos([]);
  };

  const onNewTodo = (newTodo) => {
    const todo = {
      id: todos.length + 1,
      title: newTodo,
      createDate: new Date(),
    };
    setTodos(todos.concat([todo])); //this causes a render
  };

  return (
    <div>
      <TodoForm onNewTodo={onNewTodo} />
      <TodosContext.Provider value={todos}>
        <TodoList handleChange={handleChange} />
      </TodosContext.Provider>
      <button disabled={!checkedTodos.length} onClick={removeTodos}>
        Clear completed todos
      </button>
      ({checkedTodos.length})
    </div>
  );
}

// const mapStateToProps = (state) => ({ // <-it is a global state from reducer
//   todos: state.todosReducer.todos
// });

// const mapDispatchToProps = (dispatch) => ({
//   removeCompletedTodos: (todosToRemove) => dispatch(removeTodos(todosToRemove)),
//   // here can be as many actions as needed
// });

// export default connect(mapStateToProps, mapDispatchToProps)(TaskList);
// export default connect(null, mapDispatchToProps)(TaskList);
export default TaskList;
