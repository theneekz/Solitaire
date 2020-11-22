import React, {useState, useEffect} from 'react';
import { ICard } from '../models/Card'
import CardComponent from './Card.component';
import '../styles/Deck.css'

// interface IProps {
//   deckCards: ICard[],
//   handleDragStart: (event: React.DragEvent, selectedCards: ICard[]) => void,
//   draggedCards: ICard[]
// }

const GameplayDeck = ({deckCards}: {deckCards: ICard[]}) => {
  let faceUpCards: ICard[] = []

  const [faceUp, setFaceUp] = useState(faceUpCards)
  const [faceDown, setFaceDown] = useState(deckCards)

  useEffect(()=>{
    setFaceDown(deckCards)
    setFaceUp(faceUpCards => faceUpCards)
  },[deckCards])

  const drawThree = (): void => {
    if (faceDown.length) {
      let newDraws: ICard[] = faceDown.slice(-3).map((card: ICard) => {
        card.faceUp = true
        return card
      })
      setFaceUp([...newDraws, ...faceUp])
      setFaceDown([...faceDown.slice(0, -3)])
    } else {
      faceUp.forEach(card => card.faceUp = false)
      setFaceDown([...faceUp])
      setFaceUp(faceUpCards)
    }
  }

  return (
    <div id="gamePlayDeck">
      <div id="deckFaceDownCards" onClick={() => {drawThree()}}>
        {faceDown.length ?
          <div className="faceDownCard"></div> :
          <div className="emptyCardPile">No face down Cards</div>
        }
      </div>
      <div id="deckFaceUpCards">
        {faceUp.length ? faceUp.slice(0, 3).map(card => (
          <CardComponent key={card.cardValue + card.suit} card={card} />
        )) :
        <div className="emptyCardPile">No face up cards</div>
      }
      </div>
    </div>
  );
}

export default GameplayDeck;
