import React from 'react';
import  '../../components/PostPage/postPage.css';
import { Button } from '@material-ui/core';


const PostPage = (props) => {
    const {title , body ,id} = props.showpost;
    return (
        <div className="post-design">
    
    <h4>id :{id }</h4>
    <h2> Post Title : {title}</h2>
    <h3>Post:<p>{body}</p></h3>
    <Button color="primary">Hello World</Button>;
        </div>
    );
};

export default PostPage;