import { colorBlack, colorGrey, colorRed, colorWhite } from '@/helpers/styles'
import { down } from 'styled-breakpoints'
import styled from 'styled-components'

export const ArticleContainer = styled.div`
  position: relative;
  width: 100vw;
  min-height: 100vh;
  margin-bottom: 60px;
  padding-bottom: 170px;
  background: ${colorBlack};
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

export const ContentContainer = styled.div`
  position: relative;
  min-width: 100vw;
  min-height: 100vh;
`

export const Content = styled.div`
`

export const SectionHero = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 50vh;
  .title {
    width: 480px;    
    font-size: 100px;
    line-height: 94.5%;
  }
  .line {
    position: absolute;
    bottom: 42.5px; left: 50%;
    width: 85px;
    height: 3px;
    background: linear-gradient(90deg, ${colorRed} 25%, ${colorWhite} 25%);
    transform: translate3D(-50%, 21.25px,0) rotate3d(0, 0, 1, -90deg);
  }
`

export const Background = styled.div`
  position: absolute;
  width: 100vw;
  height: 50vh;
  background-image: url(img/bg-article.jpg);
  background-size: cover;
  background-position: center;
`

export const SectionStories = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  h3 {
    width: 347px;
    margin: 40px 0 20px;
    text-alin: center;
    color: ${colorWhite};
    font-family: 'Newsreader';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 140.5%;
    text-align: center;
    letter-spacing: 0.18em;
    text-transform: uppercase;
  }
  ul {
    display: flex;
    justify-content: center;
    li:not(:last-child) {
      margin-right: 30px;
    }
  }
`

export const ButtonStory = styled.a`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 195px;
  height: 55px;
  border: 1px solid rgba(229,229,229,0.2);
  div {
    display: flex;
    align-items: center;
    figure {
      width: 53px;
      height: 53px;
    }
    p {
      padding-left: 10px;
      color: ${colorWhite};
      font-family: "Nata-ExtraBlack";
      font-size: 20px;
      line-height: 94.5%;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      span {
        display: block;
      }
    }
  }
  svg {
    margin-right: 10px;
  }
  &:hover {
    border: 1px solid ${colorWhite};
    p {
      color: ${colorRed};
    }
    svg path {
      fill: ${colorRed};
    }
  }
`

export const SectionIntro = styled.div`
  max-width: 1060px;
  margin: 0 auto;
  padding-top: 95px;
  .introContainer  {
    display: flex;
    justify-content: space-between;
  }
  h2 {
    color: ${colorWhite};
    font-family: "Nata-SemiBold";
    font-size: 70px;
    line-height: 94.5%;
    letter-spacing: 0.03em;
    text-transform: uppercase;
  }
  .line {
    width: 250.6px;
    height: 3px;
    margin-top: 35px;
  }
  .listIntroContainer {
    position: relative;
    margin-top: 60px;
    figure {
      position: absolute;
      top: 50%;
      left: -150px;
      width: 592px;
      height: 586px;
      transform: translate3D(0, -50%, 0);
      z-index: 0;
    }
  }
`
export const DescriptionContainer = styled.div`
  width: 500px;
  p {
    color: ${colorWhite};
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 140.5%;
    opacity: 0.8;
    &:not(:last-child) {
      margin-bottom: 20px;
    }
    &.darkest {
      color: ${colorGrey};
    }
    .subtitle {
      margin-bottom: 57px;
    }
  }
  a {
    color: ${colorRed};
    text-decoration: underline;
  }
`

export const ListNumber = styled.ol`
  position: relative;
  z-index: 1;
  li {
    color: ${colorWhite};
    &:nth-child(4n + 1) {
      margin-left: 136px;
    }
    &:nth-child(4n + 2) {
      margin-left: 555px;
    }
    &:nth-child(4n + 3) {
      margin-left: 350px;
      div {
        width: 283px;
      }
    }
    &:nth-child(4n + 4) {
      margin-left: 555px;
    }
    &:not(:last-child) {
      margin-bottom: 72px;
    }
    span {
      position: relative;
      display: inline-block;
      margin-bottom: 20px;
      font-family: "Nata-SemiBold";
      font-size: 35px;
      line-height: 0.8;
      letter-spacing: 0.03em;
      text-transform: uppercase;
      &::after {
        content: '';
        position: absolute;
        bottom: 3px; left: 100%;
        display: block;
        width: 35px;
        height: 3px;
        margin-left: 20px;
        background-color: ${colorRed};
      }
    }
  }
`

export const Section = styled.div`
  margin-top: 108px;
  .space {
    height: 120px;
  }
  .title {
    display: flex;
    align-items: flex-end;
    margin-left: 187px;
    margin-bottom: 100px;
    &.center {
      align-items: center;
      margin-left: 0;
      .line {
        &:first-child {
          margin-left: 0;
          margin-right: 35px;
          background: ${colorRed};
        }
        &:last-child {
          background: ${colorWhite};
        }
      }
    }
    h2 {
      color: ${colorWhite};
      font-family: "Nata-SemiBold";
      font-size: 70px;
      line-height: 0.8;
      letter-spacing: 0.03em;
      text-transform: uppercase;
      white-space: nowrap;
      span {
        color: ${colorRed};
      }
    }
    .line {
      width: 100%;
      height: 3px;
      margin-left: 35px;
    }
  }
  .helping {
    max-width: 500px;
    margin: 0 auto;
    p {
      margin-bottom: 60px;
      color: ${colorWhite};
      font-family: 'Inter';
      font-style: normal;
      font-weight: 500;
      font-size: 20px;
      line-height: 140.5%;
      text-align: center;
    }
    a {
      padding: 6px 13px;
      color: ${colorWhite};
      font-family: 'Nata-ExtraBlack';
      font-size: 20px;
      line-height: 94.5%;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      background-color: ${colorRed};
    }
  }
  .container {
    max-width: 1060px;
    margin: 0 auto;
  }
  .map-legend {
    position: relative;
    margin-bottom: 80px;
    .legend {
      position: absolute;
      bottom: 0;
      right: 0;
      width: 290px;
      z-index: 2;
      & > div {
        width: 100%;
      }
      .mesure {
        position: relative;
        .colors {
          width: 100%;
          height: 17.5px;
          background: linear-gradient(90deg, #FFF1F1 0%, #430707 100%);
        }
        p {
          position: absolute;
          bottom: calc(-100% - 7.5px);
          margin: 0;
          &:first-child {
            left: 0;
            transform: translate3D(-50%, 0, 0);
          }
          &:last-child {
            right: 0;
            transform: translate3D(50%, 0, 0);
          }
        }
      }
    }
  }
  .map-container {
    position: relative;
    & > div {
      position: relative;
      z-index: 2;
      div {
        &:first-child {
          width: 500px;
          margin-left: 660px;
        }
        &:nth-child(2) {
          width: 275px;
          margin-left: 85px;
          margin-bottom: 430px;
        }
        &:last-child {
          width: 500px;
          margin-left: 660px;
        }
      }
    }
    figure {
      position: absolute;
      top: 50%;
      transform: translate3D(0, -50%, 0);
    }
  }
  &.division {
    h2 span {
      display: block;
    }
  }
  &.action {
    .container > div {
      margin: 0 auto;
      text-align: center;
    }
    .container > figure {
      margin: 32px auto 180px;
    }
  }
`

export const DateContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 50px;
  & > div {
    position: relative;
    width: 50%;
    figure {
      position: absolute;
      top: 50%;
      width: 391px;
      transform: translate3D(0, -50%, 0);
      figcaption {
        max-width: 85%;
        margin: 0 auto;
        padding-top: 40px;
        color: ${colorWhite};
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 140.5%;
        text-align: center;
      }
    }
  }
  .youtube  {
    iframe {
      position: absolute;
      top: 50%;
      width: 100% !important;
      transform: translate3D(0, -50%, 0);
    }
  }
`
export const Date = styled.div`
  position: absolute;
  top: 50%; left: 50%;
  display: flex;
  color: ${colorWhite};
  font-family: 'Nata-Regular';
  font-size: 140px;
  line-height: 94.5%;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  transform: translate3D(-50%, -50%, 0);
  &::after {
    content: '';
    display: block;
    width: 3px;
    height: auto;
    margin-left: 20px;
    background-color: ${colorRed};
  }
`
export const Quote = styled.figure`
  max-width: 761px;
  margin: 121px auto;
  font-family: 'Newsreader';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 140.5%;
  text-align: center;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  blockquote {
    p {
      color: ${colorWhite};
      span {
        opacity: 0.4;
      }
    }
  }
  figcaption {
    margin-top: 44px;
    cite {
      color: ${colorRed};
      a {
        text-decoration: underline;
      }
    }
  }
`