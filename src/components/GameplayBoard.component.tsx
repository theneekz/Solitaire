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
  //let initialdraggedCards: ICard[] = []

  const [gameplayDeck, setGamePlayDeck] = useState([...initialGameplayDeck])

  const [layoutDeck, setLayoutDeck] = useState(initialLayoutDeck)

  //const [draggedCards, setDraggedCards] = useState(initialdraggedCards)

  let setUp = () => {
    let deck = new Deck().shuffle()
    setLayoutDeck([...deck.slice(0, 28)])
    setGamePlayDeck([...deck.slice(29)])
  }

  // let handleDragStart = (event: React.DragEvent, selectedCards: ICard[]) => {
  //   setDraggedCards(selectedCards)
  //   if (event.dataTransfer && event.target) {
  //     event.dataTransfer.effectAllowed = 'move'
  //     const id = (event.target as HTMLDivElement).id
  //     event.dataTransfer.setData('text/html', id)
  //     //event.dataTransfer.setDragImage(event.target.parentNode, 20, 20)
  //   }
  // }

  useEffect(() => {setUp()}, [])


  return (
    <div id="gamePlayBoard">
      <div className="boardTop">
        <GameplayDeck  deckCards={gameplayDeck}
        // handleDragStart={handleDragStart}
        // draggedCards={draggedCards}
        />
        <CompletionPiles />
      </div>
      <Layout layoutCards={layoutDeck}/>
    </div>
  );
}

export default GameplayBoard;
