import React from "react";
import { useHistory, useParams } from "react-router-dom";

function Delete({ items, deleteTodo }) {
  const { key } = useParams();
  const history = useHistory();

  const deletedTodo = items.find((_, _key) => _key === Number(key)).title;

  const handleDelete = () => {
    deleteTodo(Number(key));
    history.push("/");
  };

  return (
    <div className="form">
      <p>
        「{deletedTodo}」{key}削除して良いですか？
      </p>
      <input type="button" value="削除" onClick={handleDelete} />
    </div>
  );
}

export default Delete;
