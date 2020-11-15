export enum Suit {
  CLUB = 'club',
  SPADE = 'spade',
  DIAMOND = 'diamond',
  HEART = 'heart'
}

export enum CardValue {
  ACE,
  TWO,
  THREE,
  FOUR,
  FIVE,
  SIX,
  SEVEN,
  EIGHT,
  NINE,
  TEN,
  JACK,
  QUEEN,
  KING
}

export type ICard = {
  suit: Suit,
  cardValue: CardValue,
  faceUp?: boolean,
  suitImage?: string
}

export class Card {
  constructor(suit: Suit, cardValue: CardValue, faceUp?: boolean, suitImage?: string) {
    return {suit, cardValue, faceUp, suitImage} as ICard
  }
}
