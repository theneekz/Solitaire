import React, { useState, useEffect } from 'react';
import { Card, ICard } from '../models/Card'
import { ICompletionPilesProps, ICardComponentProps } from '../models/Props'
import CardComponent from './Card.component';

const SuitPile: React.FC<ICompletionPilesProps> = ( props: ICompletionPilesProps ) => {
  const initialSuitPileState: ICard[] = []

  let [ suitPileCards, setSuitPileCards ] = useState(initialSuitPileState)

  let { isValidDropSite, setIsValidDropSite } = props

  const handleDrop = (event: React.DragEvent): void => {
    // if (isValidDropSite) {
      let payload = JSON.parse(event.dataTransfer.getData('text'))
      let draggedPileCards: ICard[] = payload.map((receivedCard: ICard) => new Card(receivedCard.suit, receivedCard.cardValue, receivedCard.faceUp, receivedCard.suitImage))
  
      setSuitPileCards((suitPileCards) => [...suitPileCards, ...draggedPileCards])
      //setIsValidDropSite(false)
    // }
  }

  const handleDragOver = (event: React.DragEvent): void => {
    event.preventDefault()
    setIsValidDropSite(true)
  }

  const handleDragLeave = (event: React.DragEvent): void => {
    event.preventDefault()
    setIsValidDropSite(false)
  }

  const cardProps: ICardComponentProps = {
    card: suitPileCards[suitPileCards.length - 1],
    isValidDropSite: props.isValidDropSite, 
    setIsValidDropSite: props.setIsValidDropSite
  }

  useEffect(() => {}, [suitPileCards])

  return (
    <div
    onDragOver={event=>handleDragOver(event)}
    onDragLeave={event=>handleDragLeave(event)}
    onDrop={(e)=>handleDrop(e)}
    >
    { suitPileCards.length ?
      <CardComponent key={suitPileCards[suitPileCards.length-1].cardValue + suitPileCards[suitPileCards.length-1].suit}
      {...cardProps} />
      :
      <div className="emptyCardPile"
      >SuitPile</div>
    }
    </div>
  );
};

export default SuitPile;
