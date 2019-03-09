import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import BucketList from "./components/bucketList.component";
import EditItem from "./components/createItem.component";
import CreateItem from "./components/editList.component";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App container">
          <nav className="navbar">
            <Link to="/" className="navbar-brand">
              Bucket List
            </Link>
            <div className="collapse nav-collapse">
              <ul>
                <li className="navbar-item">
                  <Link to="/" className="nav-link">
                    The List
                  </Link>
                </li>
                <li className="navbar-item">
                  <Link to="/create" className="nav-link">
                    Create Item
                  </Link>
                </li>
              </ul>
            </div>
          </nav>

          <h2>The Bucket List</h2>
          <h4>Helping you get all your affairs in order</h4>
          <br />
          <Route path="/" exact component={BucketList} />
          <Route path="/edit/:id" component={EditItem} />
          <Route path="/create" component={CreateItem} />
        </div>
      </Router>
    );
  }
}

export default App;
