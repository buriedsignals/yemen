import { colorRed, colorWhite } from '@/helpers/styles'
import { down } from 'styled-breakpoints'
import styled from 'styled-components'

export const TitleContainer = styled.h1`
  padding: 20px 0 26px;
  color: ${colorWhite};
  font-family: "Nata-SemiBold";
  font-size: 140px;
  line-height: 132px;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  ${down('md')} {
    font-size: 100px;
    line-height: 94px;
  }
  .red {
    color: ${colorRed};
  }
`