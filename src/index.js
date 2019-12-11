import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // must put these in to use bootstrap
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';
import Twitter1 from './components/Twitter1'; 
import Twitter2 from './components/Twitter2'; 


ReactDOM.render(
  <Router>
    <Navbar className="bg-warning">
      <Link className="p-3" to="/">Twitter1</Link>
      <Link className="p-3" to="/twitter2">Twitter2</Link>
    </Navbar>
    <Switch>
        <Route exact path="/" component={Twitter1} />
        <Route path="/twitter2" component={Twitter2} />
    </Switch>
  </Router>,
  document.getElementById('root')
);
