import React, { useEffect, useState } from 'react';
import GameplayDeck from './GameplayDeck.component';
import Layout from './Layout.component';
import CompletionPiles from './CompletionPiles.component';
import { ICard } from '../models/Card';
import { Deck } from '../models/Deck';
import { ICompletionPilesProps, IGameplayDeckProps, ILayoutProps } from '../models/Props'
import '../styles/Card.css';
import '../styles/Board.css';

const GameplayBoard = () => {
  let initialGameplayDeck: ICard[] = new Deck().shuffle()
  let initialLayoutDeck: ICard[] = []

  const [gameplayDeck, setGamePlayDeck] = useState([...initialGameplayDeck])

  const [layoutDeck, setLayoutDeck] = useState(initialLayoutDeck)

  const [isValidDropSite, setIsValidDropSite] = useState(false)

  let setUp = () => {
    let deck = new Deck().shuffle()
    setLayoutDeck([...deck.slice(0, 28)])
    setGamePlayDeck([...deck.slice(29)])
  }

  useEffect(() => {setUp()}, [])

  const completionPileProps: ICompletionPilesProps = {
    isValidDropSite, setIsValidDropSite
  }

  const gameplayDeckProps: IGameplayDeckProps = {
    deckCards: gameplayDeck, 
    isValidDropSite, 
    setIsValidDropSite
  }

  const layoutProps: ILayoutProps = {
    layoutCards: layoutDeck, 
    isValidDropSite, 
    setIsValidDropSite
  }

  return (
    <div id="gamePlayBoard">
      <div className="boardTop">
        <GameplayDeck  {...gameplayDeckProps} />
        <CompletionPiles {...completionPileProps} />
      </div>
      <Layout {...layoutProps}/>
    </div>
  );
}

export default GameplayBoard;
