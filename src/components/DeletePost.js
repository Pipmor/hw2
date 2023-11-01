import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import axios from 'axios';

const DeletePost = () => {
    const { postId } = useParams();
    const history = useHistory();

    const handleDelete = async () => {
        try {
            await axios.delete(`https://dummyjson.com/posts/${postId}`);
            history.push('/');
        } catch (error) {
            console.error('Error deleting post: ', error);
        }
    };

    return (
        <div>
            <h1>Удалить пост</h1>
            <p>Вы действительно хотите удалить пост?</p>
            <button onClick={handleDelete}>Да</button>
            <button onClick={() => history.push('/')}>Нет</button>
        </div>
    );
};

export default DeletePost;
