import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useTodo from "./useTodo";

function List({ finished }) {
  const {
    todoList,
    isFetchTodoList,
    togglingTodo,
    fetchTodoList,
    toggleTodo,
  } = useTodo();

  const [currentPage, changeCurrentPage] = useState(1);

  useEffect(() => {
    fetchTodoList();
  }, []);

  useEffect(() => {
    renderTodoList(currentPage);
  }, [currentPage, togglingTodo]);

  const handleToggleTodo = (todo) => {
    toggleTodo(todo);
  };

  if (isFetchTodoList) {
    return <p>Loading...</p>;
  }

  const renderTodoList = (page) => {
    return (
      <div>
        <ul className="list">
          {todoList
            .filter((todo) => todo.checked === finished)
            .map((todo) => (
              <li key={todo.id}>
                <p>{todo.title}</p>
                <button
                  type="button"
                  onClick={() => handleToggleTodo(todo)}
                  disabled={togglingTodo === todo.id}
                >
                  {todo.checked ? "再開" : "終了"}
                </button>
                <Link to={`delete/${todo.id}`}>削除</Link>
                <Link to={`edit/${todo.id}`}>編集</Link>
              </li>
            ))
            .slice((page - 1) * 5, page * 5)}
        </ul>
      </div>
    );
  };

  // ページングを自前で実装
  const renderPager = () => {
    const maxPage = todoList
      .filter((todo) => todo.checked === finished)
      .filter((todo, index) => index % 5 === 0);
    return (
      <div>
        {maxPage.map((page, index) => (
          <button
            key={index}
            onClick={() => changeCurrentPage(index)}
            disabled={currentPage === index + 1}
          >
            {(index += 1)}
          </button>
        ))}
      </div>
    );
  };

  return (
    <div>
      {renderTodoList(currentPage)}
      {renderPager()}
    </div>
  );
}
export default List;
