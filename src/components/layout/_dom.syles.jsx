import styled from 'styled-components'
import { down } from 'styled-breakpoints'
import { colorWhite } from '@/helpers/styles'

export const Dom = styled.div`
  opacity: 0;
  transition: all 0.15s ease-out;
  &.is-show {
    opacity: 1;
    transition: all 0.5s ease-in;
  }
`