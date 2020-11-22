import React from 'react';

const SuitPile = () => {
  return (
    <div className="emptyCardPile"
    onDragOver={event=>{event.preventDefault()}}
    onDrop={(e)=>console.log(e.dataTransfer.getData('text'))}
    >SuitPile</div>
  );
};

export default SuitPile;
