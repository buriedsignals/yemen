import { colorRed, colorWhite } from '@/helpers/styles';
import gsap from 'gsap';
import { useEffect, useRef } from 'react';
import * as Style from './Line.syles'

export default function Line({ animate = false, children }) {
  const lineRef = useRef(null);
  useEffect(() => {
    if (animate) {
      const tl = gsap.timeline()
      if (lineRef.current) {
        tl.fromTo(lineRef.current, 1.5, {scaleX: 0}, {scaleX: 1, ease: "expo.out"}, '+=.5')
        tl.fromTo(lineRef.current, 1, {background: `linear-gradient(90deg, ${colorRed} 0%, ${colorWhite} 0%)`}, {background: `linear-gradient(90deg, ${colorRed} 15%, ${colorWhite} 15%)`, ease: "expo.out"}, '-=1')
      }
      return () => {
        if (tl) {
          tl.kill()
        }
      }
    }
  }, []);
  return (
    <Style.LineContainer ref={lineRef} className='line'>
    </Style.LineContainer>
  )
}
