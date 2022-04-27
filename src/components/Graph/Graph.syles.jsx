import { colorBlack, colorGrey, colorRed, colorWhite } from '@/helpers/styles'
import { down } from 'styled-breakpoints'
import styled from 'styled-components'

export const GraphContainer = styled.div`
  margin: 40px auto;
  iframe {
    width:  100%;
    // width: calc(1060px - 56px);
    // height: calc((1060px - 56px) / 1.56);
    // ${down('md')} {
    //   width: calc(100vw - 56px);
    //   height: calc((100vw - 56px) * 1.56);
    // }
  }
`