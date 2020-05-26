import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { PATH } from "./config";

function List({ finished }) {
  const [todoList, changeTodoList] = useState([]);

  useEffect(() => {
    axios.get("https://mbc.to-r.net/react-todo/todos").then((res) => {
      console.log(res.data);
      changeTodoList(res.data);
    });
  }, []);

  const toggleTodo = (todo) => {
    const newTodo = {
      ...todo,
      checked: !todo.checked,
    };
    axios
      .put("https://mbc.to-r.net/react-todo/todo/" + todo.id, newTodo)
      .then(() => {
        const newTodoList = todoList.map((_todo) =>
          _todo.id === todo.id ? newTodo : _todo
        );
        changeTodoList(newTodoList);
      });
  };

  return (
    <ul className="list">
      {todoList
        .filter((todo) => todo.checked === finished)
        .map((todo) => (
          <li key={todo.id}>
            <p>{todo.title}</p>
            <button type="button" onClick={() => toggleTodo(todo)}>
              {todo.checked ? "再開" : "終了"}
            </button>
            <Link to={`delete/${todo.id}`}>削除</Link>
            <Link to={`edit/${todo.id}`}>編集</Link>
          </li>
        ))}
    </ul>
  );
}
export default List;
