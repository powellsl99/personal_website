import React from 'react';
import { Typography, Card, Tabs, Tab } from "@material-ui/core"
import BioCard from "./BioCard.js"
import WorkCard from "./WorkCard.js"
import useStyles from "./CardViewControllerStyles.js"

const CardViewController = () => {
  const classes = useStyles();
  const [cardIndex, setCardIndex] = React.useState(0)
  const numberOfCards = 2

  const handleNextCard = event => {
      cardIndex < numberOfCards-1 ? setCardIndex(cardIndex+1) : setCardIndex(0);
  };

  const handlePreviousCard = event => {
    cardIndex > 0 ? setCardIndex(cardIndex-1) : setCardIndex(numberOfCards-1);
  };

  const handleNextTab = (event, newValue) => {
    setCardIndex(newValue);
  };

  function handleKeyPress(event){
    if(event.key === 'Enter'){
      return handleNextCard
    }
  }

  return (
      <div>
          <Tabs
            value={cardIndex}
            onChange={handleNextTab}
            indicatorColor="secondary"
            centered
            className={classes.tabs}
          >
            <Tab label="About Me" />
            <Tab label="Work Experience" />
          </Tabs>
          {cardIndex === 0 && <BioCard index={cardIndex} handleNextKey={handleKeyPress} handleNextCard={handleNextCard} handlePreviousCard={handlePreviousCard}></BioCard>}
          {cardIndex === 1 && <WorkCard index={cardIndex} handleNextKey={handleKeyPress} handleNextCard={handleNextCard} handlePreviousCard={handlePreviousCard}></WorkCard>}
          <div className={classes.tabs}>
            <Typography className={classes.disclaimer}>Note: This wesbite is a work in progress that was started in June 2020</Typography>
          </div>
      </div>
  );
}

export default CardViewController;