import React from 'react';
import {useParams} from 'react-router-dom';
import  { useEffect, useState } from 'react';
import SelectedPost from '../SelectedPost/SelectedPost';

const PostLearnMore = () => {
    let {id} = useParams();
    const [selectPost ,setSelectPost] = useState({});
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res => res.json())
        .then(data=> setSelectPost(data))
    },)



    return (
        <div>
           <SelectedPost  selectPost={selectPost}></SelectedPost>
        </div>
    );
};

export default PostLearnMore;