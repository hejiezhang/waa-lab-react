import React from 'react';
import '../styles/styles.css';

const PostDetails = ({ post }) => {
  return (
    <div className="post-details">
      <h2>Post Details</h2>
      <p><strong>ID:</strong> {post.id}</p>
      <p><strong>Title:</strong> {post.title}</p>
      <p><strong>Author:</strong> {post.author}</p>
      <button className="details-button">Edit</button>
      <button className="details-button">Delete</button>
    </div>
  );
};

export default PostDetails;
