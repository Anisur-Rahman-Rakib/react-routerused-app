import React from 'react';
// import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
// import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
// import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
// import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});


const SelectedPost = (props) => {
    const {title , body ,id, userId} = props.selectPost;
    const classes = useStyles();
    return (
        <div>
            <h1>This is selected Post</h1>
          <h2>  User Id : {userId}</h2>
            <h2> Post Id : {id}</h2>
            <Card id='custom-design' className={classes.root}>
        <CardActionArea>
          {/* <CardMedia
            className={classes.media}
            image="/static/images/cards/contemplative-reptile.jpg"
            title="Contemplative Reptile"
          /> */}
          <CardContent>
            <Typography className='title-design'  gutterBottom variant="h5" component="h2">
              {title}
            </Typography>
            <Typography className="post-design" variant="body2" color="textSecondary" component="p">
              {body}
            </Typography>
          </CardContent>
        </CardActionArea>
        {/* <CardActions>
          <Button  variant="contained" size="small" color="primary">
            Share
          </Button>
          <Button component={Link} to={`/posts/${id}`} size="small" variant="contained" color="secondary">
            Learn More
          </Button>
        </CardActions> */}
      </Card>
        </div>
    );
};

export default SelectedPost;