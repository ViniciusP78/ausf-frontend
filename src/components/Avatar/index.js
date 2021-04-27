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
    width: theme.spacing(12),
    height: theme.spacing(12),
  },
}));

export default function ImageAvatars({name, role}) {
  const classes = useStyles();

  return (
    <Box className={classes.root} display="flex" flexDirection="column" alignItems="center" marginY="8px">
        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" className={classes.large}/>
        {name && <Username>{name}</Username>}
        {role && <Role>{role}</Role>}
    </Box>
  );
}
