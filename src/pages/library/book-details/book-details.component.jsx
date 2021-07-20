import "./book-details.styles.scss";

import { useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router";

import { fetchBookAsync } from "../../../redux/library/library.actions";

function BookDetails({ book, dispatch, isLoading }) {
  const { bookId } = useParams();

  useEffect(() => {
    dispatch(fetchBookAsync(bookId));
  }, [bookId, dispatch]);

  return (
    <div>
      <h1>{book.title}</h1>
      <p>Id: {book.id}</p>
      <p>
        Price:{" "}
        {isLoading && !book.price ? (
          <span>Fetching...</span>
        ) : (
          <i>{book.price}</i>
        )}
      </p>
      <p>
        Pages:{" "}
        {isLoading && !book.pages ? (
          <span>Fetching...</span>
        ) : (
          <i>{book.pages}</i>
        )}
      </p>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => ({
  book: state.libraryReducer.books.find(
    ({ id }) => id === ownProps.match.params.bookId
  ),
  isLoading: state.libraryReducer.isLoading,
});

export default connect(mapStateToProps)(BookDetails);
