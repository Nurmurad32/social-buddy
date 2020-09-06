import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import HomeIcon from '@material-ui/icons/Home';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { Link } from 'react-router-dom';
import './Header.css';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      
    },
    extra:{
      marginRight:30,
      textDecoration:'none',
      color:'white',
    }
  }));

const Header = () => {
    const classes = useStyles();

    return (
      <>
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                  <Link to="/home" style={{textDecoration:'none', color:'white'}}>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                    <HomeIcon />
                    </IconButton>
                  </Link>
                  
                  <Typography className={classes.extra}>
                <Link to="/home" style={{textDecoration:'none', color:'white'}}> Home</Link>
                </Typography>

                <Typography className={classes.title}>
                <Link to="/posts" style={{textDecoration:'none', color:'white'}}> News</Link>
                </Typography>
                
                
                <Link to="/home" style={{textDecoration:'none', color:'white'}}> 
                  <Button color="inherit">
                    <AccountCircleIcon />
                  </Button>
                </Link>
                </Toolbar>
            </AppBar>
        </div>
        
        
        </>
    );
};

export default Header;