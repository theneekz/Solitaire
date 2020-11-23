import React, { useState, useEffect } from 'react';
import { Card, HomeComponent, ICard } from '../models/Card'
import CardComponent from './Card.component'
import { ICardComponentProps, ILayoutPileProps } from '../models/Props'

const LayoutPile: React.FC<ILayoutPileProps> = (props: ILayoutPileProps ) => {
  let { pileCards, isValidDropSite, setIsValidDropSite } = props

  const defaultEmptyPile: ICard[] = []

  let [layoutPileCards, setLayoutPileCards] = useState(pileCards)

  const flipCard = (): void => {
    if (layoutPileCards.length && !layoutPileCards[layoutPileCards.length - 1].faceUp) {
      let tempArr = [...layoutPileCards]
      let flipped: ICard = tempArr[tempArr.length - 1]
      tempArr = tempArr.slice(0, -1)

      flipped.faceUp = true
      tempArr.push(flipped)
      setLayoutPileCards(tempArr)
    }
  }

  const handleDrop = (event: React.DragEvent): void => {
    if (isValidDropSite){
      let payload = JSON.parse(event.dataTransfer.getData('text'))
      let draggedPileCards: ICard[] = payload.map((receivedCard: ICard) => new Card(receivedCard.suit, receivedCard.cardValue, receivedCard.faceUp, receivedCard.suitImage))
  
      setLayoutPileCards((layoutPileCards) => [...layoutPileCards, ...draggedPileCards])
      //setIsValidDropSite(false)
    }
  }

  const handleDragOver = (event: React.DragEvent): void => {
    event.preventDefault()
    setIsValidDropSite(true)
  }

  const handleDragLeave = (event: React.DragEvent): void => {
    event.preventDefault()
    setIsValidDropSite(false)
  }

  const accessLayoutPileCards = (i: number): ICard[] => {
    return layoutPileCards.slice(i)
  }

  const filterHandleDragEnd = (i: number): void => {
    setLayoutPileCards(layoutPileCards => {
      const card = layoutPileCards[i - 1]
      if (!card) return defaultEmptyPile
      const flippedCard = new Card(card.suit, card.cardValue, true, card.suitImage)
      return [...layoutPileCards.slice(0, i - 1), flippedCard]
    })
  }

  useEffect(() => {
    flipCard()
  }, [])

  useEffect(() => {}, [layoutPileCards])
  return (
    <div className="layoutPile"
      onDragOver={event=>handleDragOver(event)}
      onDragLeave={event=>handleDragLeave(event)}
      onDrop={(e)=>handleDrop(e)}
    >
      {layoutPileCards.map((card: ICard, i: number) => {
        const props: ICardComponentProps = {
          card,
          isValidDropSite, 
          setIsValidDropSite,
          homeComponent: HomeComponent.LayoutPileComponent,
          i,
          accessLayoutPileCards,
          filterHandleDragEnd
        }
        return <CardComponent {...props} key={card.cardValue + card.suit} />
      })
    }
   </div>
  );
};

export default LayoutPile;
