import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
    root: {
      minWidth: 275,
      marginTop:'5%',
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
        fontWeight: 400,
        color: '#212121',
      fontSize: 24,
    },
    pos: {
      marginBottom: 12,
    },
  });

const Posts = () => {
    const classes = useStyles();

    const [ posts , setPosts ] = useState([]);

    useEffect( () => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => setPosts(data))
    },[])

    return (
        <div>
            <h1 style={{textAlign:'center',color:'#F44336'}}>ALL NEWS</h1>
            {
                posts.map(post =>
                    <Container>
                        <Card className={classes.root}>
                            <CardContent>
                                <Typography className={classes.title} color="info.main" gutterBottom>
                                    <Box color="info.main"> {post.title} </Box>
                                    
                                </Typography>
                                <Typography variant="body2" component="p" >
                                    {post.body}
                                </Typography>
                            </CardContent>
                            <CardActions>
                            <Link to={`/post/${post.id}`} style={{textDecoration:'none'}}>
                                <Button variant="outlined" color="primary" size="small" >
                                    <span>See more{'>>'+post.id} </span>
                                </Button>
                            </Link>
                            </CardActions>
                        </Card> 
                    </Container>
                )
            }
            
        </div>
    );
};

export default Posts;