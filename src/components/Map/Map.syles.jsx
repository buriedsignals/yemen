import { colorBlack, colorRed, colorWhite } from '@/helpers/styles'
import { down } from 'styled-breakpoints'
import styled from 'styled-components'
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
    desktop: { w: '120px', h: '424px', px: 'calc(20vw - 60px)', py: '0', pya: '-90vh' },
    mobile: { w: '49px', h: '180px', px: 'calc(33.33vw - 52px)', py: '0', pya: '-86vh' }
  },
  {
    desktop: { w: '130px', h: '670px', px: 'calc(80vw - 65px)', py: '20vh', pya: '90vh' },
    mobile: { w: '53px', h: '278px', px: 'calc(66.66vw - 26.5px)', py: '6vh', pya: '86vh' }
  },
]
for(let i=0; i < scotchsDatas.length; i++) {
  const image = 'linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.04) 18.75%, rgba(255, 255, 255, 0.04) 40.1%, rgba(255, 255, 255, 0.01) 100%)'
  const sizeDesktop = scotchsDatas[i].desktop.w + ' ' + scotchsDatas[i].desktop.h;
  const positionDesktop = scotchsDatas[i].desktop.px + ' ' + scotchsDatas[i].desktop.py;
  const positionDesktopAnimation = scotchsDatas[i].desktop.px + ' ' + scotchsDatas[i].desktop.pya;
  const sizeMobile = scotchsDatas[i].mobile.w + ' ' + scotchsDatas[i].mobile.h;
  const positionMobile = scotchsDatas[i].mobile.px + ' ' + scotchsDatas[i].mobile.py;
  scotchsStyleDesktop.size += ', ' + sizeDesktop;
  scotchsStyleDesktop.repeat +=', no-repeat';
  scotchsStyleDesktop.image += ', ' + image;
  scotchsStyleDesktop.position += ', ' + positionDesktop;
  scotchsStyleDesktop.positionAnim += ', ' + positionDesktopAnimation;
  scotchsStyleMobile.size += ', ' + sizeMobile;
  scotchsStyleMobile.repeat +=', no-repeat';
  scotchsStyleMobile.image += ', ' + image;
  scotchsStyleMobile.position += ', ' + positionMobile;
}

export const MapContainer = styled.div`
  @keyframes move {
    0% {opacity: 0; background-position: top left, top left${ scotchsStyleDesktop.positionAnim };}
    100% {opacity: 1; background-position: top left, top left${ scotchsStyleDesktop.position };}
  }
  @keyframes moveMobile {
    0% {opacity: 0; background-position: top left, top left${ scotchsStyleMobile.positionAnim };}
    100% {opacity: 1; background-position: top left, top left${ scotchsStyleMobile.position };}
  }
  display: inline-flex;
  height: 100vh;
  ${down('md')} {
    display: flex;
    flex-direction: column;
    height: 100%;
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
    animation: move 5s cubic-bezier(0.16, 1, 0.3, 1) 1;
    pointer-events: none;
    z-index: 12;
    ${down('md')} {
      background-size: 33.33vw 20vh, 33.33vw 20vh${ scotchsStyleMobile.size };
      background-repeat: repeat, repeat${ scotchsStyleMobile.repeat };
      background-image: linear-gradient(to right, rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.2) 1px, transparent 1px)${ scotchsStyleMobile.image };
      background-position: top left, top left${ scotchsStyleMobile.position };
      animation: moveMobile 5s cubic-bezier(0.16, 1, 0.3, 1) 1;
    }
  }
`

export const FilterSliderContainer =styled.div`
  position: absolute;
  bottom: 0; left: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  .title {
    margin-bottom: 12px;
    color: ${colorWhite};
    font-family: 'Nata-ExtraBlack';
    font-size: 16px;
    line-height: 94.5%;
    letter-spacing: 0.12em;
    text-transform: uppercase;
  }
`

export const SliderContainer = styled.div`
  width: 140px;
  ${down('md')} {
    width: 70px;
  }
  .swiper {
    overflow: inherit;
  }
  .swiper-wrapper {
    align-items: flex-end;
  }
  .swiper-slide {
    color: ${colorWhite};
    font-family: 'Nata-ExtraBlack';
    font-size: 35px;
    line-height: 94.5%;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    text-align: center;
    opacity: 0.2;
    cursor: pointer;
    ${down('md')} {
      font-size: 25px;
    }
    &.swiper-slide-active {
      position: relative;
      opacity: 1;
      ${down('md')} {
        display: flex;
        justify-content: center;
        padding-bottom: 30.5px;
      }
      &::after {
        height: 25px;
        margin: 5.5px auto 0;
        background: ${colorRed};
        ${down('md')} {
          position: absolute;
          top: 50%;
        }
      }
    }
    &::after {
      content: '';
      display: block;
      width: 3px;
      height: 15px;
      margin: 15.5px auto 0;
      background: ${colorWhite};
    }
  }
`

export const PageContainer = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  background: ${colorBlack};
  ${down('md')} {
    order: 1;
  }
  &.openedPopup {
    width: 60vw;
    height: 100vh;
    ${down('md')} {
      width: 100vw;
      height: 40vh;
    }
    .swiper-slide-active {
      &::after {
        ${down('md')} {
          height: 53px !important;
        }
      }
    }
  }
`
export const PopupContainer = styled.div`
  position: relative;
  width: 40vw;  
  background: #242424;
  overflow-y: scroll;
  z-index: 2;
  ${down('md')} {
    order: 2;
    width: 100vw;
    overflow: inherit;
    z-index: inherit;
  }
  .header {
    display: flex;
    justify-content: flex-end;
    margin: 34px 26px 58px 0;
    ${down('md')} {
      justify-content: center;
      margin: 46px 0 36px;
    }
    button {
      position: relative;
      display: flex;
      align-items: center;
      padding-left: 15px;
      padding-right: 15px;
      color: ${colorWhite};
      font-family: "Nata-ExtraBlack";
      font-size: 20px;
      line-height: 94.5%;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      ${down('md')} {
        padding: 7.5px 15px;
        font-size: 20px;
        border: ${colorWhite} solid 1px;
      }
      span {
        z-index: 2;
      }
      &::after {
        content: '';
        position: absolute;
        right: 0;
        display: block;
        width: 3px;
        height: 30px;
        background: ${colorRed};
        z-index: 1;
        transition: width 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        ${down('md')} {
          display: none;
        }
      }
      &:hover {
        &::after {
          width: 100%;
        }
      }
    }
  }
  .main-container {
    width: calc(100% - 60px);
    margin: 0 30px;
  }
  .title {
    margin: 0 auto 15px;
    color: ${colorWhite};
    font-family: 'Newsreader';
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 94.5%;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    text-align: center;
    ${down('md')} {
      font-size: 12px;
      line-height: 1.5;
      margin: 0 auto 12.5px;
    }
    svg {
      display: inline-block;
      margin-right: 15px;
      ${down('md')} {
        width: 11px;
        height: 11px;
        margin-right: 11px;
      }
    }
  }
  .date {
    margin: 0 auto;
    color: ${colorWhite};
    font-family: 'Newsreader';
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 94.5%;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    text-align: center;
    ${down('md')} {
      font-size: 12px;
    }
    &::after {
      content: '';
      display: block;
      width: 122px;
      height: 1px;
      margin: 15px auto 32px;
      background: ${colorWhite};
      ${down('md')} {
        width: 87px;
        margin: 12.5px auto 25px;
      }
    }
  }
  figure.media {
    height: auto !important;
    ${down('md')} {
      height: auto !important;
    }
  }
  .media {
    width: calc(40vw - 60px);
    height: calc((40vw - 60px) / 1.6951690178);
    margin-left: 30px;
    margin-right: 30px;
    margin-bottom: 40px;
    ${down('md')} {
      width: 100vw;
      height: calc(100vw / 1.6951690178);
      margin-left: 0;
      margin-right: 0;
      margin-bottom: 35px;
    }
  }
  .datas {
    display: flex;
    .data {
      display: flex;
      justify-content: center;
      width: 50%;
    }
    .data-item {
      display: flex;
      flex-direction: column;
      .data-value {
        color: ${colorWhite};
        font-family: 'Nata-Regular';
        font-size: 140px;
        line-height: 94.5%;
        letter-spacing: 0.12em;
        text-transform: uppercase;
        ${down('md')} {
          font-size: 75px;
        }
        &::before {
          content: '';
          display: block;
          width: 35px;
          height: 4px;
          margin-bottom: 18px;
          background: ${colorRed};
          ${down('md')} {
            width: 20px;
            height: 2.5px;
          }
        }
      }
      .data-label {
        color: ${colorWhite};
        font-family: 'Newsreader';
        font-style: normal;
        font-weight: 500;
        font-size: 18px;
        line-height: 94.5%;
        letter-spacing: 0.18em;
        text-transform: uppercase;
        ${down('md')} {
          font-size: 12px;
        }
      }
    }
  }
  .description {
    margin-top: 55px;
    color: ${colorWhite};
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 140.5%;
    opacity: 0.8;
    ${down('md')} {
      font-size: 14px;
    }
  }
  .link {
    display: inline-block;
    margin-top: 40px;
    margin-bottom: 55px;
    color: ${colorRed};
    font-family: 'Nata-ExtraBlack';
    font-size: 20px;
    line-height: 94.5%;
    letter-spacing: 0.12em;
    text-decoration: underline;
    text-transform: uppercase;
    opacity: 0.8;
    ${down('md')} {
      font-size: 14px;
    }
  }
  .up {
    position: fixed;
    bottom: 15px;
    right: 10px;
    svg {
      transform: rotate3D(0,0,1,-90deg);
    }
  }
`