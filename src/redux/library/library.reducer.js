const INITIAL_STATE = {
  books: [
    {
      id: 1,
      title: 'Book1',
    },
    {
      id: 2,
      title: 'Book2',
    },
  ]
}

const libraryReducer = (currentState = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return currentState
  }
}

export default libraryReducer;