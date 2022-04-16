import IconLogo from '../icons/IconLogo'
import Link from 'next/dist/client/link'
import * as Style from './Header.syles'
import IconFacebook from '../icons/IconFacebook'
import IconTwitter from '../icons/IconTwitter'
import LinkPage from '../LinkPage/LinkPage'

export default function Header({route = null}) {
  return (
    <Style.HeaderContainer>
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
      <Style.SocialContainer>
        { route == "/article" &&  <LinkPage href='google.fr' target="_blank">Stop the blockage</LinkPage> }
        <a href='' target="_blank">
            <IconFacebook />
        </a>
        <a href='' target="_blank">
            <IconTwitter />
        </a>
      </Style.SocialContainer>
    </Style.HeaderContainer>
  )
}
