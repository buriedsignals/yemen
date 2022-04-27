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
              <li>ALLON Levy</li>
              <li>BACARD Hugo</li>
              <li>BAKER Matthew</li>
              <li>BALWE Chetan</li>
              <li>BELAIR Luc</li>
              <li>BERKOVICH Vladimir</li>
              <li>BERTRAND Benoit</li>
            </ul>
          </Style.PanelCredit>
        }
      />
    </Style.CreditContainer>
  )
}
