export type TodoFromAPI = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

export type TodosStore = {
   /* State for count */
   todoCount: number;
   setTodoCount: (todoCount: number) => void;
   /* State for todos */
  todos: TodoFromAPI[] | [];
  isTodosLoading: boolean;
  todosErrorMessage: string;
  getTodos: (count: number) => void;
  resetTodos: () => void;
};

export type TodoStateCreator = (set: Function) => TodosStore;
