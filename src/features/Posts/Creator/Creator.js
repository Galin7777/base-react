import classes from './Creator.module.scss';
import { useState } from 'react';
import { usePostsStore } from 'shared/store';

/**
 * @typedef {import('./types').PostsProps} PostsProps
 */

/**
 * @function Creator
 * @param {PostsProps} props
 * @returns {JSX.Element}
 */

export const Creator = (props) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [newPost, setNewPost] = useState({ title: '', content: '' });
  const { creatPost, postCount } = usePostsStore();

  const handleCreator = () => {
    const formattedPost = {
      postId: postCount + 1,
      id: postCount + 1,
      title: newPost.title,
      body: newPost.content,
    };

    creatPost(formattedPost);
    setNewPost({ title: '', content: '' });
    setModalOpen(false);
  };

  return (
    <div className={classes.postsContainer}>
      <div className={classes.controls}>
        <button onClick={() => setModalOpen(true)}>Create post</button>
      </div>

      {isModalOpen && (
        <>
          {/* Фон-затемнение */}
          <div className={classes.backdrop} onClick={() => setModalOpen(false)}></div>

          {/* Модальное окно */}
          <div className={classes.modal}>
            <h2>Add post</h2>
            <label>
              Title
              <input
                type="text"
                value={newPost.title}
                onChange={(e) =>
                  setNewPost((prev) => ({ ...prev, title: e.target.value }))
                }
              />
            </label>
            <label>
              Post
              <textarea
                value={newPost.content}
                onChange={(e) =>
                  setNewPost((prev) => ({ ...prev, content: e.target.value }))
                }
              />
            </label>
            <div className={classes.modalButtons}>
              <button onClick={handleCreator}>Create post</button>
              <button onClick={() => setModalOpen(false)}>Cancel</button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
