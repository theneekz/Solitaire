import React from 'react';
import { ICard } from '../models/Card'

const GameplayDeck = ({deckCards}: {deckCards: ICard[]}) => {

  const facedownCards = (): ICard[] => {
    return deckCards.filter((card: ICard) => !card.faceUp)
  }

  const faceupCards = (): ICard[] => {
    return deckCards.filter((card: ICard) => card.faceUp)
  }

  return (
    <div id="gameplayDeck">
      <div id="deckFacedownCards">
        {facedownCards().map(card => (
          <p key={card.cardValue + card.suit}>{`${card.cardValue + 1} of ${card.suit}s`}</p>
        ))}
      </div>
      <div id="deckFaceupCards">
        {faceupCards().map(card => (
          <p key={card.cardValue + card.suit}>{`${card.cardValue + 1} of ${card.suit}s`}</p>
        ))}
      </div>
        woop woop
    </div>
  );
}

export default GameplayDeck;
