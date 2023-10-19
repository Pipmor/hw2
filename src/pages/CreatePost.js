import React, { useState } from "react";
import axios from "axios";

const CreatePost = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post("https://dummyjson.com/posts", {
            title,
            content,
        }).then(() => {
        });
    };

    return (
        <div>
            <h1>Создать пост</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Заголовок"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Текст"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                />
                <button type="submit">Создать</button>
            </form>
        </div>
    );
};

export default CreatePost;
