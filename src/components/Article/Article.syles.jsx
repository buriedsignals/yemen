import { colorBlack, colorGrey, colorRed, colorWhite } from '@/helpers/styles'
import styled from 'styled-components'
import { up, down } from 'styled-breakpoints';


let scotchsStyleDesktop = {
  size: '',
  repeat: '',
  image: '',
  position: '',
  positionAnim: ''
} 
let scotchsStyleMobile = {
  size: '',
  repeat: '',
  image: '',
  position: '',
  positionAnim: ''
} 
let scotchsDatas = [
  {
    desktop: { w: '120px', h: '424px', px: 'calc(20vw - 60px)', py: '0', pya: '0' },
    mobile: { w: '49px', h: '180px', px: 'calc(33.33vw - 52px)', py: '0', pya: '0' }
  },
  {
    desktop: { w: '130px', h: '670px', px: 'calc(80vw - 65px)', py: '20vh', pya: '90vh' },
    mobile: { w: '53px', h: '278px', px: 'calc(66.66vw - 26.5px)', py: '6vh', pya: '86vh' }
  },
  {
    desktop: { w: '120px', h: '433px', px: 'calc(60vw - 60px)', py: '926px', pya: '1026px' },
    mobile: { w: '49px', h: '190px', px: 'calc(50vw - 52px)', py: '1366px', pya: '2366px' }
  },
  {
    desktop: { w: '120px', h: '424px', px: 'calc(20vw - 60px)', py: '3176px', pya: '4176px' },
    mobile: { w: '49px', h: '180px', px: 'calc(33.33vw - 52px)', py: '7536px', pya: '8536px' }
  },
  {
    desktop: { w: '130px', h: '670px', px: 'calc(80vw - 65px)', py: '3506px', pya: '4506px' },
    mobile: { w: '53px', h: '278px', px: 'calc(66.66vw - 26.5px)', py: '7786px', pya: '7536px' }
  },
  {
    desktop: { w: '120px', h: '433px', px: 'calc(60vw - 60px)', py: '4506px', pya: '5506px' },
    mobile: { w: '49px', h: '190px', px: 'calc(50vw - 52px)', py: '8786px', pya: '6786px' }
  },
  {
    desktop: { w: '120px', h: '424px', px: 'calc(20vw - 60px)', py: '6506px', pya: '7506px' },
    mobile: { w: '49px', h: '180px', px: 'calc(33.33vw - 52px)', py: '10786px', pya: '11786px' }
  },
  {
    desktop: { w: '130px', h: '670px', px: 'calc(80vw - 65px)', py: '7506px', pya: '8786px' },
    mobile: { w: '53px', h: '278px', px: 'calc(66.66vw - 26.5px)', py: '11786px', pya: '12786px' }
  },
  {
    desktop: { w: '120px', h: '433px', px: 'calc(60vw - 60px)', py: '9506px', pya: '10506px' },
    mobile: { w: '49px', h: '190px', px: 'calc(50vw - 52px)', py: '13786px', pya: '14786px' }
  },
  {
    desktop: { w: '120px', h: '424px', px: 'calc(20vw - 60px)', py: '11506px', pya: '12506px' },
    mobile: { w: '49px', h: '180px', px: 'calc(33.33vw - 52px)', py: '15786px', pya: '16786px' }
  },
  {
    desktop: { w: '130px', h: '670px', px: 'calc(80vw - 65px)', py: '12506px', pya: '13506px' },
    mobile: { w: '53px', h: '278px', px: 'calc(66.66vw - 26.5px)', py: '16786px', pya: '17786px' }
  },
  {
    desktop: { w: '120px', h: '433px', px: 'calc(60vw - 60px)', py: '13506px', pya: '14506px' },
    mobile: { w: '49px', h: '190px', px: 'calc(50vw - 52px)', py: '17786px', pya: '18786px' }
  },
]
for(let i=0; i < scotchsDatas.length; i++) {
  const image = 'linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.04) 18.75%, rgba(255, 255, 255, 0.04) 40.1%, rgba(255, 255, 255, 0.01) 100%)'
  const sizeDesktop = scotchsDatas[i].desktop.w + ' ' + scotchsDatas[i].desktop.h;
  const positionDesktop = scotchsDatas[i].desktop.px + ' ' + scotchsDatas[i].desktop.py;
  const positionDesktopAnimation = scotchsDatas[i].desktop.px + ' ' + scotchsDatas[i].desktop.pya;
  const sizeMobile = scotchsDatas[i].mobile.w + ' ' + scotchsDatas[i].mobile.h;
  const positionMobile = scotchsDatas[i].mobile.px + ' ' + scotchsDatas[i].mobile.py;
  const positionMobileAnimation = scotchsDatas[i].mobile.px + ' ' + scotchsDatas[i].mobile.pya;
  scotchsStyleDesktop.size += ', ' + sizeDesktop;
  scotchsStyleDesktop.repeat +=', no-repeat';
  scotchsStyleDesktop.image += ', ' + image;
  scotchsStyleDesktop.position += ', ' + positionDesktop;
  scotchsStyleDesktop.positionAnim += ', ' + positionDesktopAnimation;
  scotchsStyleMobile.size += ', ' + sizeMobile;
  scotchsStyleMobile.repeat +=', no-repeat';
  scotchsStyleMobile.image += ', ' + image;
  scotchsStyleMobile.position += ', ' + positionMobile;
  scotchsStyleMobile.positionAnim += ', ' + positionMobileAnimation;
}

export const ArticleContainer = styled.div`
  @keyframes appear {
    0% {opacity: 0;}
    100% {opacity: 1;}
  }
  @keyframes moveArticle {
    50% {background-position: top left, top left${ scotchsStyleDesktop.positionAnim };}
  }
  @keyframes moveArticleMobile {
    50% {background-position: top left, top left${ scotchsStyleMobile.positionAnim };}
  }
  position: relative;
  width: 100vw;
  min-height: 100vh;
  margin-bottom: 60px;
  padding-bottom: 170px;
  background: ${colorBlack};
  background-size: 20vw 33.33vh, 20vw 33.33vh${ scotchsStyleDesktop.size };
  background-repeat: repeat, repeat${ scotchsStyleDesktop.repeat };
  background-image: linear-gradient(to right, rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.2) 1px, transparent 1px)${ scotchsStyleDesktop.image };
  background-position: top left, top left${ scotchsStyleDesktop.position };
  animation: moveArticle 3s infinite, appear 1.5s 1;
  // pointer-events: none;
  z-index: 12;
  ${down('md')} {
    background-size: 33.33vw 20vh, 33.33vw 20vh${ scotchsStyleMobile.size };
    background-repeat: repeat, repeat${ scotchsStyleMobile.repeat };
    background-image: linear-gradient(to right, rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.2) 1px, transparent 1px)${ scotchsStyleMobile.image };
    background-position: top left, top left${ scotchsStyleMobile.position };
    animation: moveArticleMobile 90s infinite, appear 1.5s 1;
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

export const ContentContainer = styled.div`
  position: relative;
  min-width: 100vw;
  min-height: 100vh;
`

export const Content = styled.div`
  .halfWidth {
    display: flex;
    margin: 40px 0;
    &.left {
      justify-content: flex-start;
    }
    &.center {
      justify-content: space-around;
    }
    &.right {
      justify-content: flex-end;
    }
    & > div {
      width: 75%;
    }
  }
  .fullWidth-container {
    position: relative;
    margin-top: 50px;
    .fullWidth {
      position: relative;
      width: 100%;
      height: 75vh;
      overflow: hidden;
      ${down('md')} {
        height: 35vh;
      }
      div {
        position: absolute;
        top: 50%; left: 50%;
        width: 100%;
        transform: translate3D(-50%, -50%, 0);
        ${down('md')} {
          width: auto;
          height: 100%;
           img {
            max-width: inherit;
            width: auto;
            height: 100%;
           }
        }
      }
    }
    .desc-container {
      position: absolute;
      bottom: 50px; left: 0;
      width: 100%;
      .lorem-container {
        display: flex;
        justify-content: start;
        max-width: calc(1060px - 56px) !important;
        ${up('xxxl')} {
          max-width: calc(65.21vw - 56px) !important;
        }
        width: 100%;
        margin: 0 auto;
        padding: 0 28px;
        & > div {
          width: 35%;
        }
      }
    }
  }
`

export const SectionHero = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 50vh;
  ${down('md')} {
    height: 43.125vh;
  }
  .title {
    width: 480px;    
    font-size: 100px;
    line-height: 94.5%;
    ${down('md')} {
      width: 242px;  
      padding: 20px 0 16px;
      font-size: 40px;
      text-align: center;
    }
  }
  .moreMobil {
    display: none;
    p {
      color: ${colorWhite};
      font-family: 'Newsreader';
      font-style: normal;
      font-weight: 500;
      font-size: 12px;
      line-height: 94.5%;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      text-align: center;
      &:first-child {
        margin-bottom: 18px; 
      }
    }
    .socials {
      display: flex;
      justify-content: center;
      gap: 20px;
      .socialItem {
        svg {
          width: 20px;
        }
      }
    }
    ${down('md')} {
      display: block;
    }
  }
  .line {
    position: absolute;
    bottom: 42.5px; left: 50%;
    width: 85px;
    height: 3px;
    background: linear-gradient(90deg, ${colorRed} 35%, ${colorWhite} 35%);
    transform: translate3D(-50%, 21.25px,0) rotate3d(0, 0, 1, -90deg);
    ${down('md')} {
      bottom: 26.25px;
      width: 42.5px;  
    }
  }
`

export const Background = styled.div`
  @keyframes moveArticle {
    50% {background-position: top left, top left${ scotchsStyleDesktop.positionAnim };}
  }
  @keyframes moveArticleMobile {
    50% {background-position: top left, top left${ scotchsStyleMobile.positionAnim };}
  }
  position: absolute;
  width: 100vw;
  height: 50vh;
  background-image: linear-gradient(90deg, rgba(0,0,0,0.25) 0%, rgba(0,0,0,0.25) 20%, rgba(0,0,0,0.4) 20%, rgba(0,0,0,0.4) 40%, rgba(0,0,0,0.5) 40%, rgba(0,0,0,0.5) 60%, rgba(0,0,0,0.6) 60%, rgba(0,0,0,0.6) 80%, rgba(0,0,0,0.7) 80%, rgba(0,0,0,0.7) 100%), url(img/bg-article.jpg);
  background-size: cover;
  background-position: center, top center;
  ${down('md')} {
    height: 43.125vh;
    background-image: linear-gradient(90deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.4) 33.33%, rgba(0,0,0,0.5) 33.33%, rgba(0,0,0,0.5) 66.66%, rgba(0,0,0,0.6) 66.66%, rgba(0,0,0,0.6) 100%), url(img/bg-article.jpg);
  }
  &::after {
    content: '';
    position: absolute;
    top: 0; left: 0;
    display: block;
    width: 100%;
    height: 100%;
    background-size: 20vw 33.33vh, 20vw 33.33vh${ scotchsStyleDesktop.size };
    background-repeat: repeat, repeat${ scotchsStyleDesktop.repeat };
    background-image: linear-gradient(to right, rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.2) 1px, transparent 1px)${ scotchsStyleDesktop.image };
    background-position: top left, top left${ scotchsStyleDesktop.position };
    animation: moveArticle 30s infinite;
    pointer-events: none;
    z-index: 12;
    ${down('md')} {
      background-size: 33.33vw 20vh, 33.33vw 20vh${ scotchsStyleMobile.size };
      background-repeat: repeat, repeat${ scotchsStyleMobile.repeat };
      background-image: linear-gradient(to right, rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.2) 1px, transparent 1px)${ scotchsStyleMobile.image };
      background-position: top left, top left${ scotchsStyleMobile.position };
      animation: moveArticleMobile 90s infinite;
    }
  }
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
    ${down('md')} {
      width: 100%;
      padding: 0 28px;
      font-size: 12px;
      line-height: 181%;
    }
    ${up('xxxl')} {
      margin: 60px 0 40px;
    }
  }
  ul {
    display: flex;
    justify-content: center;
    ${down('md')} {
      flex-direction: column;
      padding: 0 28px;
    }
    li {
      ${down('md')} {
        margin-right: 0 !important;
        padding: 0 26px;
      }
    }
    }
    li:not(:last-child) {
      margin-right: 30px;
      ${down('md')} {
        margin-bottom: 12px;
      }
      ${up('xxxl')} {
        margin-right: 150px;
      }
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
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  ${down('md')} {
    width: 245px;
    height: 68px;
  }
  ${up('xxxl')} {
    width: 310px;
    height: 115px;
  }
  div {
    display: flex;
    align-items: center;
    figure {
      position: relative;
      overflow: hidden;
      width: 53px;
      height: 53px;
      ${down('md')} {
        width: 68px;
        height: 68px;
      }
      ${up('xxxl')} {
        width: 115px;
        height: 115px;
      }
      & > div {
        position: absolute;
        top: 50%;
        left: 50%;
        width: auto;
        height: 115px;
        transform: translate3d(-50%, -50%, 0);
        img {
          max-width: inherit;
          width: auto;
          height: 100%;
        }
      }
    }
    p {
      padding-left: 10px;
      color: ${colorWhite};
      font-family: "Nata-ExtraBlack";
      font-size: 20px;
      line-height: 94.5%;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
      ${down('md')} {
        font-size: 25px;
      }
      ${up('xxxl')} {
        font-size: 29px;
      }
      span {
        display: block;
      }
    }
  }
  svg {
    margin-right: 10px;
    transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
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
  padding-top: 95px;
  .introContainer  {
    display: flex;
    justify-content: space-between;
    gap: 30px;
    max-width: calc(1060px - 56px);
    margin: 0 auto;
    padding-left: 28px;
    padding-right: 28px;
    ${up('xxxl')} {
      max-width: calc(65.21vw - 56px) !important;
    }
    ${down('md')} {
      flex-direction: column;
      padding-left: 0;
      padding-right: 0;
    }
  }
  .title {
    display: flex;
    gap: 30px;
    padding-left: 28px;
  }
  h2 {
    color: ${colorWhite};
    font-family: "Nata-SemiBold";
    font-size: 70px;
    line-height: 94.5%;
    letter-spacing: 0.03em;
    text-transform: uppercase;
    ${down('md')} {
      font-size: 40px;
    }
  }
  .line {
    width: 250.6px;
    height: 3px;
    margin-top: 35px;
    ${down('md')} {
      width: 50vw;
      margin-top: 28px;
    }
  }
  .desc {
    ${down('md')} {
      width: 100%;
      padding-left: 28px;
      padding-right: 28px;
    }
  }
  .listIntroContainer {
    position: relative;
    margin-top: 60px;
    li {
      .subliContainer {
        max-width: calc(1060px - 56px);
        margin: 0 auto;
        padding-left: 28px;
        padding-right: 28px;
        ${up('xxxl')} {
          max-width: calc(65.21vw - 56px) !important;
        }
      }
      .liContainer {
        position: relative;
      }
      .itemContainer {
        position: relative;
        z-index: 1;
      }
      figure {
        position: absolute;
        top: 50%;
        left: 10%;
        width: 392px;
        height: 386px;
        // margin-left: 175px;
        transform: translate3D(-100%,-50%,0);
        z-index: 0;
        ${down('md')} {
          position: relative;
          top: 0;
          left: 0;
          width: 100%;
          height: auto;
          margin-top: 20px;
          transform: inherit;
        }
      }
    }
  }
`
export const DescriptionContainer = styled.div`
  width: 500px;
  ${down('md')} {
    width: 100%;
  }
  p {
    color: ${colorWhite};
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 140.5%;
    // opacity: 0.8;
    &:not(:last-child) {
      margin-bottom: 20px;
      ${down('md')} {
        margin-bottom: 35px;
      }
    }
    &.legend {
      ${down('md')} {
        max-width: 85%;
        margin: 0 auto;
        font-size: 14px;
        text-align: center;
      }
    }
    &.subtitle {
      margin-bottom: 30px;
      font-family: 'Newsreader';
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 140.5%;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      ${down('md')} {
        width: 80%;
        line-height: 181.5%;
      }
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
    ${down('md')} {
      width: 85%;
    }
    &.liHybrid {
      position: relative;
      ${down('md')} {
        width: 100%;
        overflow: hidden;
      }
      figure {
        position: relative;
        top: 0;
        left: 0;
        transform: inherit;
        width: 100vw;
        height: auto;
        transform: inherit;
        ${down('md')} {
          width: auto;
          height: 75vh;
          &::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            display: block;
            width: 100%;
            height: 100%;
            background: linear-gradient(180deg, rgba(6,13,0,0.25) 50%, rgba(6,13,0,1) 100%);
          }
        }
        & > div {
          ${down('md')} {
            height: 100%;
          }
          img {
            ${down('md')} {
              width: auto;
              max-width: inherit;
              height: 100%;
            }
          }
        }
      }
      .subsubliContainer {
        position: absolute;
        bottom: 0;
        left: 0;
        ${up('xxxl')} {
          left: 15.5vw;
        }
      }
      .subliContainer {
        margin-bottom: 45px;
        ${down('md')} {
          margin-bottom: 0;
        }
      }
    }
    &:nth-child(4n + 1) {
      .liContainer {
        margin-left: 36px;
        ${down('md')} {
          margin-left: 0;
        }
      }
    }
    &:nth-child(4n + 2) {
      ${down('md')} {
        margin-left: 40px;
      }
      .liContainer {
        margin-left: 455px;
        ${down('md')} {
          margin-left: 0px;
        }
      }
    } 
    &:nth-child(4n + 3) .liContainer {
      margin-left: 250px;
      ${down('md')} {
        margin-left: 0px;
      }
      .itemContainer > div {
        width: 283px;
        ${down('md')} {
          width: 100%;
        }
      }
    }
    &:nth-child(4n + 4) {
      ${down('md')} {
        margin-left: 40px;
      }
      .liContainer {
        margin-left: 455px;
        ${down('md')} {
          margin-left: 0px;
        }
      }
    } 
    &:not(:last-child) {
      ${down('md')} {
        margin-bottom: 42px;
      }
      .liContainer {
        margin-bottom: 72px;
        ${down('md')} {
          margin-bottom: 0;
        }
      }
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
      ${down('md')} {
        font-size: 30px;
        margin-bottom: 11px;
      }
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
  padding-top: 108px;
  ${down('md')} {
    padding-top: 95px;
  }
  .space {
    height: 120px;
  }
  .title {
    display: flex;
    align-items: flex-end;
    margin-left: 187px;
    margin-bottom: 100px;
    ${down('md')} {
      margin-left: 0;
      padding-left: 28px;
      margin-bottom: 42px;
      overflow: hidden;
    }
    ${up('xxxl')} {
      max-width: calc(65.21vw - 56px) !important;
      margin: 0 auto 100px;
    }
    &.center {
      align-items: center;
      margin-left: 0;
      ${down('md')} {
        margin-left: 0;
        padding-left: 0;
        margin-bottom: 42px;
        overflow: hidden;
      }
      ${up('xxxl')} {
        max-width: calc(65.21vw - 56px) !important;
        margin: 0 auto 100px;
      }
      h2 {
        ${down('md')} {
          white-space: nowrap;
        }
      }
      .line {
        ${down('md')} {
          min-width: inherit;
        }
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
      ${down('md')} {
        font-size: 40px;
        line-height: 94.5%;
        white-space: inherit;
      }
      .red {
        color: ${colorRed};
        ${down('md')} {
          white-space: nowrap;
        }
      }
    }
    .line {
      width: 100%;
      height: 3px;
      margin-left: 35px;
      ${down('md')} {
        min-width: 50vw;
        margin-left: 30px;
      }
    }
  }
  .helping {
    max-width: 500px;
    margin: 0 auto;
    p {
      margin-bottom: 60px !important;
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
    max-width: calc(1060px - 56px) !important;
    ${up('xxxl')} {
      max-width: calc(65.21vw - 56px) !important;
    }
    margin: 0 auto;
    padding: 0 28px;
  }
  .map-raids {
    margin: 80px 0;
    ${down('md')} {
      margin-top: 40px;
      margin-bottom: 40px;
    }
    figure {
      margin-bottom: 20px;
    }
    & > div {
      width: 100%;
    }
    a {
      margin-top: 50px;
      max-width: 155px;
      ${down('md')} {
        margin-top: 30px;
        max-width: 130px;
      }
    }
  }
  .map-legend {
    position: relative;
    margin-bottom: 80px;
    ${down('md')} {
      margin-top: 40px;
      margin-bottom: 40px;
    }
    figure {
      ${down('md')} {
        margin-top: 30px;
      }
    }
    & > .legend {
      position: absolute;
      bottom: 0;
      right: 0;
      width: 290px;
      ${down('md')} {
        position: relative;
        width: 100%;
      }
      z-index: 2;
      p.legend {
        ${down('md')} {
          order: 3;    
          margin-bottom: 0;
        }
      }
      .fatalities {
        ${down('md')} {
          font-size: 14px;
          text-align: center;
          order: 1;
          margin-bottom: 10px;
        }
      }
      & > div {
        width: 100%;
        ${down('md')} {
          display: flex;
          flex-direction: column;
        }
      }
      .mesure {
        position: relative;
        ${down('md')} {
          order: 2;
          width: 50%;
          margin: 0 auto 35px;
          p {
            font-size: 14px;
          }
        }
        .colors {
          width: 100%;
          height: 17.5px;
          background: linear-gradient(90deg, #FFF1F1 0%, #430707 100%);
          ${down('md')} {
            height: 7.5px;
          }
        }
        p {
          position: absolute;
          bottom: calc(-100% - 7.5px);
          margin: 0;
          ${down('md')} {
            bottom: calc(-100% - 15px);
          }
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
    .halfWidth {
      width: 100%;
      margin: 0;
      & > div {
        width: 100%;
      }
    }
  //   position: relative;
  //   & > div {
  //     position: relative;
  //     z-index: 2;
  //     div {
  //       &:first-child {
  //         width: 500px;
  //         margin-left: 460px;
  //         padding-left: 50px;
  //         ${down('md')} {
  //           width: 100%;
  //           margin-left: 0px;
  //           margin-bottom: 35px;
  //           padding-left: 0px;
  //         }
  //       }
  //       &:nth-child(2) > div {
  //         position: relative;
  //         width: 275px;
  //         margin-left: 85px;
  //         // margin-bottom: 430px;
  //         z-index: 2;
  //         ${down('md')} {
  //           width: 100%;
  //           margin-left: 0px;
  //           margin-bottom: 35px;
  //           padding-left: 0px;
  //         }
  //       }
  //       &:last-child {
  //         width: 500px;
  //         margin-left: 460px;
  //         padding-left: 50px;
  //         ${down('md')} {
  //           width: 100%;
  //           margin-left: 0px;
  //           margin-bottom: 35px;
  //           padding-left: 0px;
  //         }
  //       }
  //     }
  //   }
  //   .descMap {
  //     figure {
  //       width: 100%;
  //       position: relative;
  //       top: 0;
  //       margin-top: -50px;
  //       ${down('md')} {
  //         margin: 40px 0 !important;
  //       }
  //       div {
  //         width: 100%;
  //         margin: 0;
  //         padding: 0;
  //       }
  //     }
  //   }
  }
  &.division {
    h2 span {
      display: block;
    }
  }
  &.action {
    .helping {
      ${down('md')} {
        text-align: center !important;
      }
    }
    .container > div {
      margin: 0 auto;
      text-align: center;
      ${down('md')} {
        text-align: left;
      }
      & > p {
        max-width: 761px;
        margin: 0 auto;
      }
    }
    h2 {
      ${down('md')} {
        text-align: center;
        white-space: inherit !important;
        span {
          white-space: nowrap;
        }
      }
    }
    .container > figure {
      margin: 32px auto 0;
      &::after {
        content: '';
        display: block;
        width: 360px;
        height: 1px;
        margin: 80px auto 100px;
        background: ${colorWhite};
        ${down('md')} {
          width: 85%;
          margin: 60px auto 75px;
        }
      }
    }
  }
`

export const DateContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 50px;
  ${down('md')} {
    flex-direction: column;
    gap: inherit;
  }
  & > div {
    position: relative;
    width: 50%;
    ${down('md')} {
      width: 100%;
    }
    figure {
      position: absolute;
      top: 50%;
      width: 391px;
      transform: translate3D(0, -50%, 0);
      ${down('md')} {
        position: relative;
        top: 0;
        width: 100%;
        margin-bottom: 35px;
        transform: inherit;
      }
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
        // opacity: 0.8;
        ${down('md')} {
          font-size: 14px;
          padding-top: 20px;
        }
      }
    }
  }
  .youtube  {
    ${down('md')} {
      padding-top: 30px;
    }
    iframe {
      position: absolute;
      top: 50%;
      width: 100% !important;
      height: calc(449px / 1.7777777778);
      transform: translate3D(0, -50%, 0);
      ${down('md')} {
        position: relative;
        top: 0;
        width: 100% !important;
        height: calc((100vw - 56px) / 1.7777777778);
        transform: inherit;
      }
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
  ${down('md')} {
    position: relative;
    top: 0;
    left: 0;
    margin-bottom: 35px;
    font-size: 35px;
    transform: inherit;
  }
  &::before {
    content: '';
    display: none;
    width: 3px;
    height: auto;
    margin-right: 20px;
    background-color: ${colorRed};
    ${down('md')} {
      display: block;
    }
  }
  &::after {
    content: '';
    display: block;
    width: 3px;
    height: auto;
    margin-left: 20px;
    background-color: ${colorRed};
    ${down('md')} {
      display: none;
    }
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
  ${down('md')} {
    margin: 100px auto;
    font-size: 18px;
    text-align: left;
  }
  blockquote {
    p {
      color: ${colorWhite};
      // span {
      //   opacity: 0.4;
      // }
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