import LibraryActionTypes from "./library.types";

export const setBooks = (books) => ({
  type: LibraryActionTypes.SET_BOOKS,
  payload: books,
});
export const setBook = (book) => ({ //returns js Object
  type: LibraryActionTypes.SET_BOOK,
  payload: book,
});