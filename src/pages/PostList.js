import React, { useState, useEffect } from "react";
import axios from "axios";

const PostList = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get("https://dummyjson.com/posts").then((response) => {
            setPosts(response.data);
        });
    }, []);

    return (
        <div>
            <h1>Список постов</h1>
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>
                        {post.title}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PostList;
