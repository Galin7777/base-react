import classes from './Blog.module.scss';
import { useEffect } from 'react';
import { PostCounter } from 'features';
import { Posts } from 'features';
import { usePostsStore } from 'shared/store';
import { Preloader } from 'shared/ui';

/**
 * @function Blog
 * @returns {JSX.Element}
 */

export const Blog = () => {
  const postStore = usePostsStore();

  useEffect(() => {
    const { postCount } = postStore;
    if (!postStore.postCount) return;
    console.log({ postCount });
    postStore.getPosts(postStore.postCount);
  }, [postStore.postCount]);

  return (
    <div className={classes.blog}>
      <PostCounter name={'Post count'} />
      <Posts posts={postStore.posts} />
      <Preloader isActive={postStore.isPostsLoading} />
    </div>
  );
};
