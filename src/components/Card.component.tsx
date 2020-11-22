import React from 'react';
import { ICard } from '../models/Card'

const CardComponent = ({card}: {card: ICard}) => {
  let handleDragStart = (event: React.DragEvent) => {
    if (event.dataTransfer && event.target) {
      event.dataTransfer.effectAllowed = 'move'
      const id = (event.target as HTMLDivElement).id
      event.dataTransfer.setData('text', id)
      //event.dataTransfer.setDragImage(event.target.parentNode, 20, 20)
    }
  }
  return (
    <div className="card"
    id={`${card.getDisplayValue()}${card.suit}`}
    draggable="true"
    onDragStart={(e)=>handleDragStart(e)}
    onDrop={()=>console.log('drag ended')}
    >
      <p>{`${card.getDisplayValue()} of`}</p>
      <p>{`${card.suit}s`}</p>
    </div>
  )
}
export default CardComponent
