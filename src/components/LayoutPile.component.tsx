import React from 'react';
import { ICard } from '../models/Card'

const LayoutPile = ({pileCards}: {pileCards: ICard[]}) => {


  const flipCard = (card: ICard):ICard => {
    card.faceUp = true
    return card
  }

  return (
    <div>
      {pileCards.length ? pileCards.map((card,i) => {
        if (i===0) {
          flipCard(card)
          return (<div key={i+'layout'} className="card layoutCard">{`${card.getDisplayValue()} of ${card.suit}s`}</div>)
        }
        //TODO: facedown pile stack border or something idk
        //return <div className="faceDownCard layoutFaceDownStack"></div>
      }): <div className="emptyCardPile">Empty Pile</div>}
    </div>
  );
};

export default LayoutPile;
