import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Avatar from "components/Avatar"
import Box from '@material-ui/core/Box';
import useStyles from './style';
import Icon from '@material-ui/core/Icon';
import ReplyIcon from '@material-ui/icons/Reply';
import PermContactCalendarIcon from '@material-ui/icons/PermContactCalendar';
import { Container} from './style';

export default function ImgMediaCard() {
  const classes = useStyles();

  return (
    <Container>
      <Box width="20%" alignSelf="center">
       <Avatar/>
      </Box>
      <Box width="50%" display="flex" flexDirection="column" alignItems="start" justifyContent="center">
        <Box component="h2">
          Nome
        </Box>
        <Box component="p">
          Nome
        </Box>
      </Box>
      <Box width="30%" display="flex" flexDirection="column" alignItems="flex-end">
        <Box display="flex" maxWidth="230px" fontWeight="500" height="50%" width="100%" justifyContent="space-around" alignItems="center" border="1px solid #DEDEDE" bgcolor="#EFEFEF">
          <ReplyIcon className={classes.iconTransform} fontSize="large"/>
          <Box component="p">ENVIAR PRONTUÁRIOS</Box>
        </Box>
        <Box display="flex" maxWidth="230px" fontWeight="500" height="50%" width="100%" justifyContent="space-around" alignItems="center" border="1px solid #DEDEDE" bgcolor="#EFEFEF">
          <PermContactCalendarIcon fontSize="large"/>
          <Box component="p">VER PRONTUÁRIO</Box>
        </Box>
      </Box>
    </Container>
  );
}
