import TodoList from '../components/todo-list/todo-list.component'
import TodoForm from '../components/todo-form/todo-form.component'

import { useState } from 'react';


function TaskList() {

  const [todos,setTodos] = useState([]);
  const [checkedTodos, setCheckedTodos] = useState([]);

  const onNewTodo = (newTodo) => {
    const id = todos.length + 1;

    setTodos(todos.concat([{ id: id, title: newTodo, createdDate: new Date() }]));
  };

  const handleChange = (todo, checked) => {
    if (checked) {
      setCheckedTodos(checkedTodos.concat([todo]));
    } else {
      setCheckedTodos(checkedTodos.filter(existingTodo => existingTodo !== todo));
    }
  };

  const removeTodos = () => {
    setTodos(todos.filter(item => checkedTodos.indexOf(item) === -1));
    setCheckedTodos([]);
  };


  return (
    <div>
      <TodoForm onNewTodo={onNewTodo} />
      <TodoList handleChange={handleChange} />
      <button disabled={!checkedTodos.length} onClick={removeTodos}>Clear completed todos</button>({checkedTodos.length})
    </div>
  )
}
export default TaskList