import React, {useState} from 'react';
import { ICard } from '../models/Card'
import CardComponent from './Card.component';

const GameplayDeck = ({deckCards}: {deckCards: ICard[]}) => {
  let faceUpCards: ICard[] = []

  const [faceUp, setFaceUp] = useState(faceUpCards)
  const [faceDown, setFaceDown] = useState(deckCards)

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
    <div id="gameplayDeck">
      <button onClick={() => {drawThree()}}>Draw</button>
      <div id="deckFacedownCards">
        {faceDown.length ? faceDown.map(card => (
          <CardComponent key={card.cardValue + card.suit} card={card}/>
        )) :
          <p>No face down Cards</p>
        }
      </div>
      <div id="deckFaceupCards" style={{backgroundColor: "red"}}>
        {faceUp.length ? faceUp.map(card => (
          <CardComponent key={card.cardValue + card.suit} card={card}/>
        )) :
        <p>No face up cards</p>
      }
      </div>
    </div>
  );
}

export default GameplayDeck;
