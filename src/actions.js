export const fetchTodoListAction = () => ({
  type: "FETCH_TODO_LIST",
});

export const successFetchTodoListAction = (payload) => ({
  type: "SUCCESS_FETCH_TODO_LIST",
  payload,
});

export const toggleTodoAction = (payload) => ({
  type: "TOGGLE_TODO",
  payload,
});

export const successToggleTodoAction = (payload) => ({
  type: "SUCCESS_TOGGLE_TODO",
  payload,
});

export const addTodoAction = () => ({
  type: "ADD_TODO",
});

export const successAddTodoAction = (payload) => ({
  type: "SUCCESS_ADD_TODO",
});

export const fetchTodoAction = () => ({
  type: "FETCH_TODO",
});

export const successFetchTodoAction = (payload) => ({
  type: "SUCCESS_FETCH_TODO",
  payload,
});

export const deleteTodoAction = () => ({
  type: "DELETE_TODO",
});

export const successDeleteTodoAction = () => ({
  type: "SUCCESS_DELETE_TODO",
});

export const editTodoAction = () => ({
  type: "EDIT_TODO",
});

export const successEditTodoAction = () => ({
  type: "SUCCESS_EDIT_TODO",
});
