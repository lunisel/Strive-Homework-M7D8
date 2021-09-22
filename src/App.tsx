import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Details from "./components/Details";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h1 className="main-title">Search for New Music</h1>
        <NavBar />
        <Route
          exact
          path="/"
          render={(routerProps) => <Home {...routerProps} />}
        />
        <Route
          exact
          path="/:id"
          render={(routerProps) => <Details {...routerProps} />}
        />
      </div>
    </BrowserRouter>
  );
}

export default App;
