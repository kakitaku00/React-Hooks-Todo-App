import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import axios from "axios";
import { PATH } from "./config";

function Delete() {
  const [todo, changeTodo] = useState(null);
  const { key } = useParams();
  const history = useHistory();

  useEffect(() => {
    axios.get("https://mbc.to-r.net/react-todo/todo/" + key).then((res) => {
      changeTodo(res.data);
    });
  }, []);

  const handleDelete = () => {
    axios.delete("https://mbc.to-r.net/react-todo/todo/" + key).then((res) => {
      history.push("/");
    });
  };

  if (!todo) {
    return <p>Loading...</p>;
  }

  return (
    <div className="form">
      <p>「{todo.title}」削除して良いですか？</p>
      <input type="button" value="削除" onClick={handleDelete} />
    </div>
  );
}

export default Delete;
