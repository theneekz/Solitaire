import React from 'react';
import GameplayDeck from './GameplayDeck.component';
import Layout from './Layout.component';
import CompletionPiles from './CompletionPiles.component';
import { ICard } from '../models/Card';
import { Deck } from '../models/Deck';
import '../styles/Card.css';
import '../styles/Board.css';

const GameplayBoard = () => {
  let gameplayDeck: ICard[] = new Deck().shuffle()

  return (
    <div id="gamePlayBoard">
      <div className="boardTop">
        <GameplayDeck deckCards={gameplayDeck} />
        <CompletionPiles />
      </div>
      <Layout />
    </div>
  );
}

export default GameplayBoard;
