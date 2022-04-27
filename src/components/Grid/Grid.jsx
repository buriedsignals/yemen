import gsap from 'gsap';
import { useEffect, useRef } from 'react';
import * as Style from './Grid.syles'

export const Item = ({animate = false, index, ...props}) => {
  const itemRef = useRef(null);
  useEffect(() => {
    if (animate) {
      const tl = gsap.timeline()
      if (itemRef.current) {
        tl.fromTo(itemRef.current, 2, {opacity: 0 }, {opacity: 0.25 + (index % 5 / 10)})
      }
      return () => {
        if (tl) {
          tl.kill()
        }
      }
    }
  }, []);
  return (
    <div ref={itemRef} {...props} className='item' />
  )
}

export default function Grid({animate = false, index, ...props}) {
  const items = [...Array(15)]
  return (
    <Style.GridContainer className='gridContainer'>
      { 
        items.map((item, i) => {
          return <Item animate={animate} key={i} index={i} className='item' />
        })
      }
    </Style.GridContainer>
  )
}
