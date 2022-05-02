import * as Style from './LinkPage.syles'

import Link from 'next/dist/client/link'
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function LinkPage({ animate = false, children, ...props }) {
  const linkRef = useRef(null);
  useEffect(() => {
    if (animate) {
      const tl = gsap.timeline()
      if (linkRef.current) {
        tl.fromTo(linkRef.current, 1, {opacity: 0}, {opacity: 1}, '+=2')
      }
      return () => {
        if (tl) {
          tl.kill()
        }
      }
    }
  }, []);
  return (
    <>
      {
        props.href.indexOf('http') === -1 ?
          <Link {...props}>
            <Style.LinkPageContainer ref={linkRef} className="linkPage">
            <span>{ children }</span>
            </Style.LinkPageContainer>
          </Link>
        :
          <Style.LinkPageContainer {...props} ref={linkRef} className="linkPage">
          <span>{ children }</span>
          </Style.LinkPageContainer>
      }
    </>
  )
}
