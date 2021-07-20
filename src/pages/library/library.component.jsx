import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import "./library.styles.scss";

import BookList from "./book-list/book-list.component";
import BookDetails from "./book-details/book-details.component";
import Modal from "../../components/modal/modal.component";
import BookForm from "../../components/book-form/book-form.component";
import { fetchBooksAsync } from "../../redux/library/library.actions";

function Library({ match, isBooksLoaded, dispatch /*, onSetBooks */ }) {
  useEffect(() => {
    dispatch(fetchBooksAsync());
  }, [dispatch]);

  const [isClosed, setIsClosed] = useState(true);

  return (
    <div>
      <h2>Library page</h2>
      <div className="add-book-container">
        <button onClick={() => setIsClosed(false)}>Add book</button>
        <Modal isClosed={isClosed} onClose={() => setIsClosed(true)}>
          <BookForm/>
        </Modal>
      </div>
      <Route exact path={match.path}>
        <Redirect to={`${match.path}/book-list`} />
      </Route>
      {!isBooksLoaded ? (
        <h2>Loading... Please waitttt</h2>
      ) : (
        <>
          <Route path={`${match.path}/book-list`} component={BookList} />
          <Route
            path={`${match.path}/book-details/:bookId`}
            component={BookDetails}
          />
        </>
      )}
    </div>
  );
}

/* const mapDispatchToProps = dispatch => ({
  onSetBooks: books => dispatch(setBooks(books))
}) */

const mapStateToProps = (state) => ({
  isBooksLoaded: state.libraryReducer.isBooksLoaded,
});

export default connect(mapStateToProps)(Library);
