import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Header from "./Header";
import List from "./List";
import Form from "./Form";
import Delete from "./Delete";

function App() {
  const [items, changeItem] = useState([
    {
      title: "Reactのインストール",
      checked: true,
    },
    {
      title: "JSXを学ぶ",
      checked: true,
    },
    {
      title: "コンポーネントの分離",
      checked: false,
    },
    {
      title: "演習",
      checked: false,
    },
  ]);

  const todo = items
    .map((item, key) => ({ ...item, key }))
    .filter((item) => !item.checked);
  const finishedTodo = items
    .map((item, key) => ({ ...item, key }))
    .filter((item) => item.checked);

  const addTodo = (title) => {
    const newItem = {
      title,
      checked: false,
    };
    changeItem([...items, newItem]);
  };

  const toggleTodo = (key) => {
    const newItems = items.map((item, _key) => {
      if (_key === key) {
        return {
          ...item,
          checked: !item.checked,
        };
      }
      return item;
    });
    changeItem(newItems);
  };

  const deleteTodo = (key) => {
    const newItems = items.filter((_, _key) => _key !== key);
    changeItem(newItems);
  };

  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/">
          <List items={todo} toggleTodo={toggleTodo} />
        </Route>
        <Route exact path="/finished">
          <List items={finishedTodo} toggleTodo={toggleTodo} />
        </Route>
        <Route exact path="/add">
          <Form addTodo={addTodo} />
        </Route>
        <Route exact path="/delete/:key">
          <Delete items={items} deleteTodo={deleteTodo} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
