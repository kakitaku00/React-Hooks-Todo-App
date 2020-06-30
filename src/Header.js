import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <h1 className="header">TODO APP</h1>
      <p>
        <Link to="/">一覧</Link> | <Link to="finished">終了済み</Link> |{" "}
        <Link to="add">追加</Link>
      </p>
    </>
  );
}
export default Header;
