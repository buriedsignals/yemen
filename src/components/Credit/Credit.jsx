import Modal from '../Modal/Modal'
import * as Style from './Credit.syles'

export default function Credit() {
  return (
    <Style.CreditContainer>
      <Modal
        className="creditModal"
        childrenButton={
          <Style.ButtonCredit>Credits</Style.ButtonCredit>
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
