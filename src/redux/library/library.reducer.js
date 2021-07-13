import LibraryActionTypes from "./library.types";

const INITIAL_STATE = {
  books: []
}

const libraryReducer = (currentState = INITIAL_STATE, action) => {
  switch (action.type) {
    case LibraryActionTypes.SET_BOOKS:
      return {
        ...currentState,
        books: action.payload,
      }
    case LibraryActionTypes.SET_BOOK:
      const updatedBook = action.payload;
      return {
        ...currentState,
        books: currentState.books.map(book => book.id === updatedBook.id ? updatedBook : book)
      }
    default:
      return currentState
  }
}

export default libraryReducer;