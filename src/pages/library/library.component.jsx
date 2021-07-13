import { Route, Redirect } from 'react-router-dom'
import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import './library.styles.scss';

import BookList from './book-list/book-list.component';
import BookDetails from './book-details/book-details.component';
import { setBooks } from '../../redux/library/library.actions';

function Library({ match, dispatch/*, onSetBooks*/ }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchBooks = async () => {
      setIsLoading(true);

      const response = await axios.get('http://localhost:3003/books');
      const { data } = response;
      // onSetBooks(data);
      dispatch(setBooks(data));
      setIsLoading(false);
    };

    fetchBooks();

    // }, [onSetBooks]);//dep array to prevent lint warning 
  }, [dispatch]); //dep array to prevent lint error (symathic) 

  return (
    <div>
      <h2>i am a library page</h2>
      <Route exact path={match.path}>
        <Redirect to={`${match.path}/book-list`} />
      </Route>
      {
        isLoading
          ? <h2>Loading... Please wait</h2>
          : <Route path={`${match.path}/book-list`} component={BookList} />
      }
      <Route path={`${match.path}/book-details/:bookId`} component={BookDetails} />
    </div>
  )
}

// const mapDispatchToProps = (dispatch) => ({
//   onSetBooks: books => dispatch(setBooks(books))
// });

// export default connect(null, mapDispatchToProps)(Library);
export default connect()(Library);