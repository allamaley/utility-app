import "./book-details.styles.scss";
import { useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router";

import { fetchBookAsync } from "../../../redux/library/library.actions";

// function BookDetails({ match: { params: { bookId } }, book, dispatch }) {
function BookDetails({ books, book, dispatch, isLoading, isBookLoading }) {
  const { bookId } = useParams();

  useEffect(() => {
    if (isLoading) {
      return;
    }
    dispatch(fetchBookAsync(bookId));
  }, [bookId, dispatch, isLoading]);

  if (!isLoading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
      <h1>{book.title}</h1>
      <p>Id: {book.id}</p>
      <p>
        Price:{" "}
        {isBookLoading && !book.price ? (
          <span>Fetching price...</span>
        ) : (
          <i>{book.price}</i>
        )}
      </p>
      <p>
        Pages:{" "}
        {isBookLoading && !book.pages ? (
          <span>Fetching amount...</span>
        ) : (
          <i>{book.pages}</i>
        )}
      </p>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => ({
  //ownProps is not coming from redux, it is own to this component
  books: state.libraryReducer.books,
  book: state.libraryReducer.books.find(
    ({ id }) => id === ownProps.match.params.bookId
  ),
  isLoading: state.libraryReducer.isLoading,
  isBookLoading: state.libraryReducer.isBookLoading,
});

export default connect(mapStateToProps)(BookDetails);
