import './book-list.styles.scss';

import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

function BookList({ books, isLoading }) {
  if (isLoading) {
    return <h2>Loading...</h2>
  }
  return (
    <table>
      <thead>
        <tr>
          <td>Id</td>
          <td>Title</td>
          <td>Details</td>
        </tr>
      </thead>
      <tbody>
        {
          books.map(({ id, title }) => (
            <tr key={id}>
              <td>{id}</td>
              <td>{title}</td>
              <td>
                <Link to={`/library/book-details/${id}`}>Details</Link>
              </td>
            </tr>
          ))
        }
      </tbody>
    </table>
  )
};

const mapStatetoProps = (state) => ({
  books: state.libraryReducer.books,
  isLoading: state.libraryReducer.isLoading,
});

export default connect(mapStatetoProps)(BookList);