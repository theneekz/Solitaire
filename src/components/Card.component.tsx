import React from 'react';
import { ICard, HomeComponent } from '../models/Card'

export interface IProps {
  card: ICard,
  homeComponent?: HomeComponent,
  i?: number
}

const CardComponent: React.FC<IProps> = (props: IProps) => {

  const { card, homeComponent, i } = props

  let handleDragStart = (event: React.DragEvent) => {
    if (event.dataTransfer && event.target) {
      event.dataTransfer.effectAllowed = 'move'
      event.dataTransfer.setData('text', JSON.stringify(card))
    }
  }

  const style = i !== undefined && i > -1 && homeComponent === HomeComponent.LayoutPileComponent ? {marginTop:`${i*5 + 10}px`} : {marginTop: 'default'}
  return (
    <>
    {card ? card.faceUp ?
      <div className='card faceUp'
        id={`${card.getDisplayValue()}${card.suit}`}
        style={style}
        draggable="true"
        onDragStart={(e)=>handleDragStart(e)}
      >
        <p>{`${card.getDisplayValue()} of`}</p>
        <p>{`${card.suit}s`}</p>
      </div> :
      <div
        key={card.cardValue + card.suit}
        className='card faceDown'
        style={style}
      ></div> :
      <div className="emptyCardPile">Empty Pile</div>
    }
    </>
  )
}
export default CardComponent
