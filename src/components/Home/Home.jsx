import * as Style from './Home.syles'

import Grid from '../Grid/Grid'
import Header from '../Header/Header'
import Scotch from '../Scotch/Scotch'
import Credit from '../Credit/Credit'
import Title from '../Title/Title'
import Line from '../Line/Line'
import LinkPage from '../LinkPage/LinkPage'

import { useRouter } from 'next/router'

export default function Home() {
  const route = useRouter().route;
  return (
    <Style.PageContainer>
      <Grid />
      <Style.ScotchContainer>
        <Scotch orientation={'left'} />
        <Scotch orientation={'right'} />
      </Style.ScotchContainer>
      <Style.ContentContainer>
        <Header route={route} />
        <Style.Content>
          <Line />
          <Title className="title"><span className='red'>The</span> <span style={{ whiteSpace: 'nowrap' }}>Yemen crisis</span></Title>
          <p>A historical and humanitarian overview.</p>
          <Style.ListLink>
            <LinkPage href="/article">Read the article</LinkPage>
            <LinkPage href="/map">Explore the map</LinkPage>
          </Style.ListLink>
        </Style.Content>
        <Credit />
      </Style.ContentContainer>
    </Style.PageContainer>
  )
}
