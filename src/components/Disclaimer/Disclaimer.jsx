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
          <Style.ButtonDisclaimer ref={buttonRef}>Disclaimer</Style.ButtonDisclaimer>
        }
        childrenPanel={
          <Style.PanelDisclaimer>
            <h3>Disclaimer</h3>
            <p>YRRF is a separate and a distinct non-profit organization than the Yemen Tribute although the common goal is raising awareness of the need  in Yemen</p>
          </Style.PanelDisclaimer>
        }
      />
    </Style.DisclaimerContainer>
  )
}
