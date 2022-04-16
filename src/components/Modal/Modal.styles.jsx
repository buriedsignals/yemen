import styled from 'styled-components'

export const ModalContainer = styled.div`
`

export const ButtonContainer = styled.div`
`

export const PanelContainer = styled.div`
`

export const PanelCross = styled.div`
  position: absolute;
  top: 12.5px;
  right: 17.5px;
  width: 25px;
  height: 25px;
  margin: 10px;
  cursor: pointer;
  &:before, &:after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    height: 25px;
    width: 2.5px;
    background-color: #000;
  }
  &:before {
    transform: translate3D(-50%, -50%, 0) rotate(45deg);
  }
  &:after {
    transform: translate3D(-50%, -50%, 0) rotate(-45deg);
  }

`
