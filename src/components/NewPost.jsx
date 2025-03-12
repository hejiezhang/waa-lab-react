import { useState, useRef  } from 'react';
import axios from 'axios';
import api from '../services/api.js'

const AddPost = ({ onAdd }) => {
    const titleRef = useRef();
    const authorRef = useRef();
    const contentRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();

        const newPost = {
            title: titleRef.current.value,
            author: authorRef.current.value,
            content: contentRef.current.value,
        };

        api.post('/posts', newPost)
            .then((response) => {
                onAdd();
                titleRef.current.value = '';
                authorRef.current.value = '';
                contentRef.current.value = '';
            })
            .catch((error) => console.error('Error adding post:', error));
    };

    return (
        <div className='add-post'>
            <h4>Add New Post</h4>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Title:</label>
                    <input type="text" ref={titleRef} required />
                </div>
                <div>
                    <label>Author:</label>
                    <input type="text" ref={authorRef} required />
                </div>
                <div>
                    <label>Content:</label>
                    <textarea ref={contentRef} required />
                </div>
                <button type="submit">Add Post</button>
            </form>
        </div>
    );
};

export default AddPost;
