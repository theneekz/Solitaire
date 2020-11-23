import React, {useState, useEffect} from 'react';
import { ICard } from '../models/Card';
import { ILayoutProps, ILayoutPileProps } from '../models/Props'
import LayoutPile from './LayoutPile.component'

const Layout: React.FC<ILayoutProps> = ( props: ILayoutProps ) => {
  let { layoutCards, isValidDropSite, setIsValidDropSite } = props

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
      {layoutPiles.map((pile, i) => {
        const layoutPileProps: ILayoutPileProps = {
          pileCards: pile,
          isValidDropSite, 
          setIsValidDropSite
        }
        return <LayoutPile key={"pile"+i} {...layoutPileProps}/>
      })}
    </div>
  );
};

export default Layout;
