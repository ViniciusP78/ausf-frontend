import React from "react";
import { useSelector } from "react-redux";

import { matchPath } from "react-router-dom";

import { ReactComponent as ProntuarioIcon } from "assets/icons/clipboard.svg";
import { ReactComponent as ConsultaIcon } from "assets/icons/clock.svg";
import { ReactComponent as LogoutIcon } from "assets/icons/logout.svg";

import Text from "components/Text";
import { Avatar, Drawer, Button } from "@material-ui/core";

import useStyles, { RouteButton } from "./styles";

function Sidebar({ open }) {
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const user = useSelector((state) => state.auth.user);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Drawer
      variant="permanent"
      open={true}
      classes={{ paper: classes.sidebar }}
    >
      <div className={classes.header}>
        <Avatar style={{ width: 64, height: 64, marginRight: 8 }} />
        <div className="name-container">
          <Text
            weight={600}
            size="20px"
            color="light"
            transform="capitalize"
            margin="0 0 4px 0"
          >
            {user?.name}
          </Text>
          <Text size="14px" weight={500} color="light" transform="uppercase">
            Recepcionista
          </Text>
        </div>
      </div>

      <div className={classes.linksContainer}>
        <RouteButton to="/prontuarios">
          <ProntuarioIcon /> Prontuários
        </RouteButton>
        <RouteButton to="/consultas">
          <ConsultaIcon /> Consultas
        </RouteButton>
      </div>

      <Button className={classes.logoutButton}>
        <LogoutIcon />
        Sair
      </Button>
    </Drawer>
  );
}

export default Sidebar;
