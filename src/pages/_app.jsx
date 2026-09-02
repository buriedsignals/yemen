import React from 'react'
import Dom from '@/components/layout/_dom'

import '@/styles/index.css'
import Head from 'next/head'

const title = 'The Yemen Tribute'
const url = 'https://yemen.buriedsignals.com/'
const description =
  'A historical and humanitarian overview commemorating the Yemeni fallen.'
const author = 'Buried Signals Studio'
const image = `${url}img/img-meta.png`

function Layout({ children }) {
  return <Dom>{children}</Dom>
}

function App({ Component, pageProps = {} }) {
  return (
    <>
      <Head>
          {/* Recommended Meta Tags */}
          <meta charSet='utf-8' />
          <meta name='language' content='english' />
          <meta httpEquiv='content-type' content='text/html' />
          <meta name='author' content={author} />
          <meta name='designer' content={author} />
          <meta name='publisher' content={author} />

          {/* Search Engine Optimization Meta Tags */}
          <title>{title}</title>
          <meta name='description' content={description} />
          <link rel='canonical' href={url} />
          <meta
            name='keywords'
            content='Buried Signals Studio, The Yemen Tribute, Yemen Fondation'
          />
          <meta name='robots' content='index,follow' />
          <meta name='distribution' content='web' />
          {/* 
      Facebook Open Graph meta tags
        documentation: https://developers.facebook.com/docs/sharing/opengraph */}
          <meta property='og:title' content={title} />
          <meta property='og:type' content='website' />
          <meta property='og:url' content={url} />
          <meta property='og:image' content={image} />
          <meta property='og:image:secure_url' content={image} />
          <meta property='og:image:type' content='image/png' />
          <meta property='og:image:width' content='1440' />
          <meta property='og:image:height' content='810' />
          <meta property='og:image:alt' content='The Yemen Tribute' />
          <meta property='og:site_name' content={title} />
          <meta property='og:description' content={description} />

          <link rel='apple-touch-icon' href='/icons/apple-touch-icon.png' />
          <link
            rel='apple-touch-icon'
            sizes='16x16'
            href='/icons/favicon-16x16.png'
          />
          <link
            rel='apple-touch-icon'
            sizes='32x32'
            href='/icons/favicon-32x32.png'
          />
          <link
            rel='apple-touch-icon'
            sizes='180x180'
            href='/icons/apple-touch-icon.png'
          />
          <link rel='manifest' href='/manifest.json' />
          <link
            rel='mask-icon'
            color='#000000'
            href='/icons/safari-pinned-tab.svg'
          />
          <link rel='apple-touch-startup-image' href='/startup.png' />

          {/* Meta Tags for HTML pages on Mobile */}
          {/* <meta name="format-detection" content="telephone=yes"/>
        <meta name="HandheldFriendly" content="true"/>  */}
          <meta
            name='viewport'
            content='width=device-width, minimum-scale=1, initial-scale=1.0'
          />
          <meta name='theme-color' content='#000' />
          <link rel='shortcut icon' href='/icons/favicon.ico' />

          {/* 
      Twitter Summary card
        documentation: https://dev.twitter.com/cards/getting-started
        Be sure validate your Twitter card markup on the documentation site. */}
          <meta name='twitter:card' content='summary_large_image' />
          <meta name='twitter:site' content='@buriedsignals' />
          <meta name='twitter:title' content={title} />
          <meta name='twitter:description' content={description} />
          <meta name='twitter:creator' content='@buriedsignals' />
          <meta name='twitter:image' content={image} />
          <meta name='twitter:image:alt' content='The Yemen Tribute' />
    </Head>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </>
  )
}

export default App
