import { create } from 'zustand';
import { API_BASE_URL } from 'shared/config';
import { partial } from 'shared/utils';

/**
 * @typedef {import('./types').TodosStore} TodoStore
 * @typedef {import('./types').TodoFromAPI} TodoFromAPI
 * @typedef {import('./types').StoreCreator} StoreCreator
 * @typedef {import('./types').SetterCallback} SetterCallback
 */

/**
 * @function setTodoCount
 * @param {Function} set
 * @param {number} todoCount
 * @returns {void}
 */

const setTodoCount = (set, todoCount) => {
  set(/** @type {SetterCallback} */(store) => ({
    ...store,
    todoCount,
  }));
};

/**
 * @function getTodos
 * @param {Function} set
 * @param {number} count
 * @returns {Promise<void>}
 */

const getTodos = async (set, count) => {
  try {
    set(/** @type {SetterCallback} */(store) => ({
      ...store,
      isTodosLoading: true,
      todos: [],
      todosErrorMessage: '',
    }));
    const endPoint = `todos?_start=0&_limit=${count}`;
    const response = await fetch(`${API_BASE_URL}/${endPoint}`);
    if (!response.ok) throw new Error('Todos not received');
    const todos = await response.json();
    set(/** @type {SetterCallback} */(store) => ({
      ...store,
      isTodosLoading: false,
      todos,
      todosErrorMessage: '',
    }));
  } catch (/** @type {*} */ error) {
    set(/** @type {SetterCallback} */(store) => ({
      ...store,
      isTodosLoading: false,
      todos: [],
      todosErrorMessage: error.message,
    }));
  }
};

/**
 * @function resetTodos
 * @param {Function} set
 * @returns {void}
 */

const resetTodos = (set) => {
  set(/** @type {SetterCallback} */(store) => ({
    ...store,
    todos: [],
  }));
};

/**
 * @function getTodoById
 * @param {Function} set
 * @param {string} id
 * @returns {Promise<void>}
 */

const getTodoById = async (set, id) => {
  try {
    set(/** @type {SetterCallback} */(store) => ({
      ...store,
      isTodosLoading: true,
      todo: null,
      todosErrorMessage: '',
    }));
    const endPoint = `todos/${id}`;
    const response = await fetch(`${API_BASE_URL}/${endPoint}`);
    if (!response.ok) throw new Error('Todo not received');
    const todo = await response.json();
    set(/** @type {SetterCallback} */(store) => ({
      ...store,
      isTodoLoading: false,
      todo,
      todoErrorMessage: '',
    }));
  } catch (/** @type {*} */ error) {
    set(/** @type {SetterCallback} */(store) => ({
      ...store,
      isTodoLoading: false,
      todo: null,
      todoErrorMessage: error.message,
    }));
  }
};

/**
 * @function resetTodo
 * @param {Function} set
 * @returns {void}
 */

const resetTodo = (set) => {
  set(/** @type {SetterCallback} */(store) => ({
    ...store,
    todo: null,
  }));
};

/**
 * @function creatTodo
 * @param {Function} set
 * @param {TodoFromAPI} TodoFromAPI
 * @returns {Promise<void>}
 */

const creatTodo = async (set, TodoFromAPI) => {
  try {
    set(/** @type {SetterCallback} */(store) => ({
      ...store,
      isTodoCreating: true,
      isTodoCreated: false,
      todoCreatingErrorMessage: '',
    }));

    if (!TodoFromAPI || typeof TodoFromAPI.title !== 'string') {
      throw new Error('Invalid todo data provided');
    }

    const queryOpts = {
      method: 'POST',
      body: JSON.stringify(TodoFromAPI),
      headers: { 'Content-type': 'application/json' },
    };

    const queryURL = `${API_BASE_URL}/todos`;
    const response = await fetch(queryURL, queryOpts);
    if (!response.ok) throw new Error('Failed to create todo');

    const resData = await response.json();

    set(/** @type {SetterCallback} */(store) => ({
      ...store,
      isTodoCreating: false,
      isTodoCreated: Boolean(resData),
      todoCreatingErrorMessage: '',
    }));
  } catch (/** @type {*} */ error) {
    set(/** @type {SetterCallback} */(store) => ({
      ...store,
      isTodoCreating: false,
      isTodoCreated: false,
      todoCreatingErrorMessage: error.message || 'Unknown error occurred',
    }));
  }
};

/**
 * @function useTodosStore
 * @returns {TodosStore}
 */

export const useTodosStore = create(/** @type {StoreCreator} */(set) => ({
  /* Todo count state */
  todoCount: 0,
  setTodoCount: partial(setTodoCount, set),

  /* State for todos */
  isTodosLoading: false,
  todos: [],
  todosErrorMessage: '',
  getTodos: partial(getTodos, set),
  resetTodos: partial(resetTodos, set),

  /* State for todo store */
  isTodoLoading: false,
  todo: null,
  todoErrorMessage: '',
  getTodoById: partial(getTodoById, set),
  resetTodo: partial(resetTodo, set),

  /* State for creating todo store */
  isTodoCreating: false,
  isTodoCreated: false,
  todoCreatingErrorMessage: '',
  createTodo: partial(creatTodo, set),
}));
