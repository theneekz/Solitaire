import React from 'react';
import { HomeComponent } from '../models/Card'
import { ICardComponentProps } from '../models/Props'


const CardComponent: React.FC<ICardComponentProps> = (props: ICardComponentProps) => {

  const { card, isValidDropSite, setIsValidDropSite, homeComponent, i, accessLayoutPileCards, filterHandleDragEnd } = props

  let handleDragStart = (event: React.DragEvent) => {
    let payload
    if (accessLayoutPileCards && typeof i === 'number'){
      payload = accessLayoutPileCards(i)
      //console.log(payload)
    }
    if (event.dataTransfer && event.target) {
      event.dataTransfer.effectAllowed = 'move'
      event.dataTransfer.setData('text', JSON.stringify(payload))
    }
  }

  const handleDragEnd = (event: React.DragEvent) => {
    event.preventDefault()
    console.log(event)
    if (filterHandleDragEnd && typeof i === 'number'){
      filterHandleDragEnd(i)
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
        onDragEnd={e=>handleDragEnd(e)}
      >
        <p>{`${card.getDisplayValue()} of`}</p>
        <p>{`${card.suit}s`}</p>
      </div> :
      <div
        key={card.cardValue + card.suit}
        className='card faceDown'
        style={style}
    >{i}</div> :
      <div className="emptyCardPile">Empty Pile</div>
    }
    </>
  )
}
export default CardComponent
