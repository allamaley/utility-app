import axios from "axios";
import LibraryActionTypes from "./library.types";

export const startFetch = () => ({
  type: LibraryActionTypes.START_FETCH,
  payload: null,
});
export const startFetchBook = () => ({
  type: LibraryActionTypes.START_FETCH_BOOK,
  payload: null,
});

export const setBooks = (books) => ({
  type: LibraryActionTypes.SET_BOOKS,
  payload: books,
});

export const setBook = (book) => ({
  //returns a JS Object
  type: LibraryActionTypes.SET_BOOK,
  payload: book,
});

export const endFetch = () => ({
  type: LibraryActionTypes.END_FETCH,
  payload: null,
});
export const endFetchBook = () => ({
  type: LibraryActionTypes.END_FETCH_BOOK,
  payload: null,
});

export const fetchBooksAsync = () => {
  return async (dispatch) => {
    dispatch(startFetch());

    const response = await axios.get("http://localhost:3003/books");
    const { data } = response;
    dispatch(setBooks(data));

    dispatch(endFetch());
  };
};

export const fetchBookAsync = (bookId) => {
  return async (dispatch) => {
    dispatch(startFetch());
    const resp = await axios.get(`http://localhost:3003/books/${bookId}`);
    const { data: book } = resp;
    dispatch(setBook(book));
    dispatch(endFetch());
  };
};
