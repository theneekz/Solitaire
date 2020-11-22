import React, { useState, useEffect } from 'react';
import { Card, HomeComponent, ICard } from '../models/Card'
import CardComponent, { IProps } from './Card.component'
// import { IProps } from './Card.component'

const LayoutPile = ({pileCards}: {pileCards: ICard[]}) => {
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

  const handleDrop = (event: React.DragEvent) => {
    console.log('drop')
    let payload = JSON.parse(event.dataTransfer.getData('text'))
    let draggedPileCards: ICard[] = payload.map((receivedCard: ICard) => new Card(receivedCard.suit, receivedCard.cardValue, receivedCard.faceUp, receivedCard.suitImage))

    setLayoutPileCards((layoutPileCards) => [...layoutPileCards, ...draggedPileCards])
  }

  // const handleDragStart = (event: React.DragEvent) => {
  //   console.log('drag start')
  //   let payload
  //   let targetId = (event.target as HTMLDivElement).id
  //   for (let i = 0; i < layoutPileCards.length; i++){
  //     let thisCard = layoutPileCards[i]
  //     let thisCardId = thisCard.getDisplayValue() + thisCard.suit
  //     if (thisCardId === targetId) {
  //       payload = layoutPileCards.slice(i)
  //       if (i !== 0){
  //         //let tempArr = [...layoutPileCards.slice(0, i)]
  //         //setLayoutPileCards(tempArr)
  //       } else {
  //         //let emptyArr: ICard[] = []
  //         //setLayoutPileCards(emptyArr)
  //       }
  //       break
  //     }
  //   }
  //   if (event.dataTransfer && event.target) {
  //     event.dataTransfer.effectAllowed = 'move'
  //     event.dataTransfer.setData('text', JSON.stringify(payload))
  //   }
  // }

  const accessLayoutPileCards = (i: number): ICard[] => {
    return layoutPileCards.slice(i)
  }

  const filterHandleDragEnd = (i: number): void => {
    setLayoutPileCards(layoutPileCards => [...layoutPileCards.slice(0, i)])
  }

  useEffect(() => {
    flipCard()
  }, [])

  useEffect(() => {}, [layoutPileCards])

  return (
    <div className="layoutPile"
    onDragOver={event=>{event.preventDefault()}}
      onDrop={(e)=>handleDrop(e)}
    >
      {layoutPileCards.map((card: ICard, i: number) => {
        const props: IProps = {
          card,
          homeComponent: HomeComponent.LayoutPileComponent,
          i,
          accessLayoutPileCards,
          filterHandleDragEnd
        }
        // if (card.faceUp) console.log('shown', card.getDisplayValue(), ' of ', card.suit, 's')
        // if (!card.faceUp) console.log('hidden', card.getDisplayValue(), ' of ', card.suit, 's')
        return (
         // <div
          //draggable="true"
          // onDragStart={e=>handleDragStart(e)}
          //onDragOver={e=>handleDragOver(e)}
          //key={card.cardValue + card.suit}
         // >
            <CardComponent
            {...props}
            key={card.cardValue + card.suit}
            />
         // </div>
        )
      })
    }
   </div>
  );
};

export default LayoutPile;
