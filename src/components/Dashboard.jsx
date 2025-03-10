import React, { useState } from 'react';
import Posts from "./Posts";
import PostDetails from './PostDetails';
import '../styles/styles.css'

function Dashboard() {
    const [posts, setPosts] = useState([
        { id: 111, title: "Happiness", author: "John" },
        { id: 112, title: "MIU", author: "Dean" },
        { id: 113, title: "Enjoy Life", author: "Jasmine" }
    ]);

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

    return (
        <div>
            <h1>Dashboard</h1>
            <Posts posts={posts} onPostClick={handlePostClick}></Posts>
            <div>
                <input type='text' value={newTitle} onChange={e => setNewTitle(e.target.value)}></input>
                <button onClick={updateFirstPostTitle}>Change Name</button>
            </div>
            {selectedPost && <PostDetails className="post-details" post={selectedPost} />}
        </div>
    )
}

export default Dashboard;