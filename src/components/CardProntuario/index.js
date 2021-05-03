import Avatar from "components/Avatar";
import { useHistory } from "react-router-dom";

import socket from "services/socket";

import Box from "@material-ui/core/Box";
import { Container, Button } from "./style";
import { ReactComponent as ArrowSend } from "assets/icons/arrow-send.svg";
import { ReactComponent as ClipBoard } from "assets/icons/clipboard.svg";
import ButtonMui from "@material-ui/core/Button";
import useStyles from "./style";

export default function ImgMediaCard({ prontuario }) {
  const classes = useStyles();
  const history = useHistory();

  async function sendToMedic() {
    socket.emit('enviarProntuario', { opa: 'menagem' })
  }

  return (
    <Container>
      <Box display="flex">
        <Box alignSelf="center" paddingX="16px">
          <Avatar nameAlt={prontuario.paciente.nome} />
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="start"
          marginTop="20px"
          marginX="20px"
        >
          <Box component="h2" className={classes.colorSecondary}>
            {prontuario.paciente.nome}
          </Box>
          <Box component="p" className={classes.colorSecondary}>
            {prontuario.paciente.logradouro}
          </Box>
        </Box>
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="flex-end"
        width="30%"
        maxWidth="240px"
        minWidth="180px"
      >
        <Button>
          <ButtonMui
            variant="contained"
            className={classes.buttonMui}
            onClick={sendToMedic}
          >
            <ArrowSend
              className={classes.colorSecondary}
              width="40px"
              height="40px"
            />
            <Box component="p" className={classes.colorSecondary}>
              ENVIAR PRONTUÁRIO
            </Box>
          </ButtonMui>
        </Button>
        <Button onClick={() => history.push(`/prontuarios/${prontuario.id}`)}>
          <ButtonMui variant="contained" className={classes.buttonMui}>
            <ClipBoard
              className={classes.colorSecondary}
              width="30px"
              height="30px"
            />
            <Box component="p" className={classes.colorSecondary}>
              VER PRONTUÁRIO
            </Box>
          </ButtonMui>
        </Button>
      </Box>
    </Container>
  );
}
