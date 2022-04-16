import styled from 'styled-components'
import { down } from 'styled-breakpoints'

export const GridContainer = styled.div`
  position: fixed;
  top: 0; left: 0;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  width: 100vw;
  height: 100vh;
  pointer-events: none;
  ${down('md')} {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(5, 1fr);
  }
  .item {
    border: 1px solid rgba(255,255,255,0.2);
  }
`