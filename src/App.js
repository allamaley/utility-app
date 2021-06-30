import './App.css';

import { Route, Link } from 'react-router-dom';

import Calculator from './pages/calculator.component';
import Library from './pages/library.component';
import Tasklist from './pages/tasklist.component';

function App() {
  return (
    <div className="app">
      <h2>Welcome to my app</h2>
      <div className="menu">
        <Link to="/calc">Calculator app </Link> | <Link to="/todo">Task list app</Link> | <Link to="/library">Lib</Link>
      </div>
      <Route path="/calc" component={Calculator} />
      <Route path="/todo" component={Tasklist} />
      <Route path="/library" component={Library} />
      <footer>All rights reserved 2021</footer>
    </div>
  );
}

export default App;
