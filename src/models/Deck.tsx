import { ICard, Suit, CardValue  } from './Card'

let suitArr = [Suit.HEART, Suit.DIAMOND, Suit.CLUB, Suit.SPADE]

let valueArr = [
  CardValue.ACE,
  CardValue.TWO,
  CardValue.THREE,
  CardValue.FOUR,
  CardValue.FIVE,
  CardValue.SIX,
  CardValue.SEVEN,
  CardValue.EIGHT,
  CardValue.NINE,
  CardValue.TEN,
  CardValue.JACK,
  CardValue.QUEEN,
  CardValue.KING
]

const suitBuilder = (suit: Suit) => {
  return valueArr.map(val => {
    return {
      suit,
      cardValue: val,
      faceUp: false
    } as ICard
  })
}

let deckCards: ICard[] = suitArr.map(suit => suitBuilder(suit)).flat()

export class Deck {
  //for new games, rebuild deck and randomize
  shuffle(): ICard[] {
    let currentIndex = deckCards.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex !== 0) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = deckCards[currentIndex];
      deckCards[currentIndex] = deckCards[randomIndex];
      deckCards[randomIndex] = temporaryValue;
    }

    return deckCards
  }
}
