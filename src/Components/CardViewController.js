import React from 'react';
import { Typography, Card, Tabs, Tab } from "@material-ui/core"
import BioCard from "./BioCard.js"
import WorkCard from "./WorkCard.js"
//import useStyles from "./GenericCardStyles.js"

const CardViewController = () => {
  //const classes = useStyles();
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
            style={{backgroundColor: "#add8e6", color: "white", height: window.innerHeight/17}}
          >
            <Tab label="About Me" />
            <Tab label="Work Experience" />
          </Tabs>
          {cardIndex === 0 && <BioCard index={cardIndex} handleNextKey={handleKeyPress} handleNextCard={handleNextCard} handlePreviousCard={handlePreviousCard}></BioCard>}
          {cardIndex === 1 && <WorkCard index={cardIndex} handleNextKey={handleKeyPress} handleNextCard={handleNextCard} handlePreviousCard={handlePreviousCard}></WorkCard>}
      </div>
  );
}

export default CardViewController;