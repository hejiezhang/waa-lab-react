import { useState } from 'react';
import axios from 'axios';
import api from '../services/api.js'

const AddPost = ({ onAdd }) => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const newPost = { title, author, content };

        api.post('/posts', newPost)
            .then((response) => {
                console.log('Post added:', response.data);
                onAdd();
            })
            .catch((error) => console.error('Error adding post:', error));
    };

    return (
        <div className='add-post'>
            <h4>Add New Post</h4>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Title:</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Author:</label>
                    <input
                        type="text"
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Content:</label>
                    <textarea
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Add Post</button>
            </form>
        </div>
    );
};

export default AddPost;
