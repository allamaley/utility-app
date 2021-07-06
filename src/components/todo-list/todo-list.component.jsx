import './todo-list.styles.scss';
import React from 'react';
import TodoItem from '../todo/todo-item.component';

function TodoList({ todos, handleChange }) {
  console.log('todo list renders:')
  // todo fix: unessecary to rerender when checkbox is clicked! 


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

export default React.memo(TodoList); //returns a memoized version of the functional component TodoList. It is an optimal component where for passed arguments for the same set will return the saved image of this component (carets a chached versions for different props values)