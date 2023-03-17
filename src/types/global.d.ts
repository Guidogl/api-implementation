export {};

declare global {
  interface Post {
    userId: string;
    id: string;
    title: string;
    body: string;
  }

  interface Card {
    id: string;
    post: boolean;
  }

  interface Comment {
    body: string;
    email: string;
    id: string;
    name: string;
    postId: string;
  }
}
