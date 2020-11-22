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
      const id = (event.target as HTMLDivElement).id
      event.dataTransfer.setData('text', id)
      //event.dataTransfer.setDragImage(event.target.parentNode, 20, 20)
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
        onDrop={()=>console.log('drag ended')}
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
