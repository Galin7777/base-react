import { Counter as UiCounter } from 'entity';
import { useEffect } from 'react';
import { usePostsStore } from 'shared/store';

/**
 * @typedef {import('./types').CounterProps} Props
 */

/**
 * @function Counter
 * @param {Props} props
 * @returns {JSX.Element}
 */

export const Counter = (props) => {
  const postStore = usePostsStore();

  useEffect(() => {
    postStore.setPostCount(1);
  }, []);

  return (
    <UiCounter name={'Posts count'}
      minCount={1}
      count={postStore.postCount}
      setCount={postStore.setPostCount}
      maxCount={10}
      isDisabled={postStore.isPostsLoading}
    />
  );
};
