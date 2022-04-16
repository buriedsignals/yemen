import styled from 'styled-components'
import { down } from 'styled-breakpoints'
import { colorWhite } from '@/helpers/styles'

export const HeaderContainer = styled.div`
  position: fixed;
  top: 26px; left: 26px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: calc(100% - 52px);
  z-index: 10;
  ${down('md')} {
    top: 11px; left: 14px;
    width: calc(100% - 28px);
  }
  .linkPage {
    margin-left: 20px;
  }
`


export const LinkLogoContainer = styled.a`
  display: flex;
  svg {
    display: inline;
  }
`

export const TextLogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 10px;
  color: ${colorWhite};
  font-family: "Nata-ExtraBlack";
  line-height: 94.5%;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  ${down('md')} {
    display: none;
  }
  p {
    &:first-child {
      font-size: 10px;
    }
    &:last-child {
      font-size: 20px;
    }
  }
`

export const SocialContainer = styled.div`
  display: flex;
  a {
    &:not(:last-child) {
      margin-right: 10px;
    }
    svg {
      ${down('md')} {
        width: 25px;
        height: 25px;
      }
    }
  }
`