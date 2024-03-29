// import Button from "components/Button";
import Card from "components/CardProntuario";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import SearchBar from "components/Searchbar";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { signOutRequest } from "store/modules/auth/actions";
import { openConfirmation } from "store/modules/confirmation/actions";

import { ReactComponent as ProntuarioIcon } from "assets/icons/clipboard.svg";
import { ReactComponent as ConsultaIcon } from "assets/icons/clock.svg";
import { ReactComponent as LogoutIcon } from "assets/icons/logout.svg";
import { ReactComponent as GroupIcon } from "assets/icons/group.svg";
import { ReactComponent as PersonIcon } from "assets/icons/person.svg";

import Text from "components/Text";
import { Avatar, Drawer, Button } from "@material-ui/core";

import cargos from "utils/cargos"

import useStyles, { RouteButton } from "./styles";


function Sidebar({ open }) {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [mobileOpen, setMobileOpen] = React.useState(false);

  const user = useSelector((state) => state.auth.user);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const logout = () => {
    dispatch(signOutRequest());
  };

  function confirmLogout() {
    dispatch(
      openConfirmation({
        onYes: () => logout(),
        content: "Deseja mesmo sair ?",
      })
    );
  }

  return (
    <Drawer variant="permanent" classes={{ paper: classes.sidebar }}>
      <div className={classes.header}>
        <Avatar style={{ width: 64, height: 64, marginRight: 16 }} />
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
            {cargos[user.cargo_id - 1]}
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
        {user.cargo_id === 2 && <RouteButton to="/fila">
          <GroupIcon /> Fila
        </RouteButton>}
        {user.cargo_id === 1 && <RouteButton to="/usuarios">
          <PersonIcon /> Usuários
        </RouteButton>}
      </div>

      <Button className={classes.logoutButton} onClick={() => confirmLogout()}>
        <LogoutIcon />
        Sair
      </Button>
    </Drawer>
  );
}

export default Sidebar;
