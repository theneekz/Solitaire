import React from 'react';
import { ICard, Card } from '../models/Card'

const CardComponent = ({card}: {card: ICard}) => {
  const task = new Card(card.suit, card.cardValue, card.faceUp)

  console.log(task, task.getDisplayValue())
  // console.log(card)

  return (
    <div className="card">
      <p>{`${card.cardValue + 1} of ${card.suit}s`}</p>
    </div>
  )
}
export default CardComponent
