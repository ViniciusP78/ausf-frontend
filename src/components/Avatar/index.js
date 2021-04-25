import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import { Username, Role } from './style';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));

export default function ImageAvatars(props) {
  const classes = useStyles();

  return (
    <Box className={classes.root} display="flex" flexDirection="column" alignItems="center">
        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" className={classes.large}/>
        <Username>{props.name}</Username>
        <Role>{props.role}</Role>
    </Box>
  );
}
