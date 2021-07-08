const INITIAL_STATE = {
  todos: []
}

// action: type and payload
const todosReducer = (currentState = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...currentState,
        todos: currentState.todos.concat([{
          id: currentState.todos.length + 1,
          title: action.payload,
          createDate: new Date(),
        }])
      }
    case 'REMOVE_TODOS':
      const todosToRemove = action.payload;
      return {
        ...currentState,
        todos: currentState.todos.filter(item => todosToRemove.indexOf(item) === -1)
      }
    default: return currentState;
  }
}

export default todosReducer;