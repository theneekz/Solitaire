import React from 'react';
import { ICard } from '../models/Card'

const CardComponent = ({card}: {card: ICard}) => {
  console.log(card)

  return (
    <div className="card">
      <p>{`${card.getDisplayValue()} of ${card.suit}s`}</p>
    </div>
  )
}
export default CardComponent
