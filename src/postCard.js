import React from 'react';

function PostCard({ postResource, isLoading }) {
  let post = postResource.read();

  return (
    <div className="card">
      <div className="card-body">
        {isLoading && <h6>Loading next post</h6>}
        <h5 className="card-title">{post.title}</h5>
        <p className="card-text">{post.body}</p>
      </div>
    </div>
  );
}

export default PostCard;
