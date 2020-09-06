import React from 'react';
import '../../components/SelectedPost/Selectedpost.css';
// import { Button } from '@material-ui/core';
// import { makeStyles } from '@material-ui/core/styles';
// import Card from '@material-ui/core/Card';
// import CardActionArea from '@material-ui/core/CardActionArea';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
// import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Comment from '../Comment/Comment';
// import { Link } from 'react-router-dom';

// const useStyles = makeStyles({
//   root: {
//     maxWidth: 345,
//   },
//   media: {
//     height: 140,
//   },
// });


const SelectedPost = (props) => {
    const {title , body ,id, userId} = props.selectPost;
    // const classes = useStyles();
    return (
        <div id='Post-design'>
          <div>
            <h1>This is selected Post</h1>
            {title}
            <hr/>
            {body}</div>
          {/* <h4>  User Id : {userId}</h4>
            <h4> Post Id : {id}</h4> */}
            {/* <Card  className={classes.root}> */}
        {/* <CardActionArea> */}
          
          {/* <CardContent> */}
            {/* <Typography   gutterBottom variant="h5" component="h2">
              {title}
            </Typography>
            <Typography  variant="body2" color="textSecondary" component="p">
              {body}
            </Typography> */}
          {/* </CardContent>
        </CardActionArea> */}
        
      {/* </Card> */}
     <div> <Comment></Comment></div>
        </div>
    );
};

export default SelectedPost;