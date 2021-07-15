import LibraryActionTypes from "./library.types";

const INITIAL_STATE = {
  books: [],
  isLoading: false, // for the books
  isBookLoading: false, //for a single book
};

const libraryReducer = (currentState = INITIAL_STATE, action) => {
  switch (action.type) {
    case LibraryActionTypes.START_FETCH:
      return {
        ...currentState,
        isLoading: true,
      };
    case LibraryActionTypes.START_FETCH_BOOK:
      return {
        ...currentState,
        isBookLoading: true,
      };
    case LibraryActionTypes.SET_BOOKS:
      return {
        ...currentState,
        books: action.payload,
      };
    case LibraryActionTypes.SET_BOOK:
      const updatedBook = action.payload;
      return {
        ...currentState,
        books: currentState.books.map((book) =>
          book.id === updatedBook.id ? updatedBook : book
        ),
      };
    case LibraryActionTypes.END_FETCH:
      return {
        ...currentState,
        isLoading: false,
      };
    case LibraryActionTypes.END_FETCH_BOOK:
      return {
        ...currentState,
        isBookLoading: false,
      };
    default:
      return currentState;
  }
};

export default libraryReducer;
