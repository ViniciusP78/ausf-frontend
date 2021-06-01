import React, { useRef } from "react";
import { useHistory } from "react-router-dom";

import SearchIcon from "@material-ui/icons/Search";
import { ReactComponent as BackIcon } from "assets/icons/arrow-back.svg";

import { Box, IconButton, InputBase, Paper } from "@material-ui/core";
import { Container } from "./style";
import useStyles from "./style";

export default function CustomizedInputBase({
  onSearch,
  titulo,
  placeholder,
  backRoute,
}) {
  const history = useHistory();
  const classes = useStyles();
  const inputRef = useRef();

  const handleEnter = (e) => {
    e.persist();
    if (e.key === "Enter") {
      e.preventDefault();
      onSearch("", inputRef.current.value);
    }
  };

  return (
    <Container>
      {backRoute && (
        <BackIcon
          onClick={() => history.push(backRoute)}
          className={classes.backButton}
        />
      )}

      <Box component="h2" className={classes.title}>
        {titulo}
      </Box>

      {!backRoute && (
        <Paper component="form" className={classes.searchbarContainer}>
          <IconButton
            className={classes.iconButton}
            aria-label="search"
            onClick={() => onSearch("", inputRef.current.value)}
          >
            <SearchIcon />
          </IconButton>
          <InputBase
            className={classes.input}
            inputRef={inputRef}
            placeholder={placeholder}
            inputProps={{ "aria-label": placeholder }}
            onKeyPress={handleEnter}
            onChange={() => onSearch("", inputRef.current.value)}
          />
        </Paper>
      )}
    </Container>
  );
}
