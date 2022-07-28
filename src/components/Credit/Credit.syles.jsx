import { colorBlack, colorWhite } from '@/helpers/styles'
import styled from 'styled-components'
import { down } from 'styled-breakpoints'

export const CreditContainer = styled.div`
  position: absolute;
  bottom: 26px; right: 26px;
  display: flex;
  justify-content: flex-end;
  .panelContainer {
    position: absolute;
    bottom: -26px; right: -26px;
    width: 20vw;
    height: 33.33vh;
    padding: 20px 22px;
    background: ${colorBlack};
    ${down('md')} {
      width: 100vw;
      height: fit-content;
    }
  }
  .panelCross {
    top: 14px;
    right: 14px;
    width: 12px;
    height: 12px;
    &:before, &:after {
      height: 16px;
      width: 1.5px;
      background-color: ${colorWhite};
    }
  }
`

export const ButtonCredit = styled.button`
  display: flex;
  align-items: center;
  color: ${colorWhite};
  font-family: "Nata-ExtraBlack";
  font-size: 20px;
  line-height: 94.5%;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  &::after {
    content: '';
    display: block;
    width: 150px;
    height: 1px;
    margin-left: 20px;
    background: ${colorWhite};
    ${down('md')} {
      display: none;
    }
  }
`

export const PanelCredit = styled.div`
  h3 {
    margin-bottom: 35px;
    color: ${colorWhite};
    font-family: "Nata-ExtraBlack";
    font-size: 20px;
    line-height: 94.5%;
    letter-spacing: 0.12em;
    text-transform: uppercase;
  }
  ul {
    height: 21.33vh;
    overflow: scroll;
  }
  li {
    color: ${colorWhite};
    font-family: 'Newsreader';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 150.5%;
    letter-spacing: 0.18em;
    text-transform: uppercase;
  }
`