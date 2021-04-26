import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import DirectionsIcon from '@material-ui/icons/Directions';
import Box from '@material-ui/core/Box';
import { Container} from './style';
// import useStyles from './style';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: '100%',
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));

export default function CustomizedInputBase({ onSearch, titulo, placeholder }) {
  const classes = useStyles(); 

  const handleEnter = (e) => {
    e.persist();
    if (e.key === "Enter") {
      e.preventDefault();
      onSearch(e);
    }
  }

  return (
    <Container width="100%">
        <Box component="h1"fontWeight="500" marginRight="2rem">
            {titulo}
        </Box>
      <Paper component="form" className={classes.root}>
        <IconButton onKeyPress={handleEnter} className={classes.iconButton} aria-label="search">
            <SearchIcon />
        </IconButton>
        <InputBase
            className={classes.input}
            placeholder={placeholder}
            inputProps={{ 'aria-label': placeholder }}
        />
      </Paper>
    </Container>
  );
}
