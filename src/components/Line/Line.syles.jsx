import { colorRed, colorWhite } from '@/helpers/styles'
import { down } from 'styled-breakpoints'
import styled from 'styled-components'

export const LineContainer = styled.div`
  width: 165px;
  height: 5px;
  background: linear-gradient(90deg, ${colorRed} 15%, ${colorWhite} 15%);
  ${down('md')} {
    height: 2px;
  }
`