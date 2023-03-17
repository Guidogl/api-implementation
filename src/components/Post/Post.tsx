import { Suspense, useState, useEffect } from "react";
import ToggleSwitch from "../Switch/Switch";
import "./Post.css";

interface PostProps {
  post: Post;
}

function Post({ post: { id, title, body } }: PostProps): JSX.Element {
  const [commentsStage, setCommentsStage] = useState<Card>({
    id,
    post: true,
  });
  const [comments, setComments] = useState<Comment[]>([]);

  useEffect(() => {
    setCommentsStage({ id, post: true });
  }, [id]);

  useEffect(() => {
    const postsFetch = async () => {
      const data = await (
        await fetch("https://jsonplaceholder.typicode.com/comments")
      ).json();

      setComments(data);
    };

    if (commentsStage.post === false) {
      postsFetch();
    }
    // console.log(commentsStage);
  }, [commentsStage]);

  return (
    <div className="post">
      <div className="post-header">
        <ToggleSwitch
          changeStage={setCommentsStage}
          id={id}
          commentsStage={commentsStage.post}
        />
      </div>
      {commentsStage.post ? (
        <>
          <Suspense fallback={<div className="post-image"></div>}>
            <img
              src={`/pictures/${Math.floor(Math.random() * 5)}.jpg`}
              alt="Image"
              className="post-image"
            />
          </Suspense>
          <div className="post-title">{title}</div>
          <div className="post-description">{body}</div>
        </>
      ) : (
        <div className="post-comments">
          {comments.map((comment) => (
            <div key={comment.id} className="post-comment">
              <div className="post-comment-user">
                {`User: ${comment.email}`}
              </div>
              <div className="post-comment-name">{comment.name}</div>
              <div className="post-comment-body">{comment.body}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Post;
