import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import mainPage from "./components/main_page/main_page";
import NavbarComponent from "./components/navbar/navbar";

import "./App.css";

function App() {
  return (
    <>
      <NavbarComponent />
      <Router basename="/Videoteka-App">
        <Switch>
          <Route exact path="/" component={mainPage} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
