import React, { useState, useEffect } from 'react';
import { Card, ICard } from '../models/Card'
import CardComponent from './Card.component';

const SuitPile = () => {
  const initialSuitPileState: ICard[] = []

  let [ suitPileCards, setSuitPileCards ] = useState(initialSuitPileState)

  const handleDrop = (event: React.DragEvent) => {
    let receivedCard = JSON.parse(event.dataTransfer.getData('text')) as ICard
    let newCard = new Card(receivedCard.suit, receivedCard.cardValue, receivedCard.faceUp, receivedCard.suitImage)
    setSuitPileCards((suitPileCards) => [...suitPileCards, newCard])

  }

  useEffect(() => {}, [suitPileCards])

  return (
    <div
    onDragOver={event=>{event.preventDefault()}}
    onDrop={(e)=>handleDrop(e)}
    >
    { suitPileCards.length ?
      <CardComponent key={suitPileCards[suitPileCards.length-1].cardValue + suitPileCards[suitPileCards.length-1].suit}
      card={suitPileCards[suitPileCards.length-1]}/>
      :
      <div className="emptyCardPile"
      >SuitPile</div>
    }
    </div>
  );
};

export default SuitPile;
