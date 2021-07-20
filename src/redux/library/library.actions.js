import LibraryActionTypes from "./library.types"
import axios from "axios";

export const startBooksFetch = () => ({
  type: LibraryActionTypes.START_BOOKS_FETCH,
  payload: null,
});

export const startBookFetch = () => ({
  type: LibraryActionTypes.START_BOOK_FETCH,
  payload: null,
});

export const setBooks = (books) => ({
  type: LibraryActionTypes.SET_BOOKS,
  payload: books,
});

export const setBook = (book) => ({
  type: LibraryActionTypes.SET_BOOK,
  payload: book,
});

export const endBooksFetch = () => ({
  type: LibraryActionTypes.END_BOOKS_FETCH,
  payload: null,
});

export const endBookFetch = () => ({
  type: LibraryActionTypes.END_BOOK_FETCH,
  payload: null,
});

export const fetchBooksAsync = () => {
  return async (dispatch) => {
    dispatch(startBooksFetch());

    const response = await axios.get('http://localhost:3003/books');
    const { data } = response;

    dispatch(setBooks(data));

    dispatch(endBooksFetch());
  }
}

export const fetchBookAsync = (bookId) => {
  return async (dispatch) => {
    dispatch(startBookFetch());
    const response = await axios.get(`http://localhost:3003/books/${bookId}`);
    const { data: book } = response;
    dispatch(setBook(book));
    dispatch(endBookFetch());
  }
}