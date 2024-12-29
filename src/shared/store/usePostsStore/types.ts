export type PostsFromAPI = {
  postId: number;
  id: number;
  title: string;
  body: string;
};

export type PostStore = {
  /* Posts count state */
  postCount: number;
  setPostCount: (postCount: number) => void;

  /* State for posts store */
  isPostsLoading: boolean;
  posts: PostsFromAPI[] | [];
  postsErrorMessage: string;
  getPosts: (count: number) => void;
  resetPosts: () => void;

  /* State for post store */
  isPostLoading: boolean;
  post: PostsFromAPI | null;
  postErrorMessage: string;
  getPostById: (postId: string | number) => void;
  resetPost: () => void;
};

export type SetterCallback = (store: PostStore) => PostStore;
export type StoreCreator = (set: Function) => PostStore;
