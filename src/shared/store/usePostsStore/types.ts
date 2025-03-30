/**********************************************
  Response types
**********************************************/

export type PostFromAPI = {
  postId: number;
  id: number;
  title: string;
  body: string;
};

/**********************************************
  Post types
**********************************************/

export type PostForCreate = {
  postId: number;
  id: number;
  title: string;
  body: string;
};

/**********************************************
  Store types
**********************************************/

export type PostStore = {
  /* Posts count state */
  postCount: number;
  setPostCount: (postCount: number) => void;

  /* State for getting posts */
  isPostsLoading: boolean;
  posts: PostFromAPI[];
  postsErrorMessage: string;
  getPosts: (count: number) => void;
  resetPosts: () => void;

 /* State for getting post */
  isPostLoading: boolean;
  post: PostFromAPI | null;
  postErrorMessage: string;
  getPostById: (postId: string | number) => void;
  resetPost: () => void;

  /* State for create post */
  isPostCreating: boolean;
  isPostCreated: boolean;
  postCreatingErrorMessage: string;
  creatPost: (postData: PostFromAPI) => void;
};

export type SetterCallback = (store: PostStore) => PostStore;
export type StoreCreator = (set: Function) => PostStore;
