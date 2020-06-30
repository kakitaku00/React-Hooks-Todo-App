import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";

import { addTodoAction, successAddTodoAction } from "./actions";

function Form() {
  const [myText, changeMyText] = useState("");

  const isAdding = useSelector((state) => state.isAdding);
  const dispatch = useDispatch();

  const history = useHistory();

  const handleSave = () => {
    if (!myText) return;
    dispatch(addTodoAction());
    axios
      .post("https://mbc.to-r.net/react-todo/todos", {
        title: myText,
        checked: false,
      })
      .then(() => {
        dispatch(successAddTodoAction());
        history.push("/");
      });
  };

  return (
    <div className="form">
      <label htmlFor="text">追加:</label>
      <input
        type="text"
        id="text"
        value={myText}
        onChange={(e) => changeMyText(e.currentTarget.value)}
        disabled={isAdding}
      />
      <input
        type="button"
        value="追加"
        onClick={handleSave}
        disabled={isAdding}
      />
    </div>
  );
}
export default Form;
