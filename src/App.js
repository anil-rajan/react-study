import React from "react";
import Home from "./Home";
import Next from "./Next";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

//import "./App.css";
import Tablelisitng from "./pages/tables-list";
import Forminsert from "./pages/forms-insert";

import Leftpanel from "./components/leftpanel";
import Head from "./components/head";

function App() {
  return (
    <React.Fragment>
      <Router>
        <Head />
        <Leftpanel />
        <Switch>
          <Route path="/" exact component={Tablelisitng} />{" "}
          <Route path="/forms-insert" component={Forminsert} />{" "}
          <Route path="/tables-list" component={Tablelisitng} />{" "}
        </Switch>{" "}
      </Router>
    </React.Fragment>
  );
}

export default App;
