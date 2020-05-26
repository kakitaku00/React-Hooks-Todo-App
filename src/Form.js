import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { PATH } from "./config";

function Form() {
  const [myText, changeMyText] = useState("");
  const history = useHistory();

  const handleSave = () => {
    if (!myText) return;
    axios
      .post("https://mbc.to-r.net/react-todo/todos", {
        title: myText,
        checked: false,
      })
      .then(() => {
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
      />
      <input type="button" value="追加" onClick={handleSave} />
    </div>
  );
}
export default Form;
