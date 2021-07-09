import TodoActionTypes from "./todos.types";

export const addTodo = (newTodoTitle) => ({
  type: TodoActionTypes.ADD_TODO,
  payload: newTodoTitle,
});

export const removeTodos = (todosToRemove) => ({
  type: TodoActionTypes.REMOVE_TODOS,
  payload: todosToRemove,
});