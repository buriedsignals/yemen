import { colorBlack, colorGrey, colorRed, colorWhite } from '@/helpers/styles'
import { down } from 'styled-breakpoints'
import styled from 'styled-components'


let scotchsStyleDesktop = {
  size: '',
  repeat: '',
  image: '',
  position: ''
} 
let scotchsStyleMobile = {
  size: '',
  repeat: '',
  image: '',
  position: ''
} 
let scotchsDatas = [
  {
    desktop: { w: '120px', h: '424px', px: 'calc(20vw - 60px)', py: '0' },
    mobile: { w: '49px', h: '180px', px: 'calc(33.33vw - 52px)', py: '0' }
  },
  {
    desktop: { w: '130px', h: '670px', px: 'calc(80vw - 65px)', py: '20vh' },
    mobile: { w: '53px', h: '278px', px: 'calc(66.66vw - 26.5px)', py: '6vh' }
  },
  {
    desktop: { w: '120px', h: '433px', px: 'calc(60vw - 60px)', py: '926px' },
    mobile: { w: '49px', h: '190px', px: 'calc(50vw - 52px)', py: '1366px' }
  },
  {
    desktop: { w: '120px', h: '424px', px: 'calc(20vw - 60px)', py: '3176px' },
    mobile: { w: '49px', h: '180px', px: 'calc(33.33vw - 52px)', py: '7536px' }
  },
  {
    desktop: { w: '130px', h: '670px', px: 'calc(80vw - 65px)', py: '3506px' },
    mobile: { w: '53px', h: '278px', px: 'calc(66.66vw - 26.5px)', py: '7786px' }
  },
  {
    desktop: { w: '120px', h: '433px', px: 'calc(60vw - 60px)', py: '4506px' },
    mobile: { w: '49px', h: '190px', px: 'calc(50vw - 52px)', py: '8786px' }
  },
  {
    desktop: { w: '120px', h: '424px', px: 'calc(20vw - 60px)', py: '6506px' },
    mobile: { w: '49px', h: '180px', px: 'calc(33.33vw - 52px)', py: '10786px' }
  },
  {
    desktop: { w: '130px', h: '670px', px: 'calc(80vw - 65px)', py: '7506px' },
    mobile: { w: '53px', h: '278px', px: 'calc(66.66vw - 26.5px)', py: '11786px' }
  },
  {
    desktop: { w: '120px', h: '433px', px: 'calc(60vw - 60px)', py: '9506px' },
    mobile: { w: '49px', h: '190px', px: 'calc(50vw - 52px)', py: '13786px' }
  },
  {
    desktop: { w: '120px', h: '424px', px: 'calc(20vw - 60px)', py: '11506px' },
    mobile: { w: '49px', h: '180px', px: 'calc(33.33vw - 52px)', py: '15786px' }
  },
  {
    desktop: { w: '130px', h: '670px', px: 'calc(80vw - 65px)', py: '12506px' },
    mobile: { w: '53px', h: '278px', px: 'calc(66.66vw - 26.5px)', py: '16786px' }
  },
  {
    desktop: { w: '120px', h: '433px', px: 'calc(60vw - 60px)', py: '13506px' },
    mobile: { w: '49px', h: '190px', px: 'calc(50vw - 52px)', py: '17786px' }
  },
]
for(let i=0; i < scotchsDatas.length; i++) {
  const image = 'linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.08) 18.75%, rgba(255, 255, 255, 0.08) 40.1%, rgba(255, 255, 255, 0.08) 100%)'
  const sizeDesktop = scotchsDatas[i].desktop.w + ' ' + scotchsDatas[i].desktop.h;
  const positionDesktop = scotchsDatas[i].desktop.px + ' ' + scotchsDatas[i].desktop.py;
  const sizeMobile = scotchsDatas[i].mobile.w + ' ' + scotchsDatas[i].mobile.h;
  const positionMobile = scotchsDatas[i].mobile.px + ' ' + scotchsDatas[i].mobile.py;
  scotchsStyleDesktop.size += ', ' + sizeDesktop;
  scotchsStyleDesktop.repeat +=', no-repeat';
  scotchsStyleDesktop.image += ', ' + image;
  scotchsStyleDesktop.position += ', ' + positionDesktop;
  scotchsStyleMobile.size += ', ' + sizeMobile;
  scotchsStyleMobile.repeat +=', no-repeat';
  scotchsStyleMobile.image += ', ' + image;
  scotchsStyleMobile.position += ', ' + positionMobile;
}

export const StoryContainer = styled.div`
  position: relative;
  width: 100vw;
  min-height: 100vh;
  padding-bottom: 170px;
  background: ${colorBlack};
  background-size: 20vw 33.33vh, 20vw 33.33vh${ scotchsStyleDesktop.size };
  background-repeat: repeat, repeat${ scotchsStyleDesktop.repeat };
  background-image: linear-gradient(to right, rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.2) 1px, transparent 1px)${ scotchsStyleDesktop.image };
  background-position: top left, top left${ scotchsStyleDesktop.position };
  // pointer-events: none;
  z-index: 12;
  ${down('md')} {
    padding-bottom: 80px;
    background-size: 33.33vw 20vh, 33.33vw 20vh${ scotchsStyleMobile.size };
    background-repeat: repeat, repeat${ scotchsStyleMobile.repeat };
    background-image: linear-gradient(to right, rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.2) 1px, transparent 1px)${ scotchsStyleMobile.image };
    background-position: top left, top left${ scotchsStyleMobile.position };
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
`

export const SectionHero = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  width: 100vw;
  height: 50vh;
  ${down('md')} {
    height: 75vh;
    padding-left: 28px;
    padding-right: 28px;
  }
  .title {
    // display: inline-block;
    // max-width: 480px;    
    // margin: 0 auto;
    // font-size: 100px;
    // line-height: 94.5%;
    // ${down('md')} {
    // }
  }
  .line {
    // position: absolute;
    // bottom: 42.5px; left: 50%;
    // width: 85px;
    // height: 3px;
    // background: linear-gradient(90deg, ${colorRed} 35%, ${colorWhite} 35%);
    // transform: translate3D(-50%, 21.25px,0) rotate3d(0, 0, 1, -90deg);
    // ${down('md')} {
    //   bottom: 26.25px;
    //   width: 42.5px;  
    //   transform: translate3D(-50%, 21.25px,0);
    // }
  }
`

export const SectionDescription = styled.div`
  max-width: calc(1060px - 56px);
  margin: 50px auto 50px;
  padding-left: 28px;
  padding-right: 28px;
`

export const Background = styled.div`
  position: absolute;
  width: 100vw;
  height: 50vh;
  background-image: linear-gradient(180deg,rgba(0,0,0,0.30) 75%,rgba(0,0,0,1) 100%),url(${(props) => props.image });
  background-size: cover;
  background-position: center;
  ${down('md')} {
    height: 75vh;
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
    pointer-events: none;
    z-index: 12;
    ${down('md')} {
      background-size: 33.33vw 20vh, 33.33vw 20vh${ scotchsStyleMobile.size };
      background-repeat: repeat, repeat${ scotchsStyleMobile.repeat };
      background-image: linear-gradient(to right, rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.2) 1px, transparent 1px)${ scotchsStyleMobile.image };
      background-position: top left, top left${ scotchsStyleMobile.position };
    }
  }
`

export const DescriptionContainer = styled.div`
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