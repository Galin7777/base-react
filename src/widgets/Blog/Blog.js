import classes from './Blog.module.scss';
import { useEffect } from 'react';
import { PostCounter } from 'features';
import { Creator } from 'features';
import { Card } from 'entity';
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
      {/* Counter */}
      <PostCounter name={'Post count'} />
      {/* Posts */}
      <Creator />
      <ul className={classes.posts}>
        {postStore.posts.map((post) => (
          <Card.Post key={post.id} post={post} />
        ))}
      </ul>
      <Preloader isActive={postStore.isPostsLoading} />
    </div>
  );
};
