import React from 'react';
import '../../components/ShowComment/ShowComment.css';
import Typography from '@material-ui/core/Typography';
import ProfilePicture from '../ProfilePicture/ProfilePicture';
const ShowComment = (props) => {
    const {id , body , email} =props.comment;
    return (
        <div className="comment-section d-flex">
            <div className="Profile-Picture p-3">
                <ProfilePicture></ProfilePicture>
            </div>
         <div className="comment-filed">
         <Typography    variant="h5" component="small">
             <h5>User Id : {id}</h5> 
            </Typography>
            <Typography    variant="h6" component="small">
             <h5>User Email : {email}</h5>
            </Typography>
    
            <Typography    variant="h5" component="small">
             <h5>User Comments :</h5>
             <p>{body}</p>
            </Typography>
         </div>
        </div>
    );
};

export default ShowComment;