export type TodoFromAPI = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

export type TodosStore = {
   /* State for todo count */
   todoCount: number;
   setTodoCount: (todoCount: number) => void;

   /* State for todos store */
  todos: TodoFromAPI[] | [];
  isTodosLoading: boolean;
  todosErrorMessage: string;
  getTodos: (count: number) => void;
  resetTodos: () => void;

  /* State for todo store */
  isTodoLoading: boolean;
  todo: TodoFromAPI | null;
  todoErrorMessage: string;
  getTodoById: (photoId: string) => void;
  resetTodo: () => void;
};

export type SetterCallback = (store: TodosStore) => TodosStore;
export type StoreCreator = (set: Function) => TodosStore;
