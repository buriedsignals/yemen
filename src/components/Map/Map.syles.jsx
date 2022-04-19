import { colorBlack, colorRed, colorWhite } from '@/helpers/styles'
import { down } from 'styled-breakpoints'
import styled from 'styled-components'

export const MapContainer = styled.div`
  display: inline-flex;
  height: 100vh;
  ${down('md')} {
    display: flex;
    flex-direction: column;
    height: auto;
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
  background: ${colorBlack};
  overflow: scroll;
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
    margin: 26px 26px 58px 0;
    ${down('md')} {
      justify-content: center;
      margin: 46px 0 36px;
    }
    button {
      display: flex;
      align-items: center;
      color: ${colorWhite};
      font-family: "Nata-ExtraBlack";
      font-size: 20px;
      line-height: 94.5%;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      ${down('md')} {
        font-size: 12px;
      }
      &::after {
        content: '';
        display: block;
        width: 3px;
        height: 30px;
        margin-left: 12px;
        background: ${colorRed};
        ${down('md')} {
          display: none;
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
`