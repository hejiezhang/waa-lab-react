import React, { useEffect, useState } from 'react';
import Posts from "./Posts";
import PostDetails from './PostDetails';
import '../styles/styles.css'
import axios from 'axios';
import AddPost from './AddPost';
import api from '../services/api.js'

function Dashboard() {
    // const [posts, setPosts] = useState([
    //     { id: 111, title: "Happiness", author: "John" },
    //     { id: 112, title: "MIU", author: "Dean" },
    //     { id: 113, title: "Enjoy Life", author: "Jasmine" }
    // ]);
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        api.get('/posts')
          .then((response) => {
            console.log(response.data);
            setPosts(response.data);
          })
          .catch((error) => console.error('Error fetching posts:', error));
      }, []);

    const [newTitle, setNewTitle] = useState('');

    function updateFirstPostTitle() {
        const updatedPosts = [...posts];
        updatedPosts[0].title = newTitle;
        setPosts(updatedPosts);
        setNewTitle('');
    }

    const [selectedPost, setSelectedPost] = useState(null);

    const handlePostClick = (post) => {
        setSelectedPost(post);
    };

    const handleDeletePost = (deletedPostId) => {
        setPosts((prevPosts) => prevPosts.filter(post => post.id !== deletedPostId));
        //setSelectedPost(null);
      };

    const handleAddPost = () => {
        api.get('/posts')
          .then((response) => {
            console.log(response.data);
            setPosts(response.data);
          })
          .catch((error) => console.error('Error fetching posts:', error));
    }

    return (
        <div>
            <h1>Dashboard</h1>
            <Posts posts={posts} onPostClick={handlePostClick}></Posts>
            <AddPost onAdd = {handleAddPost}></AddPost>
            <div>
                <input type='text' value={newTitle} onChange={e => setNewTitle(e.target.value)}></input>
                <button onClick={updateFirstPostTitle}>Change Name</button>
            </div>
            {selectedPost && <PostDetails className="post-details" postId={selectedPost.id} onDelete={handleDeletePost} />}
        </div>
    )
}

export default Dashboard;