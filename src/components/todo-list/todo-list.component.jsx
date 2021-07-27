import "./todo-list.styles.scss";
import React, {useContext} from "react";
// import { connect } from "react-redux";
import TodoItem from "../todo/todo-item.component";
import TodosContext from "../../contexts/todos.context";


function TodoList({ handleChange }) {
  const todos = useContext(TodosContext);
  return (
    <div className="todo-list">
      {
        todos.length ? (
          todos.map((todo) => (
            <TodoItem
              todo={todo}
              key={todo.id}
              handleChange={({ target: { checked } }) =>
                handleChange(todo, checked)
              }
            />
          ))
        ) : (
          <p>No todos added here</p>
        )
      }
    </div>
  );
}

/*function TodoList({ todos, handleChange }) {
  console.log("todo list renders:");
  return (
    <div className="todo-list">
      <TodosContext.Consumer>
        {(todos) =>
          todos.length ? (
            todos.map((todo) => (
              <TodoItem
                todo={todo}
                key={todo.id}
                handleChange={({ target: { checked } }) =>
                  handleChange(todo, checked)
                }
              />
            ))
          ) : (
            <p>No todos added here</p>
          )
        }
      </TodosContext.Consumer>
    </div>
  );
}*/

//a callback function that connect needs
//it should map redux state to props of the current component
// const mapStateToProps = (state) => ({
//   todos: state.todosReducer.todos
// })

// export default connect(mapStateToProps)(React.memo(TodoList)); //returns a memoized version of the functional component TodoList. It is an optimal component where for passed arguments for the same set will return the saved image of this component (carets a chached versions for different props values)
export default React.memo(TodoList); //returns a memoized version of the functional component TodoList. It is an optimal component where for passed arguments for the same set will return the saved image of this component (carets a chached versions for different props values)
