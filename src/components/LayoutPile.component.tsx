import React, { useState, useEffect } from 'react';
import { HomeComponent, ICard } from '../models/Card'
import CardComponent, { IProps } from './Card.component'
// import { IProps } from './Card.component'

const LayoutPile = ({pileCards}: {pileCards: ICard[]}) => {
  let initialLayoutPileCards: ICard[] = []
  let [layoutPileCards, setLayoutPileCards] = useState(initialLayoutPileCards)

  useEffect(() => {
    layoutPileCards = pileCards
    flipCard()
  }, pileCards)

  const flipCard = (): void => {
    if (layoutPileCards.length) {
      let flipped = layoutPileCards[layoutPileCards.length - 1]
      flipped.faceUp = true
      setLayoutPileCards([flipped, ...layoutPileCards.slice(1)])
    }
  }

  return (
    <div className="layoutPile">
      {pileCards.map((card: ICard, i: number) => {
        const props: IProps = {
          card,
          homeComponent: HomeComponent.LayoutPileComponent,
          i
        }
        return <CardComponent key={card.cardValue + card.suit} {...props} />
      })
    }
   </div>
  );
};

export default LayoutPile;
