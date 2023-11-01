import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const CreatePost = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const history = useHistory();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('https://dummyjson.com/posts', {
                title,
                content
            });
            console.log('Post created:', response.data);
            history.push('/');
        } catch (error) {
            console.error('Error creating post: ', error);
        }
    };

    return (
        <div>
            <h1>Создание поста</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Заголовок:</label>
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
                </div>
                <div>
                    <label>Текст поста:</label>
                    <textarea value={content} onChange={(e) => setContent(e.target.value)} required />
                </div>
                <button type="submit">Создать пост</button>
            </form>
        </div>
    );
};

export default CreatePost;
