import React, { Suspense, useState, useTransition } from "react";
import Spinner from "./Spinner";
import Error from "./Error";
import { suspendable } from "./suspendable";
import { fetchAllPosts, fetchPost } from "./api";

const PostCard = React.lazy(() => import("./postCard"));
const PostList = React.lazy(() => import("./PostList"));

const initialPost = suspendable(fetchPost(1));
const postListResources = suspendable(fetchAllPosts());

function App() {
  const [postResource, setPostResource] = useState(initialPost);
  const [pending, startTransition] = useTransition();

  const nextPost = (postId) => {
    startTransition(() => {
      setPostResource(suspendable(fetchPost(postId)));
    });
  };

  return (
    <div className="container">
      <header className="display-1">React Ladies Pro Edition | 2022</header>

      <Error fallback={<p>card failed to load</p>}>
        <Suspense fallback={<Spinner />}>
          <PostCard postResource={postResource} isLoading={pending} />
        </Suspense>
      </Error>

      <Error fallback={<p>card failed to load</p>}>
        <Suspense fallback={<Spinner />}>
          <PostList
            postListResource={postListResources}
            onPostSelect={nextPost}
          />
        </Suspense>
      </Error>
    </div>
  );
}

export default App;
