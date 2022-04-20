import IconLogo from '../icons/IconLogo'
import Link from 'next/dist/client/link'
import * as Style from './Header.syles'
import IconFacebook from '../icons/IconFacebook'
import IconTwitter from '../icons/IconTwitter'
import LinkPage from '../LinkPage/LinkPage'
import { useBreakpoint } from 'styled-breakpoints'

export default function Header({route = null}) {
  console.log(useBreakpoint)
  return (
    <Style.HeaderContainer className={ route == "/article" && 'isArticle' }>
      { route == "/" ? 
        <Link href='/'>
          <Style.LinkLogoContainer>
            <IconLogo />
            <Style.TextLogoContainer>
              <p>Produced by</p>
              <p>Buried Signals</p>
            </Style.TextLogoContainer>
          </Style.LinkLogoContainer>
        </Link>
        : route == "/article" ?
          <LinkPage href="/map">Explore the map</LinkPage>
          : route == "/map" &&
            <LinkPage href="/article">Read the article</LinkPage>
      }
      <Style.SocialContainer className="socialContainer">
        { route == "/article" &&  <LinkPage href='google.fr' target="_blank">Stop the blockage</LinkPage> }
        <a className="socialItem" href='' target="_blank">
            <IconFacebook />
        </a>
        <a className="socialItem" href='' target="_blank">
            <IconTwitter />
        </a>
      </Style.SocialContainer>
    </Style.HeaderContainer>
  )
}
