import React, { Component } from 'react';

import { Container } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

import { Router, Route, Link } from 'react-router-dom';
import { Provider } from 'react-redux';

import ListView from './components/ListView';
import EditView from './components/EditView';
import { NewRecord } from './components/NewRecord';
import store, { history } from './redux';


class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <Router history={history}>
        <main>
        <nav className="navbar navbar-dark bg-dark">
          <Container>
            <Link to="/" className="navbar-brand">Leaderboard</Link>
            <Link to="/new">New record</Link>
          </Container>
        </nav>
        <Container>
        <div className="card main">
          <Route exact path="/" component={ListView} />
          <Route path="/edit/:id" component={EditView} />
          <Route path="/new" component={NewRecord} />
        </div>
        </Container>
      </main>
      </Router>
      </Provider>
    );
  }
}

export default App;
