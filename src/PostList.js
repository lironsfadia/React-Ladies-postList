import React from 'react';

const PostList = ({ postListResource, onPostSelect }) => {
  return (
    <div className="mt-3">
      <h3>Post List</h3>
      <ul className="list-group">
        { postListResource.read().map( (post) => (
          <button onClick={() => onPostSelect(post.id)} className="list-group-item" key={post.id}>{post.title}</button>
        ))}
      </ul>

    </div>
  );
};

export default PostList;
