import React from 'react';
import SuitPile from './SuitPile.component'

const CompletionPiles = () => {
  return (
    <div className="completionPiles">
      <SuitPile />
      <SuitPile />
      <SuitPile />
      <SuitPile />
    </div>
  )
}

export default CompletionPiles
