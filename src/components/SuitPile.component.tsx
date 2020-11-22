import React, { useState } from 'react';
import { Card, ICard } from '../models/Card'
import CardComponent from './Card.component';

const SuitPile = () => {
  const initialSuitPileState: ICard[] = []

  let [ suitPileCards, setSuitPileCards ] = useState(initialSuitPileState)

  const handleDrop = (event: React.DragEvent) => {
    let receivedCard = JSON.parse(event.dataTransfer.getData('text')) as ICard
    // console.log(JSON.parse(event.dataTransfer.getData('text')) as ICard)
    let newCard = new Card(receivedCard.suit, receivedCard.cardValue, receivedCard.faceUp, receivedCard.suitImage)
    // console.log(newCard)
    // console.log()
    setSuitPileCards((suitPileCards) => [newCard, ...suitPileCards])
    // setTimeout(() => console.log(suitPileCards), 1000)
  }


  return (
    <>
    { suitPileCards.length ?
      <CardComponent key={suitPileCards[0].cardValue + suitPileCards[0].suit}
      card={suitPileCards[0]}/>
      :
      <div className="emptyCardPile"
      onDragOver={event=>{event.preventDefault()}}
      onDrop={(e)=>handleDrop(e)}
      >SuitPile</div>
    }
    </>
  );
};

export default SuitPile;
