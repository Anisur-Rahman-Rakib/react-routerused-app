import React from 'react';
import  '../../components/PostPage/postPage.css';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
// import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});


const PostPage = (props) => {
    const {title , body ,id} = props.showpost;
    const classes = useStyles();
    return (

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
        <CardActions>
          <Button  variant="contained" size="small" color="primary">
            Share
          </Button>
          <Button size="small" variant="contained" color="secondary">
            Learn More
          </Button>
        </CardActions>
      </Card>
    //     <div className="post-design">
    
    // <h4>id :{id }</h4>
    // <h2> Post Title : {title}</h2>
    // <h3>Post:<p>{body}</p></h3>
    // <Button color="primary">Hello World</Button>
    //     </div>
    );
};

export default PostPage;