import { useSelector, useDispatch } from "react-redux";
import axios from "axios";

import {
  fetchTodoListAction,
  successFetchTodoListAction,
  toggleTodoAction,
  successToggleTodoAction,
  fetchTodoAction,
  successFetchTodoAction,
  deleteTodoAction,
  successDeleteTodoAction,
  editTodoAction,
  successEditTodoAction,
} from "./actions";

function useTodo() {
  const todo = useSelector((state) => state.todo);
  const todoList = useSelector((state) => state.todoList);
  const isFetchTodoList = useSelector((state) => state.isFetchTodoList);
  const isDeleting = useSelector((state) => state.isDeleting);
  const isEditing = useSelector((state) => state.isEditing);
  const togglingTodo = useSelector((state) => state.togglingTodo);
  const dispatch = useDispatch();

  const fetchTodoList = () => {
    dispatch(fetchTodoListAction());
    axios.get("https://mbc.to-r.net/react-todo/todos").then((res) => {
      dispatch(successFetchTodoListAction(res.data));
    });
  };

  const toggleTodo = (todo) => {
    dispatch(toggleTodoAction(todo.id));
    const newTodo = {
      ...todo,
      checked: !todo.checked,
    };
    axios
      .put("https://mbc.to-r.net/react-todo/todo/" + todo.id, newTodo)
      .then(() => {
        dispatch(successToggleTodoAction(todo.id));
      });
  };

  const fetchTodo = (key) => {
    dispatch(fetchTodoAction());
    axios.get("https://mbc.to-r.net/react-todo/todo/" + key).then((res) => {
      dispatch(successFetchTodoAction(res.data));
    });
  };

  const deleteTodo = async (key) => {
    dispatch(deleteTodoAction());
    await axios
      .delete("https://mbc.to-r.net/react-todo/todo/" + key)
      .then((res) => {
        dispatch(successDeleteTodoAction());
      });
  };

  const editTodo = async (key, myText) => {
    dispatch(editTodoAction());
    const newTodo = {
      ...todo,
      title: myText,
    };
    await axios
      .put("https://mbc.to-r.net/react-todo/todo/" + key, newTodo)
      .then((res) => {
        dispatch(successEditTodoAction());
      });
  };

  return {
    todo,
    todoList,
    isFetchTodoList,
    isDeleting,
    isEditing,
    togglingTodo,
    fetchTodoList,
    toggleTodo,
    fetchTodo,
    deleteTodo,
    editTodo,
  };
}

export default useTodo;
