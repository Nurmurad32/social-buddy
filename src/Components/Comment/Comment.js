import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData/userData';

import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
      width: '75%',
      backgroundColor: theme.palette.background.paper,
      marginLeft:'10%',
      marginBottom:'20px',
    },
    inline: {
      display: 'inline',
    },
  }));


const Comment = (props) => {
    const classes = useStyles();

    
    const {postId} = props;
    const url = `https://jsonplaceholder.typicode.com/comments?postId=${postId}`;
    const [comments , setComments] = useState([]);

    
    useEffect(()=>{
        fetch(url)
        .then(res => res.json())
        .then(data =>{ setComments(data)})
    },[])
    
    
        // for(let i=0; i<comments.length; i++){
        // let ct = comments[i];
        // var user = fakeData.find(us=> parseInt(us.id) === parseInt(ct.id));
        // console.log(user);
        // }
        var user = fakeData.find(us=> parseInt(us.id) === parseInt(postId));  
        console.log(user);
    
    
    return (
        <div>
            
            <h1>Comments</h1>
            {
                comments.map( comment =>   

                <List className={classes.root}>
                    <ListItem alignItems="flex-center">
                        <ListItemAvatar>
                        
                            <Avatar alt={comment.email} src={user.image} /> 
                        </ListItemAvatar>
                        <ListItemText
                        primary={comment.email}
                        secondary={
                            <React.Fragment >
                            <Typography
                                component="span"
                                variant="body2"
                                className={classes.inline}
                                color="textPrimary">
                                
                            </Typography>
                            {comment.body}
                            </React.Fragment>
                        }
                        />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                </List>  
            )}
        </div>
    );
};

export default Comment;