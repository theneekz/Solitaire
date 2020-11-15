import React, {useState, useEffect} from 'react';
import { ICard } from '../models/Card';
import LayoutPile from './LayoutPile.component'

const Layout = ({layoutCards}: {layoutCards: ICard[]}) => {
  let initialLayoutPiles: ICard[][] = []
  const [layoutPiles, setLayoutPiles] = useState(initialLayoutPiles)

  useEffect(()=>{
    let deal = () => {
      let index = 0
      for (let i = 1; i < 8; i ++) {
        let tempArr = layoutCards.slice(index, index+i)
        setLayoutPiles(layoutPiles => [...layoutPiles, tempArr])
        index += i
      }
    }
    if (layoutCards.length) deal()
  }, [layoutCards])

  return (
    <div className="boardBottom">
      {layoutPiles.map((pile, i) => (
        <LayoutPile key={"pile"+i} pileCards={pile}/>
      ))}
    </div>
  );
};

export default Layout;
