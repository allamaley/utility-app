import LibraryActionTypes from "./library.types";

const INITIAL_STATE = {
  books: [],
  isBooksLoaded: false,
  isLoading: false,
  isPostLoading: false,
  modalClosed: true,
};

const libraryReducer = (currentState = INITIAL_STATE, action) => {
  switch (action.type) {
    case LibraryActionTypes.START_BOOKS_FETCH:
      return {
        ...currentState,
        isBooksLoaded: false,
      };
    case LibraryActionTypes.START_BOOK_FETCH:
      return {
        ...currentState,
        isLoading: true,
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
    case LibraryActionTypes.END_BOOKS_FETCH:
      return {
        ...currentState,
        isBooksLoaded: true,
      };
    case LibraryActionTypes.END_BOOK_FETCH:
      return {
        ...currentState,
        isLoading: false,
      };
    case LibraryActionTypes.START_BOOK_POST:
      return {
        ...currentState,
        isPostLoading: true,
      };
    case LibraryActionTypes.NEW_BOOK:
      const { payload: newBook } = action;
      return {
        ...currentState,
        books: currentState.books.concat([newBook]),
      };
    case LibraryActionTypes.END_BOOK_POST:
      return {
        ...currentState,
        isPostLoading: false,
        modalClosed: true,
      };
    case LibraryActionTypes.OPEN_MODAL:
      return {
        ...currentState,
        modalClosed: false,
      };
    case LibraryActionTypes.CLOSE_MODAL:
      return {
        ...currentState,
        modalClosed: true,
      };
    default:
      return currentState;
  }
};

export default libraryReducer;
