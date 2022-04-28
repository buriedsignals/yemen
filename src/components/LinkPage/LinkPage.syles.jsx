import { colorRed, colorWhite } from '@/helpers/styles'
import { down } from 'styled-breakpoints'
import styled from 'styled-components'

export const LinkPageContainer = styled.a`
  position: relative;
  display: flex;
  align-items: center;
  padding-left: 15px;
  padding-right: 12px;
  color: ${colorWhite};
  font-family: "Nata-ExtraBlack";
  font-size: 20px;
  line-height: 94.5%;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  ${down('md')} {
    font-size: 16px;
  }
  span {
    z-index: 2;
  }
  &::before {
    content: '';
    position: absolute;
    left: 0;
    display: block;
    width: 3px;
    height: 30px;
    background: ${colorRed};
    z-index: 1;
    transition: width 0.6s cubic-bezier(0.16, 1, 0.3, 1);
  }
  &:hover {
    &::before {
      width: 100%;
    }
  }
`