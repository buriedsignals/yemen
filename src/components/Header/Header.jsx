import IconLogo from '../icons/IconLogo'
import IconLogoYemenFondation from '../icons/IconLogoYemenFondation'
import Link from 'next/dist/client/link'
import * as Style from './Header.syles'
import IconFacebook from '../icons/IconFacebook'
import IconTwitter from '../icons/IconTwitter'
import LinkPage from '../LinkPage/LinkPage'
import { useBreakpoint } from 'styled-breakpoints'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function Header({animate = false, route = null, ...props}) {
  const headerRef = useRef(null);
  const textSocialShare = 'Stop The Blockade !'
  const hashtagSocialShare = 'YemenCantWait'
  const urlSocialShare = 'https://yementribute.com'
  useEffect(() => {
    if (animate) {
      const tl = gsap.timeline()
      if (headerRef.current) {
        tl.fromTo(headerRef.current, 1, {opacity: 0 }, {opacity: 1}, '+=2')
      }
      return () => {
        if (tl) {
          tl.kill()
        }
      }
    }
  }, []);
  return (
    <Style.HeaderContainer ref={headerRef} {...props} className={ route == "/article" && 'isArticle' }>
      { route == "/" ? 
        <Style.LinksContainer>
          <Style.LinkLogoContainer href='https://www.studio.buriedsignals.com/' target="_blank" rel="noreferrer">
            <IconLogo />
            <Style.TextLogoContainer>
              <p>Produced by</p>
              <p>Buried Signals</p>
            </Style.TextLogoContainer>
          </Style.LinkLogoContainer>
          <Style.LinkLogoContainer href='https://yemenfoundation.org' target="_blank" rel="noreferrer">
            <IconLogoYemenFondation />
            <Style.TextLogoContainer>
              <p>In partnership with the</p>
              <p>Yemen Fondation</p>
            </Style.TextLogoContainer>
          </Style.LinkLogoContainer>
        </Style.LinksContainer>
        : route == "/article" ?
          <LinkPage href="/map">Explore the map</LinkPage>
          : route == "/map" ?
            <LinkPage href="/article">Read the article</LinkPage>
            : route == "/story/[id]" &&
              <LinkPage href="/article">Go back to the article</LinkPage>
      }
      <Style.SocialContainer className="socialContainer">
        { (route == "/article" || route == "/map") &&  <LinkPage href='https://actionnetwork.org/letters/pass-a-war-powers-resolution-to-help-end-the-war-in-yemen?clear_id=true' target="_blank">Stop the blockade</LinkPage> }
        <a className="socialItem" href={`https://www.facebook.com/sharer/sharer.php?p[url]=${urlSocialShare}`} target="_blank">
            <IconFacebook />
        </a>
        <a className="socialItem" href={`https://twitter.com/intent/tweet?text=${textSocialShare}&hashtags=${hashtagSocialShare}&url=${urlSocialShare}`} target="_blank">
            <IconTwitter />
        </a>
      </Style.SocialContainer>
    </Style.HeaderContainer>
  )
}
