import { Counter } from 'entity';
import { useEffect } from 'react';
import { usePostsStore } from 'shared/store';

/**
 * @typedef {import('./types').PostCounterProps} Props
 */

/**
 * @function PostCounter
 * @param {Props} props
 * @returns {JSX.Element}
 */

export const PostCounter = (props) => {
  const postStore = usePostsStore();

  useEffect(() => {
    postStore.setPostCount(1);
  }, []);

  return (
    <Counter name={'Posts count'}
      minCount={1}
      count={postStore.postCount}
      setCount={postStore.setPostCount}
      maxCount={10}
      isDisabled={postStore.isPostsLoading}
    />
  );
};
