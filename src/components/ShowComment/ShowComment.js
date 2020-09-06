import React from 'react';
import '../../components/ShowComment/ShowComment.css';
const ShowComment = (props) => {
    const {id , name , body , email} =props.comment;
    return (
        <div className="comment-section">
            <h1>Comments.......</h1>
            <h1>user id : {id}</h1>
    <h2>email : {email}</h2>
    <p>comment : {body}</p>
        </div>
    );
};

export default ShowComment;