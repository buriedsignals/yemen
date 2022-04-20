import { colorRed, colorWhite } from '@/helpers/styles'
import { down } from 'styled-breakpoints'
import styled from 'styled-components'

export const LinkPageContainer = styled.a`
  display: flex;
  align-items: center;
  color: ${colorWhite};
  font-family: "Nata-ExtraBlack";
  font-size: 20px;
  line-height: 94.5%;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  ${down('md')} {
    font-size: 16px;
  }
  &::before {
    content: '';
    display: block;
    width: 3px;
    height: 30px;
    margin-right: 12px;
    background: ${colorRed};
  }
`