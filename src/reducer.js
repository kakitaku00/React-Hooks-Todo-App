const initialState = {
  isFetchTodoList: false,
  togglingTodo: null,
  isAdding: false,
  todoList: [],
  isFetchTodo: false,
  todo: null,
  isDeleting: false,
  isEditing: false,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "FETCH_TODO_LIST": {
      return {
        ...state,
        isFetchTodoList: true,
      };
    }

    case "SUCCESS_FETCH_TODO_LIST": {
      return {
        ...state,
        isFetchTodoList: false,
        todoList: action.payload,
      };
    }

    case "TOGGLE_TODO": {
      return {
        ...state,
        togglingTodo: action.payload,
      };
    }

    case "SET_TODO_LIST": {
      return {
        todoList: action.payload,
      };
    }

    case "SUCCESS_TOGGLE_TODO": {
      const newTodoList = state.todoList.map((todo) => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            checked: !todo.checked,
          };
        }
        return todo;
      });
      return {
        ...state,
        todoList: newTodoList,
        togglingTodo: null,
      };
    }

    case "ADD_TODO": {
      return {
        isAdding: true,
        ...state,
      };
    }

    case "SUCCESS_ADD_TODO": {
      return {
        isAdding: false,
        ...state,
      };
    }

    case "FETCH_TODO": {
      return {
        ...state,
        isFetchTODO: true,
      };
    }

    case "SUCCESS_FETCH_TODO": {
      return {
        ...state,
        isFetchTodo: false,
        todo: action.payload,
      };
    }

    case "DELETE_TODO": {
      return {
        isDeleting: true,
        ...state,
      };
    }

    case "SUCCESS_DELETE_TODO": {
      return {
        todo: null,
        isDeleting: false,
        ...state,
      };
    }

    case "EDIT_TODO": {
      return {
        isEditing: true,
        ...state,
      };
    }

    case "SUCCESS_EDIT_TODO": {
      return {
        todo: null,
        isEditing: false,
        ...state,
      };
    }

    default: {
      return state;
    }
  }
}
