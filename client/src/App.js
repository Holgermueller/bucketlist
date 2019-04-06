import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import BucketList from "./components/bucketList.component";
import CreateItem from "./components/createItem.component";
import EditItem from "./components/editItem.component";
import CompletedItems from "./components/completedItems.components";
import Footer from "./components/footer.component";
import Navbar from "./components/Nav/navbar.components";
import "./App.css";

const appHeader = {
  textAlign: "center"
};

const subHeader = {
  textAlign: "center"
};

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App container">
          <h1 style={appHeader}>The Bucket List</h1>
          <h4 style={subHeader}>Helping you get all your affairs in order</h4>
          <br />
          <Navbar />
          <br />
          <Route path="/" exact component={BucketList} />
          <Route path="/edit/:id" component={EditItem} />
          <Route path="/completed" component={CompletedItems} />
          <Route path="/create" component={CreateItem} />
          <br />
          <hr />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
