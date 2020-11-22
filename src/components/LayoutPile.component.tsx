import React, { useState, useEffect } from 'react';
import { ICard } from '../models/Card'

const LayoutPile = ({pileCards}: {pileCards: ICard[]}) => {
  let initialLayoutPileCards: ICard[] = []
  let [layoutPileCards, setLayoutPileCards] = useState(initialLayoutPileCards)

  useEffect(() => {
    layoutPileCards = pileCards
    flipCard()
  }, pileCards)

  const flipCard = (): void => {
    if (layoutPileCards.length) {
      let flipped = layoutPileCards[0]
      flipped.faceUp = true
      setLayoutPileCards([flipped, ...layoutPileCards.slice(1)])
    }
  }

  return (
    <div>
      {pileCards.length ? pileCards.map((card, i) => {
          if(card.faceUp) {
            return <div
              key={card.cardValue + card.suit}
              className="card layoutCard layoutFaceUpStack"
              style={{marginTop:`${(pileCards.length-i)*5}px`}}
            >{`${card.getDisplayValue()} of ${card.suit}s`}</div>
          } else {
            return <div
              key={card.cardValue + card.suit}
              className="card faceDownCard layoutFaceDownStack"
              style={{marginTop:`${i*5}px`}}
            ></div>
          }
      }): <div className="emptyCardPile">Empty Pile</div>}
    </div>
  );
};

export default LayoutPile;
