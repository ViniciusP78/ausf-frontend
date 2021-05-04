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
import useStyles from './style';
import { useRef } from 'react';

export default function CustomizedInputBase({ onSearch, titulo, placeholder, search }) {
  const classes = useStyles(); 
  const inputRef = useRef();

  const handleEnter = (e) => {
    e.persist();
    if (e.key === "Enter") {
      e.preventDefault();
      onSearch(e);
    }
  }

  return (
    <Container>
        <Box component="h2" className={classes.title}>
            {titulo}
        </Box>
      <Paper component="form" className={classes.root}>
        <IconButton onKeyPress={handleEnter} className={classes.iconButton} aria-label="search" onClick={() => search('', inputRef.current.value)}>
            <SearchIcon />
        </IconButton>
        <InputBase
            className={classes.input}
            inputRef={inputRef}
            placeholder={placeholder}
            inputProps={{ 'aria-label': placeholder }}
        />
      </Paper>
    </Container>
  );
}
