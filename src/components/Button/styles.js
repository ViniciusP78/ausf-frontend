import styled from "styled-components";
import { darken } from "polished";

import getColor from "utils/getColor";

import { makeStyles } from "@material-ui/core";

export default ({ backgroundColor, fullWidth, color }) =>
  makeStyles((theme) => {
    const bgColor = backgroundColor
      ? getColor(backgroundColor, theme.palette)
      : theme.palette.primary.main;

    return {
      button: {
        width: fullWidth ? "100%" : "auto",
        backgroundColor: bgColor,
        color: theme.palette.light.main,
        padding: "8px 24px",

        "&:hover": {
          backgroundColor: darken(0.05, bgColor),
        },
      },
    };
  });
