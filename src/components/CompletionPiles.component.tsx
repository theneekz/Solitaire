import React from 'react';
import SuitPile from './SuitPile.component'
import { ICompletionPilesProps } from '../models/Props'

const CompletionPiles:  React.FC<ICompletionPilesProps> = ( props: ICompletionPilesProps ) => {
  return (
    <div className="completionPiles">
      <SuitPile {...props}/>
      <SuitPile {...props}/>
      <SuitPile {...props}/>
      <SuitPile {...props}/>
    </div>
  )
}

export default CompletionPiles
