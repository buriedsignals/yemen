import gsap from 'gsap';
import { useEffect, useRef } from 'react';
import Modal from '../Modal/Modal'
import * as Style from './Credit.syles'

export default function Credit({ animate = false }) {
  const buttonRef = useRef(null);
  useEffect(() => {
    if (animate) {
      const tl = gsap.timeline()
      if (buttonRef.current) {
        tl.fromTo(buttonRef.current, 1, {opacity: 0 }, {opacity: 1}, '+=2')
      }
      return () => {
        if (tl) {
          tl.kill()
        }
      }
    }
  }, []);
  return (
    <Style.CreditContainer>
      <Modal
        className="creditModal"
        childrenButton={
          <Style.ButtonCredit ref={buttonRef}>Credits</Style.ButtonCredit>
        }
        childrenPanel={
          <Style.PanelCredit>
            <h3>Credits</h3>
            <ul>
              <li>Tom Vaillant</li>
              <li>Gregoire Ormieres</li>
              <li>Remy Dumas</li>
              <li>Hassan Saffiedine</li>
              <li>Zeinab Saffiedine</li>
              <br />
              <li>WITH DATA FROM:</li>
              <li>ACLED</li>
              <li>Yemen Data Project</li>
            </ul>
          </Style.PanelCredit>
        }
      />
    </Style.CreditContainer>
  )
}
