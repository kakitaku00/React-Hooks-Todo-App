import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import useTodo from "./useTodo";

function Edit() {
  const { todo, isEditing, fetchTodo, editTodo } = useTodo();

  const [myText, changeMyText] = useState("");
  const history = useHistory();
  const { key } = useParams();

  useEffect(() => {
    if (!todo) return;
    changeMyText(todo.title);
  }, [todo]);

  useEffect(() => {
    fetchTodo(key);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSave = async () => {
    if (!myText) return;
    await editTodo(key, myText);
    history.push("/");
  };

  if (!todo) {
    return <p>Loading...</p>;
  }

  return (
    <div className="form">
      <label htmlFor="text">編集:</label>
      <input
        type="text"
        value={myText}
        onChange={(e) => changeMyText(e.currentTarget.value)}
      />
      <input
        type="button"
        value="編集"
        onClick={handleSave}
        disabled={isEditing}
      />
    </div>
  );
}

export default Edit;
