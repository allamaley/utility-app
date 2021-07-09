import './book-list.styles.scss';

import { connect } from 'react-redux';

function BookList({ books }) {
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
              <td><a href="#">Details</a></td>
            </tr>
          ))
        }
      </tbody>
    </table>
  )
};

const mapStatetoProps = (state) => ({
  books: state.libraryReducer.books,
});

export default connect(mapStatetoProps)(BookList);