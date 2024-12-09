import { create } from 'zustand';
import { API_BASE_URL } from 'shared/utils';

/**
 * @typedef {import('./types').TodoStateCreator} StateCreator
 * @typedef {import('./types').TodosStore} State
 */

export const useTodosStore = create(/** @type {StateCreator} */(set) => ({
  /* State for count */
  todoCount: 1,
  setTodoCount: (todoCount) => set((/** @type {State} */state) => ({ ...state, todoCount })),
  /* State for todos */
  todos: [],
  isTodosLoading: false,
  todosErrorMessage: '',
  getTodos: async (count) => {
    set({ isTodosLoading: true });

    try {
      const endPoint = `todos?_start=0&_limit=${count}`;
      const response = await fetch(`${API_BASE_URL}/${endPoint}`);
      const data = await response.json();

      set({ todos: data, todosErrorMessage: '', isTodosLoading: false });
    } catch (error) {
      set({ todosErrorMessage: 'The tasks could not be loaded.', isTodosLoading: false });
    }
  },
  resetTodos: () => set(() => ({ todos: [] })),
}));
