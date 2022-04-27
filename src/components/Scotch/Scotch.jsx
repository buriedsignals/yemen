import gsap from 'gsap';
import { useEffect, useRef } from 'react';
import * as Style from './Scotch.syles'

export default function Scotch({ animate = false, orientation }) {
  const scotchRef = useRef(null);
  useEffect(() => {
    if (animate) {
      const tl = gsap.timeline()
      if (scotchRef.current) {
        tl.fromTo(scotchRef.current, 1, {opacity: 0, y: orientation == 'left' ? '-500px' : '500px' }, {opacity: 0.05, y: 0}, '+=2')
      }
      return () => {
        if (tl) {
          tl.kill()
        }
      }
    }
  }, []);
  return (
    <Style.ScotchContainer ref={scotchRef} orientation={orientation} className='ScotchContainer'>
    </Style.ScotchContainer>
  )
}
