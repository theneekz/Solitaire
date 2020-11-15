import React from 'react';
import { ICard } from '../models/Card'

const CardComponent = ({card}: {card: ICard}) => {
  return (
    <div className="card">
      <p>{`${card.getDisplayValue()} of`}</p>
      <p>{`${card.suit}s`}</p>
    </div>
  )
}
export default CardComponent
