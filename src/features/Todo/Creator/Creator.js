import classes from './Creator.module.scss';
import { useState } from 'react';
import { useTodosStore } from 'shared/store';

/**
 * @typedef {import('./types').TodosProps} TodosProps
 */

/**
 * @function Creator
 * @param {TodosProps} props
 * @returns {JSX.Element}
 */

export const Creator = (props) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [newTodo, setNewTodo] = useState({ title: '', content: '' });
  const { creatTodo, todoCount } = useTodosStore();

  const handleCreator = () => {
    const formattedTodo = {
      todoId: todoCount + 1,
      id: todoCount + 1,
      title: newTodo.title,
    };

    creatTodo(formattedTodo);
    setNewTodo({ title: '', content: '' });
    setModalOpen(false);
  };

  return (
    <div className={classes.todosContainer}>
      <div className={classes.controls}>
        <button onClick={() => setModalOpen(true)}>Create todo</button>
      </div>

      {isModalOpen && (
        <>
          {/* Фон-затемнение */}
          <div className={classes.backdrop} onClick={() => setModalOpen(false)}></div>

          {/* Модальное окно */}
          <div className={classes.modal}>
            <h2>Add todo</h2>
            <label>
              Title
              <input
                type="text"
                value={newTodo.title}
                onChange={(e) =>
                  setNewTodo((prev) => ({ ...prev, title: e.target.value }))
                }
              />
            </label>
            <label>
              Post
              <textarea
                value={newTodo.content}
                onChange={(e) =>
                  setNewTodo((prev) => ({ ...prev, content: e.target.value }))
                }
              />
            </label>
            <div className={classes.modalButtons}>
              <button onClick={handleCreator}>Create todo</button>
              <button onClick={() => setModalOpen(false)}>Cancel</button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
