import styled, {css} from 'styled-components'
import { down } from 'styled-breakpoints'

export const ScotchContainer = styled.div`
  position: absolute;
  ${(props) => props.orientation == 'left'
  ? css`
    top: 0;
    left: 20vw;
    width: 8.125vw;
    height: 53.45vh;
    transform: translate3D(-75%, 0, 0);
    ${down('md')} {
      left: 33.33vw;
      width: 13.33vw;
      height: 27.96vh;
    }
  ` : css`
    bottom: 0;
    left: 80vw;
    width: 8.125vw;
    height: 82.71vh;
    transform: translate3D(-25%, 0, 0);
    ${down('md')} {
      left: 66.66vw;
      width: 13.33vw;
      height: 43.28vh;
    }
  `}
  background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #FFFFFF 18.75%, #FFFFFF 40.1%, rgba(255, 255, 255, 0.22) 100%);
  opacity: 0.05;
`