import React from 'react';
import GameplayDeck from './GameplayDeck.component';
import { ICard } from '../models/Card';
import { Deck } from '../models/Deck';
import '../styles/Card.css';

const GameplayBoard = () => {

  let gameplayDeck: ICard[] = new Deck().shuffle()

  return (
    <div id="gamePlayBoard">
      <GameplayDeck deckCards={gameplayDeck} />
    </div>
  );
}

export default GameplayBoard;
