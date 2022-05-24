import React from "react";
import "./App.css";
import { Home } from "./pages/Home";
import { SearchResults } from "./pages/SearchResults";
import { Detail } from "./pages/Detail";

import { Route, Link } from "wouter";

const App = () => {
  return (
    <div className="App">
      <section className="App-content">
        <Link to="/">Inicio</Link>
        <Route component={Home} path="/" />
        <Route component={SearchResults} path="/search/:keyword" />
        <Route component={Detail} path="/gif/:id" />
      </section>
    </div>
  );
};

export default App;
