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
      {pileCards.length ? pileCards.map(card => {
          if(card.faceUp) {
            return <div key={card.cardValue + card.suit} className="card layoutCard">{`${card.getDisplayValue()} of ${card.suit}s`}</div>
          } else {
            return <div key={card.cardValue + card.suit} className="card faceDownCard"></div>
          }
      }): <div className="emptyCardPile">Empty Pile</div>}
    </div>
  );
};

export default LayoutPile;
