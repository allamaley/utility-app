import './todo-list.styles.scss';
import TodoItem from '../todo/todo-item.component'

function TodoList({ todos, handleChange }) {
  return (
    <div className="todo-list">
      {
        todos.length ? todos.map(todo =>
          <TodoItem
            todo={todo}
            key={todo.id}
            handleChange={(({ target: { checked } }) =>
              handleChange(todo, checked)
            )} />
        ) :
          (<p>No todos added here</p>)
      }
    </div>
  )
}

export default TodoList;