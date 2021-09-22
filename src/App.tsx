import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./components/Home";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
       <Route exact path="/" render={(routerProps) => <Home {...routerProps}/>}/>
      </div>
    </BrowserRouter>
  );
}

export default App;
