import { PhotoFromAPI as PhotoDetails } from 'shared/store/usePhotosStore/types';
import { TodoFromAPI as TodoDetails } from 'shared/store/useTodosStore/types';
import { PostsFromAPI as PostDetails } from 'shared/store/usePostsStore/types';
import { JSX } from 'react';

export type PhotoProps = {
  photo: PhotoDetails;
};

export type TodoProps = {
  todo: TodoDetails;
};

export type PostProps = {
  post: PostDetails;
};

export type Card = {
  Photo: (props: PhotoProps) => JSX.Element | null;
  Todo: (props: TodoProps) => JSX.Element | null;
  Post: (props: PostProps) => JSX.Element | null;
};
