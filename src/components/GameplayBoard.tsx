import React from 'react';
import GameplayDeck from './Gameplay-Deck';
import { ICard } from '../models/Card';
import { Deck } from '../models/Deck';

const GameplayBoard = () => {

  let gameplayDeck: ICard[] = new Deck().shuffle()

  return (
    <div id="gameplayBoard">
      <GameplayDeck deckCards={gameplayDeck} />
    </div>
  );
}

export default GameplayBoard;
