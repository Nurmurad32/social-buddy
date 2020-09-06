import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Comment from '../Comment/Comment';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';

const useStyles = makeStyles({
  root: {
    maxWidth: '100%',
    marginTop:'2%',
  },
//   media: {
//     height: 140,
//   },
});


const PostDetail = () => {
    const classes = useStyles();

    const {postId} = useParams();
    const [post , setPost] = useState({});
    const url = `https://jsonplaceholder.typicode.com/posts/${postId}`;
    
    useEffect(()=>{
        fetch(url)
        .then(res => res.json())
        .then(data => setPost(data))
    }, [])

    return (
        <div>
            <Card className={classes.root}>
                <CardActionArea>
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                    {post.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                    {post.body}
                    </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <IconButton aria-label="add to favorites">
                    <FavoriteIcon color="secondary" />
                    </IconButton>
                    <IconButton aria-label="share">
                    <ShareIcon color="primary"/>
                    </IconButton>  
                </CardActions>
            </Card>
            <p></p>
            <div>
                <Comment postId={postId}></Comment>
            </div>
        </div>
    );
};

export default PostDetail;