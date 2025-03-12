import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/styles.css';
import api from '../services/api.js'

const PostDetails = ({ postId, onDelete }) => {

  const [post, setPost] = useState(null);

  useEffect(() => {
    api.get(`/posts/${postId}`)
      .then((response) => {
        setPost(response.data);
      })
      .catch((error) => console.error('Error fetching post details:', error));
  }, [postId]);

  const handleDelete = () => {
    api.delete(`/posts/${postId}`)
      .then((response) => {
        onDelete(postId); // 
        console.log(response.data)
      })
      .catch((error) => console.error('Error deleting post:', error));
  };

  return (
    <>
      {
      post &&
        <div className="post-details">
          <h2>Post Details</h2>
          <p><strong>ID:</strong> {post.id}</p>
          <p><strong>Title:</strong> {post.title}</p>
          <p><strong>Author:</strong> {post.author}</p>
          <p><strong>Content:</strong> {post.content}</p>
          <button className="details-button">Edit</button>
          <button className="details-button" onClick={handleDelete} >Delete</button>
        </div>
      }

    </>

  );
};

export default PostDetails;
