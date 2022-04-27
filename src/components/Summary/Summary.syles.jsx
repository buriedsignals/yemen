import { colorBlack, colorRed, colorWhite } from '@/helpers/styles'
import { down } from 'styled-breakpoints'
import styled from 'styled-components'

export const SummaryContainer = styled.div`
.mobileView {
  position: fixed;
  bottom: 0; left: 0;
  display: none;
  width: 100vw;
  border-top: 1px solid ${colorWhite};
  background: ${colorBlack};
  z-index: 10;
  ${down('md')} {
    display: block;
  }
  .panel {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    padding-top: 60px;
    background: ${colorBlack};
    text-align: center;
    p {
      color: ${colorWhite};
      font-family: 'Newsreader';
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 1.25;
      letter-spacing: 0.18em;
      text-transform: uppercase;
    }
    ol {
      margin: 40px 0 60px;
      li {
        margin-left: 80px;
        margin-right: 80px;
        &:not(:last-child) {
          margin-bottom: 30px;
        }
      }
    }
    .close {
      button {
        position: relative;
        width: 33px;
        height: 33px;
        margin-bottom: 10px;
        border: 1px solid ${colorWhite};
        &:before, &:after {
          position: absolute;
          top: 6px;
          left: 14px;
          content: ' ';
          height: 21px;
          width: 2px;
          background-color: ${colorRed};
        }
        &:before {
          transform: rotate(45deg);
        }
        &:after {
          transform: rotate(-45deg);
        }
      }
    }
  }
  .footer {
    display: flex;
    align-items: center;
    button {
      padding: 20px 25px;
    }
    & > div {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      height: 35px;
      margin: 22.5px 25px 17.5px 0;
      p {
        margin-right: 20px;
        height: auto;
        color: ${colorWhite};
        font-family: 'Newsreader';
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 1.25;
        letter-spacing: 0.18em;
        text-transform: uppercase;
        &:fisrt-child {
          width: 100%;
        }
      }
    }
  }
  .line {
    position: absolute;
    bottom: 0; left: 0;
    height: 3px;
    background: ${colorRed};
  }
}
.desktopView {
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
  ${down('md')} {
    display: none;
  }
  p {
    width: calc(20vw - 25px);
    height: 27px;
    color: ${colorWhite};
    font-family: 'Newsreader';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 1.25;
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
  display: flex;
  align-items: center;
  justify-content: flex-end;
  text-align: right;
  opacity: 0.5;
`