import styled from 'styled-components'
import { down } from 'styled-breakpoints'
import { colorWhite } from '@/helpers/styles'

export const PageContainer = styled.div`
  min-width: 100vw;
  min-height: 100vh;
  background-image: url(img/bg-landing.jpg);
  background-size: auto 100%;
  background-position: center;
  background-repeat: no-repeat;
}
  .gridContainer {
    .item {
      background: #000;
      &:nth-child(5n + 1) {
        opacity: 0.25;
      }
      &:nth-child(5n + 2) {
        opacity: 0.35;
      }
      &:nth-child(5n + 3) {
        opacity: 0.45;
      }
      &:nth-child(5n + 4) {
        opacity: 0.55;
      }
      &:nth-child(5n) {
        opacity: 0.65;
      }
      ${down('md')} {
        &:nth-child(3n + 1) {
          opacity: 0.45;
        }
        &:nth-child(3n + 2) {
          opacity: 0.55;
        }
        &:nth-child(3n) {
          opacity: 0.65;
        }
      }
    }
  }
`

export const ScotchContainer = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
`

export const ContentContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 100vw;
  min-height: 100vh;
`

export const Content = styled.div`
  max-width: 630px;    
  margin-top: 26px;
  ${down('md')} {
    display: flex;
    flex-direction: column;
    max-width: 100%;    
    margin-top: 0;
    padding: 0 28px;
  }
  .line {
    transform-origin: top left;
  }
  .title {
    ${down('md')} {
      order: -1;
    }
  }
  p {
    color: ${colorWhite};
    font-family: 'Newsreader';
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 132.5%;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    ${down('md')} {
      margin-top: 20px;
    }
  }
`

export const ListLink = styled.div`
  display: flex;
  padding-top: 43px;
  ${down('md')} {
    flex-direction: column;
    padding-top: 70px;
  }
  a:first-child {
    margin-right: 100px;
    ${down('md')} {
      margin-right: 0;
      margin-bottom: 18px;
    }
  }
`