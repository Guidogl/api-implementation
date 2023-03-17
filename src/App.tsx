import { useEffect, useState } from "react";
import Post from "./components/Post/Post";
import "./App.css";

function App() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const postsFetch = async () => {
      const data = await (
        await fetch("https://jsonplaceholder.typicode.com/posts")
      ).json();

      setPosts(data);
    };

    postsFetch();
  }, []);

  return (
    <div className="App">
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
}

export default App;
