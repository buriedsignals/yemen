import { colorBlack, colorRed, colorWhite } from '@/helpers/styles'
import styled from 'styled-components'

export const SummaryContainer = styled.div`
  position: fixed;
  bottom: 0; left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  padding: 20px 25px;
  border-top: 1px solid ${colorWhite};
  background: ${colorBlack};
  z-index: 10;
  p {
    width: calc(20vw - 25px);
    color: ${colorWhite};
    font-family: 'Newsreader';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 94.5%;
    letter-spacing: 0.18em;
    text-transform: uppercase;
  }
  a {
    padding: 5px;
    color: ${colorWhite};
    font-family: 'Newsreader';
    font-style: normal;
    font-weight: 500;
    font-size: 9px;
    line-height: 94.5%;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    opacity: 0.3;
  }
  div {
    display: flex;
    align-items: center;
    .anchor.isActive a {
      opacity: 1;
    }
    .anchor:not(:last-child) {
      .line {
        position: relative;
        display: block;
        width: 100px;
        span {
          display: block;
          width: 0%;
          height: 2px; 
          background: ${colorWhite};
        }
        &::after {
          content: '';
          position: absolute;
          top: 0; left: 0;
          display: block;
          width: 100px;
          border: 1px dashed ${colorWhite};
          opacity: 0.3;
        }
      }
    }
  }
`

export const Chapter = styled.p`
  display: flex;
  align-items: center;
  &::before {
    content: '';
    display: block;
    width: 5px;
    height: 5px;
    margin-right: 10px;
    border-radius: 70px;
    background: ${colorRed};
  }
`

export const ReadInfo = styled.p`
  text-align: right;
  opacity: 0.5;
`