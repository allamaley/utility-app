import './book-details.styles.scss';
import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router';
import axios from 'axios';

import { setBook } from '../../../redux/library/library.actions';

// function BookDetails({ match: { params: { bookId } }, book, dispatch }) {
function BookDetails({ book, dispatch }) {
  const { bookId } = useParams();

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchBook = async () => {
      setIsLoading(true);
      const resp = await axios.get(`http://localhost:3003/books/${bookId}`);
      const { data: book } = resp;
      dispatch(setBook(book));
      setIsLoading(false);
    }

    fetchBook();
  }, [bookId, dispatch]);

  return (
    <div>
      <h1>{book.title}</h1>
      <p>Id: {book.id}</p>
      <p>Price: {isLoading && !book.price ? <span>Fetching price...</span> : <i>{book.price}</i>}</p>
      <p>Pages: {isLoading && !book.pages ? <span>Fetching amount...</span> : <i>{book.pages}</i>}</p>
    </div>
  )

};

const mapStateToProps = (state, ownProps) => ({ //ownProps is not coming from redux, it is own to this component
  book: state.libraryReducer.books.find(({ id }) => id === ownProps.match.params.bookId)
})

export default connect(mapStateToProps)(BookDetails);