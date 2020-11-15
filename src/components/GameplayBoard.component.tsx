import React, { useEffect, useState } from 'react';
import GameplayDeck from './GameplayDeck.component';
import Layout from './Layout.component';
import CompletionPiles from './CompletionPiles.component';
import { ICard } from '../models/Card';
import { Deck } from '../models/Deck';
import '../styles/Card.css';
import '../styles/Board.css';

const GameplayBoard = () => {
  let initialGameplayDeck: ICard[] = new Deck().shuffle()
  let initialLayoutDeck: ICard[] = []

  const [gameplayDeck, setGamePlayDeck] = useState([...initialGameplayDeck])

  const [layoutDeck, setLayoutDeck] = useState(initialLayoutDeck)

  let setUp = () => {
    let deck = new Deck().shuffle()
    setLayoutDeck([...deck.slice(0, 28)])
    setGamePlayDeck([...deck.slice(29)])
  }

  useEffect(() => {setUp()}, [])

  return (
    <div id="gamePlayBoard">
      <div className="boardTop">
        <GameplayDeck deckCards={gameplayDeck} />
        <CompletionPiles />
      </div>
      <Layout layoutCards={layoutDeck}/>
    </div>
  );
}

export default GameplayBoard;
