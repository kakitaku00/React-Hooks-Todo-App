import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import axios from "axios";
import { PATH } from "./config";

function Edit() {
  const { key } = useParams();
  const history = useHistory();

  const [todo, changeTodo] = useState(null);

  useEffect(() => {
    axios.get("https://mbc.to-r.net/react-todo/todo/" + key).then((res) => {
      changeTodo(res.data);
    });
  }, []);

  const handleSave = () => {
    if (!todo.title) return;
    axios
      .put("https://mbc.to-r.net/react-todo/todo/" + key, todo)
      .then((res) => {
        history.push("/");
      });
  };

  if (!todo) {
    return <p>Loading...</p>;
  }

  return (
    <div className="form">
      <label htmlFor="text">編集:</label>
      <input
        type="text"
        value={todo.title}
        onChange={(e) =>
          changeTodo({
            ...todo,
            title: e.currentTarget.value,
          })
        }
      />
      <input type="button" value="編集" onClick={handleSave} />
    </div>
  );
}

export default Edit;
