import { Route, Redirect } from "react-router-dom";
import { useEffect } from "react";
import { connect } from "react-redux";
import "./library.styles.scss";

import BookList from "./book-list/book-list.component";
import BookDetails from "./book-details/book-details.component";
import { fetchBooksAsync } from "../../redux/library/library.actions";

function Library({ match, isLoading, books, dispatch /*, onSetBooks*/ }) {
  useEffect(() => {
    dispatch(fetchBooksAsync());
  }, [dispatch]); //dep array to prevent lint error (symathic)

  return (
    <div>
      <Route exact path={match.path}>
        <Redirect to={`${match.path}/book-list`} />
      </Route>

      <Route path={`${match.path}/book-list`} component={BookList} />

      <Route
        path={`${match.path}/book-details/:bookId`}
        component={BookDetails}
      />
    </div>
  );
}

// const mapDispatchToProps = (dispatch) => ({
//   onSetBooks: books => dispatch(setBooks(books))
// });

const mapStateToProps = (state) => ({
  isLoading: state.libraryReducer.isLoading,
  books: state.libraryReducer.books,
});
// export default connect(null, mapDispatchToProps)(Library);
export default connect(mapStateToProps)(Library);
