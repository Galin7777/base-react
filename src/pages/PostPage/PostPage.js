import { useParams } from 'react-router-dom';
import { usePostsStore } from 'shared/store';
import { useEffect } from 'react';
import { Preloader } from 'shared/ui';

/**
 *@function PostPage
 * @returns {JSX.Element}
 */

export const PostPage = () => {
  const params = useParams();
  const postsStore = usePostsStore();

  if (!params.postId) return <p>Invalid post id</p>;

  useEffect(() => {
    if (!params.postId) return;
    postsStore.getPostById(params.postId);
  }, []);

  if (!postsStore.post) return <p>Post not found or loading</p>;

  return (
    <>
      <div>
        <h2>{postsStore.post.title}</h2>
      </div>
      <Preloader isActive={postsStore.isPostLoading} />
    </>
  );
};
