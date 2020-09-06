import React from 'react';
import '../../components/SelectedPost/Selectedpost.css';

import Typography from '@material-ui/core/Typography';
import Comment from '../Comment/Comment';





const SelectedPost = (props) => {
    const {title , body } = props.selectPost;
   
    return (
        <div id='Post-design'>
          
            <h1>This is selected Post :</h1>
            
            <Typography    variant="h5" component="small">
             <h5>Title :{title}</h5>
            </Typography>
            <Typography  variant="body2" color="textSecondary" component="h6">
             <h4>Post : {body}</h4>  
            </Typography> 
          
      <hr/>
     <div>
    <h1>Comments.......</h1>
    <hr/>
     </div>
     <Comment></Comment>
        </div>
    );
};

export default SelectedPost;