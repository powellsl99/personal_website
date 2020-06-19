import React, {useEffect, useCallback} from 'react';
import { Typography, Card , IconButton, Grid, Button, Avatar, Container, Link} from "@material-ui/core"
import useStyles from "./GenericCardStyles.js"
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import BioCardText from './BioCardText.js'

const BioCard = (props) => {
  const {text, index, handleNextCard, handlePreviousCard, handleNextKey} = props;
  const classes = useStyles();

  const navigateArrows = useCallback((event) => {
    if(event.keyCode === 37) {
      handlePreviousCard()
    } else if (event.keyCode === 39) {
      handleNextCard()
    }
  }, []);

  useEffect(() => {
    document.addEventListener("keydown", navigateArrows, false);

    return () => {
      document.removeEventListener("keydown", navigateArrows, false);
    };
  }, []);

  return (
    <Card className = {classes.genericCard} bgcolor="teal">
      <Grid container xs={12}>
        <Grid item>
        <Button onClick={handlePreviousCard}><NavigateBeforeIcon className={classes.navigateButton}></NavigateBeforeIcon></Button>
        </Grid>
        <Grid item className={classes.centerGrid}>
          <Container className = {classes.centerContent}>
            <Typography align="center" className={classes.header}>Sean Powell</Typography>
            <Grid container>
              <Grid item>
                <Avatar className={classes.avatarPic} src="https://avatars0.githubusercontent.com/u/47537417?s=460&u=ee97281ce72812327e3bc550cbca9513ead08c85&v=4"></Avatar>
              </Grid>
              <Grid item>
                  <BioCardText className={classes.bioText}></BioCardText>
              </Grid>
            </Grid> 
          </Container>
        </Grid>
        <Grid item>
            <Button onClick={handleNextCard}><NavigateNextIcon className={classes.navigateButton}></NavigateNextIcon></Button>
        </Grid>
      </Grid>
    </Card>
  );
}

export default BioCard;
