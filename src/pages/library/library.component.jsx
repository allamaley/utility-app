import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import "./library.styles.scss";

import BookList from "./book-list/book-list.component";
import BookDetails from "./book-details/book-details.component";
import Modal from "../../components/modal/modal.component";
import BookForm from "../../components/book-form/book-form.component";
import {
  fetchBooksAsync,
  openModal,
  closeModal,
} from "../../redux/library/library.actions";

function Library({
  match,
  isBooksLoaded,
  modalClosed,
  dispatch /*, onSetBooks */,
}) {
  useEffect(() => {
    dispatch(fetchBooksAsync());
  }, [dispatch]);

  const [isClosed, setIsClosed] = useState(true);

  // isclosed true
  // if isclosed == false check finishedposting
  // if finishedposting == true -> close the modal
  //if finishedposting == false

  const handleModalState = () => {
    setIsClosed(false);
    dispatch(openModal());
  };

  return (
    <div>
      <h2>Library page</h2>
      <div className="add-book-container">
        <button onClick={handleModalState}>Add book</button>
        <Modal isClosed={modalClosed} onClose={() => dispatch(closeModal())}>
          <BookForm />
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
  modalClosed: state.libraryReducer.modalClosed,
});

export default connect(mapStateToProps)(Library);
