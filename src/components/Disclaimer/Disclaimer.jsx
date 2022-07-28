import gsap from 'gsap';
import { useEffect, useRef } from 'react';
import Modal from '../Modal/Modal'
import * as Style from './Disclaimer.syles'

export default function Disclaimer({ animate = false }) {
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
    <Style.DisclaimerContainer>
      <Modal
        className="disclaimerModal"
        childrenButton={
          <Style.ButtonDisclaimer ref={buttonRef}>Disclaimers</Style.ButtonDisclaimer>
        }
        childrenPanel={
          <Style.PanelDisclaimer>
            <h3>Disclaimers</h3>
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
          </Style.PanelDisclaimer>
        }
      />
    </Style.DisclaimerContainer>
  )
}
