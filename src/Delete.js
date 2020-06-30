import React, { useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import useTodo from "./useTodo";

function Delete() {
  const { todo, isDeleting, fetchTodo, deleteTodo } = useTodo();

  const history = useHistory();
  const { key } = useParams();

  useEffect(() => {
    fetchTodo(key);
  }, []);

  const handleDelete = async () => {
    await deleteTodo(key);
    history.push("/");
  };

  if (!todo) {
    return <p>Loading...</p>;
  }

  return (
    <div className="form">
      <p>「{todo.title}」削除して良いですか？</p>
      <input
        type="button"
        value="削除"
        onClick={handleDelete}
        disabled={isDeleting}
      />
    </div>
  );
}

export default Delete;
