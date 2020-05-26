import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Header from "./Header";
import List from "./List";
import Form from "./Form";
import Delete from "./Delete";
import Edit from "./Edit";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/">
          <List finished={false} />
        </Route>
        <Route exact path="/finished">
          <List finished={true} />
        </Route>
        <Route exact path="/add">
          <Form />
        </Route>
        <Route exact path="/delete/:key">
          <Delete />
        </Route>
        <Route exact path="/edit/:key">
          <Edit />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
