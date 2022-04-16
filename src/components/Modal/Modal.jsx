import * as Style from './Modal.styles'
import { useState } from 'react'
/**
 * Modal
 */

const Modal = ({ childrenButton, childrenPanel, ...props }) => {
  const [showModal, setShowModal] = useState(false)

  return (
    <Style.ModalContainer {...props}>
      {
        showModal ? 
        <Style.PanelContainer className='panelContainer'>
          <Style.PanelCross
            className='panelCross'
            onClick={() => {
              setShowModal(false)
            }}
          />
          {childrenPanel}
        </Style.PanelContainer>
        :
        <Style.ButtonContainer
          onClick={() => {
            setShowModal(true)
          }}>
          {childrenButton}
        </Style.ButtonContainer>
      }
    </Style.ModalContainer>
  )
}

export default Modal
