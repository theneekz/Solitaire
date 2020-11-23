import { ICard, HomeComponent } from './Card'

export interface ICompletionPilesProps {
  isValidDropSite: boolean, 
  setIsValidDropSite: (valid: boolean) => void
}

export interface ICardComponentProps {
  card: ICard,
  isValidDropSite: boolean, 
  setIsValidDropSite: (valid: boolean) => void,
  homeComponent?: HomeComponent,
  i?: number,
  accessLayoutPileCards?: (i: number) => ICard[],
  filterHandleDragEnd?: (i: number) => void
}

export interface IGameplayDeckProps {
  deckCards: ICard[], 
  isValidDropSite: boolean, 
  setIsValidDropSite: (valid: boolean) => void
}

export interface ILayoutProps {
  layoutCards: ICard[], 
  isValidDropSite: boolean, 
  setIsValidDropSite: (valid: boolean) => void
}

export interface ILayoutPileProps {
  pileCards: ICard[], 
  isValidDropSite: boolean, 
  setIsValidDropSite: (valid: boolean) => void
}