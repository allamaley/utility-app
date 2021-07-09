import { Route, Redirect } from 'react-router-dom'
import './library.styles.scss';

import BookList from './book-list/book-list.component';
import BookDetails from './book-details/book-details.component';

function Library({ match }) {
  return (
    <div>
      <h2>i am a library page</h2>
      <Route exact path={match.path}>
        <Redirect to={`${match.path}/book-list`} />
      </Route>
      <Route path={`${match.path}/book-list`} component={BookList} />
      <Route path={`${match.path}/book-details`} component={BookDetails} />
    </div>
  )
}

export default Library;