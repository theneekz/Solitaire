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

export interface ICard {
  suit: Suit
  cardValue: CardValue
  faceUp: boolean
  suitImage: string
  getDisplayValue():void
}

export class Card implements ICard{
  suit: Suit;
  cardValue: CardValue;
  faceUp: boolean;
  suitImage: string;

  constructor(suit: Suit, cardValue: CardValue, faceUp: boolean, suitImage: string = '') {
      this.suit = suit;
      this.cardValue = cardValue;
      this.faceUp = faceUp;
      this.suitImage = suitImage
  }

  getDisplayValue(): string {
    switch (this.cardValue) {
      case CardValue.ACE: return 'A';
      case CardValue.TWO: return '2';
      case CardValue.THREE: return '3';
      case CardValue.FOUR: return '4';
      case CardValue.FIVE: return '5';
      case CardValue.SIX: return '6';
      case CardValue.SEVEN: return '7';
      case CardValue.EIGHT: return '8';
      case CardValue.NINE: return '9';
      case CardValue.TEN: return '10';
      case CardValue.JACK: return 'J';
      case CardValue.QUEEN: return 'Q';
      case CardValue.KING: return 'K';
      default: return 'U Suck'
    }
      // return 'aaaa'
  }
}
