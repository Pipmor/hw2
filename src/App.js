import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import PostList from "./pages/PostList";
import CreatePost from "./pages/CreatePost";
import "./App.css";

const App = () => {
  return (
      <Router>
        <div className="App">
          <Route path="/" exact component={PostList} />
          <Route path="/create" component={CreatePost} />
        </div>
      </Router>
  );
};

export default App;
