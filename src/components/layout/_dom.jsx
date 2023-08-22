import * as Style from './_dom.syles.jsx'
import useStore from '@/helpers/store'
import { useEffect, useRef, useState } from 'react'
import { Helmet } from 'react-helmet'
import useSite from '@/middleware/hooks/use-site'
import { helmetSettingsFromMetadata } from '@/middleware/lib/site'

const HeaderRouteTitle = () => {
  const router = useStore((state) => state.router)
  const { asPath } = router

  // const { homepage, metadata = {} } = useSite()
  const { homepage, metadata = {} } = { homepage: 'test', metadata: {} }

  if (!metadata.og) {
    metadata.og = {}
  }

  metadata.og.url = `${homepage}${asPath}`

  const helmetSettings = {
    defaultTitle: metadata.title,
    titleTemplate:
      process.env.WORDPRESS_PLUGIN_SEO === true
        ? '%s'
        : `%s - ${metadata.title}`,
    ...helmetSettingsFromMetadata(metadata, {
      setTitle: false,
      link: [
        {
          rel: 'alternate',
          type: 'application/rss+xml',
          href: '/feed.xml',
        },

        // Favicon sizes and manifest generated via https://favicon.io/

        {
          rel: 'apple-touch-icon',
          sizes: '180x180',
          href: '/apple-touch-icon.png',
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '16x16',
          href: '/favicon-16x16.png',
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '32x32',
          href: '/favicon-32x32.png',
        },
        {
          rel: 'manifest',
          href: '/site.webmanifest',
        },
      ],
    }),
  }

  return <Helmet {...helmetSettings} />
}
const Dom = ({ children }) => {
  // States
  const [show, setShow] = useState(false)
  // Effects
  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0)
      setShow(true)
    }, 500);
  }, [])
  const ref = useRef(null)
  useStore.setState({ dom: ref })
  return (
    <Style.Dom ref={ref} className={ `dom ${ show ? "is-show" : "" }` }>
      <HeaderRouteTitle />
      {children}    
    </Style.Dom>
  )
}

export default Dom
