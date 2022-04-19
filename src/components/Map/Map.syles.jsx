import { colorBlack, colorRed, colorWhite } from '@/helpers/styles'
import styled from 'styled-components'

export const MapContainer = styled.div`
  display: inline-flex;

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
  .swiper {
    overflow: inherit;
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
    &.swiper-slide-active {
      opacity: 1;
      &::after {
        height: 26.83px;
        background: ${colorRed};
      }
    }
    &::after {
      content: '';
      display: block;
      width: 3px;
      height: 15.34px;
      margin: 12.5px auto 0;
      background: ${colorWhite};
    }
  }
`

export const PageContainer = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  background: ${colorBlack};
`
export const PopupContainer = styled.div`
  position: relative;
  width: 40vw;  
  background: ${colorBlack};
  overflow: scroll;
  z-index: 2;
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
    svg {
      display: inline-block;
      margin-right: 15px;
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
    &::after {
      content: '';
      display: block;
      width: 122px;
      height: 1px;
      margin: 15px auto 32px;
      background: ${colorWhite};
    }
  }
  .media {
    width: calc(40vw - 60px);
    height: calc((40vw - 60px) / 1.6951690178);
    margin-bottom: 40px;
  }
  .datas {
    display: flex;
    .datas-item {
      width: 50%;
    }
  }
`