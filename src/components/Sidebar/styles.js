import styled, { css } from "styled-components";
import { makeStyles } from "@material-ui/core";

import { NavLink } from "react-router-dom";

export default makeStyles((theme) => ({
  sidebar: {
    backgroundColor: theme.palette.primary.main,
    width: 260,
    borderRight: "none",
    boxShadow: '-2px 0px 20px rgba(0, 0, 0, 0.20)',
    position: 'relative',
    zIndex: 9,
  },

  header: {
    padding: "16px 24px",
    display: "flex",
    alignItems: "center",
    borderBottom: `2px solid ${theme.palette.light.main}`,
    marginBottom: "24px",

    ".name-container": {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "stretch",
    },
  },

  linksContainer: {
    padding: "16px 24px",
    display: "flex",
    flexDirection: "column",
    alignItems: "stretch",
  },

  logoutButton: {
    backgroundColor: 'rgba(0, 0, 0, 0.28)',
    padding: "16px 24px",
    color: theme.palette.light.main,
    marginTop: 'auto',
    borderRadius: 0,
    display: 'flex',
    justifyContent: 'flex-start',

    '& svg': {
      width: 24,
      marginRight: 8,
    }
  }
}));

export const RouteButton = styled(NavLink).attrs({
  activeClassName: "active"
})`
  padding: 16px 24px;
  font-weight: 600;
  text-decoration: none;
  margin-bottom: 8px;
  border-radius: 5px;
  display: flex;
  align-items: center;

  svg {
    width: 28px;
    height: 28px;
    margin-right: 8px;
  }

  &:hover, &.active {
    ${({ theme }) => css`
      background-color: ${theme.light.main};
      color: ${theme.primary.main};
    `}
  }

  ${({ theme }) => css`
    background-color: transparent;
    color: ${theme.light.main};
  `}

  ${({ active, theme }) =>
    active &&
    css`
      background-color: ${theme.light.main};
      color: ${theme.primary.main};
    `}
`;
