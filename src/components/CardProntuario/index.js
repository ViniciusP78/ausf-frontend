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

export default function ImgMediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
        <Box display="flex" alignSelf="center"><Avatar/></Box>
        <Box>
            <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
                Lizard
            </Typography>
            </CardContent>
            
        </Box>
            <CardActions>
            <Box display="flex" alignSelf="center" flexDirection="column">
                <Button size="small" className={classes.button}>
                Visualizar Informações
                </Button>
                <Button size="small" disabled={true}>
                Histórico De Triagens
                </Button>
                </Box>
            </CardActions>
    </Card>
  );
}
