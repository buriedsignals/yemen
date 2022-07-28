import * as Style from './Home.syles'

import Grid from '../Grid/Grid'
import Header from '../Header/Header'
import Scotch from '../Scotch/Scotch'
import Credit from '../Credit/Credit'
import Disclaimer from '../Disclaimer/Disclaimer'
import Title from '../Title/Title'
import Line from '../Line/Line'
import LinkPage from '../LinkPage/LinkPage'
import gsap from 'gsap'
import { CustomEase } from "gsap/dist/CustomEase";
gsap.registerPlugin(CustomEase);
const ease = CustomEase.create("custom", "M0,0 C0.084,0.61 0.071,0.709 0.1,0.8 0.128,0.89 0.374,1 1,1")

import { useRouter } from 'next/router'
import { useRef, useEffect, useState } from 'react'
import Image from '../image/image'

export default function Home() {
  const route = useRouter().route;
  const bgRef = useRef([]);
  const titleRef = useRef([]);
  const descRef = useRef();
  useEffect(() => {
    const tl = gsap.timeline()
    if (bgRef.current) {
      tl.fromTo(bgRef.current, 2, {scaleX: 1.1, scaleY: 1.1}, {scaleX: 1, scaleY: 1, ease: 'expo.out'})
    }
    if (titleRef.current) {
      tl.fromTo(titleRef.current[0], 0.5, {opacity: 0}, {opacity: 1}, "-=1.9")
      tl.fromTo(titleRef.current[1], 0.5, {opacity: 0}, {opacity: 1}, "-=1.6")
      tl.fromTo(titleRef.current[2], 0.5, {opacity: 0}, {opacity: 1}, "-=1.3")
    }
    if (descRef.current) {
      tl.fromTo(descRef.current, 0.75, {opacity: 0}, {opacity: 1}, '-=1')
    }
    return () => {
      if (tl) {
        tl.kill()
      }
    }
  }, []);
  return (
    <Style.PageContainer>
      <div className='bg'>
        <Image ref={bgRef} src='img/bg-landing.jpg' alt='Photo Yemen' />
      </div>
      <Grid  animate={true} />
      <Style.ScotchContainer>
        <Scotch animate={true} orientation={'left'} />
        <Scotch animate={true} orientation={'right'} />
      </Style.ScotchContainer>
      <Style.ContentContainer>
        <Header animate={true} route={route} />
        <Style.Content>
          <Line className="line" animate={true} />
          <Title className="title">
            <span className="red word">
              <span ref={el => titleRef.current[0] = el}>The</span>
            </span> <span className="red word">
              <span ref={el => titleRef.current[1] = el}>Yemen</span>
            </span> <span className="word">
              <span ref={el => titleRef.current[2] = el} style={{ whiteSpace: 'nowrap' }}>tribute</span>
            </span>
          </Title>
          <p ref={descRef}>A historical and humanitarian overview commemorating the Yemeni fallen.</p>
          <Style.ListLink>
            <LinkPage animate={true} href="/article">Read the article</LinkPage>
            <LinkPage animate={true} href="/map">Explore the map</LinkPage>
          </Style.ListLink>
        </Style.Content>
        <Disclaimer animate={true} />
        <Credit animate={true} />
      </Style.ContentContainer> 
    </Style.PageContainer>
  )
}
