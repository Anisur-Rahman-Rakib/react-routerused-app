import React, { useEffect, useState } from 'react';
import PostPage from '../PostPage/PostPage';

const HomePage = () => {
    const [postItem, setPostItem]= useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => setPostItem(data))

    } , [])
    return (
        <div>
            <h1>This  is post package : {postItem.length}</h1>
            {
                postItem.map(showpost => <PostPage showpost={showpost}></PostPage>)
            }
        </div>
    );
};

export default HomePage;