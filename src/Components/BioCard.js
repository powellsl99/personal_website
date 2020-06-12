import React, {useEffect, useCallback} from 'react';
import { Typography, Card , IconButton, Grid, Button} from "@material-ui/core"
import useStyles from "./GenericCardStyles.js"
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';

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
          <Typography className={classes.content}>Biography</Typography>
        </Grid>
        <Grid item>
            <Button onClick={handleNextCard}><NavigateNextIcon className={classes.navigateButton}></NavigateNextIcon></Button>
        </Grid>
      </Grid>
    </Card>
  );
}

export default BioCard;
