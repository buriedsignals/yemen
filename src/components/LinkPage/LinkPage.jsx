import * as Style from './LinkPage.syles'

import Link from 'next/dist/client/link'

export default function LinkPage({ children, ...props }) {
  return (
    <Link {...props}>
      <Style.LinkPageContainer className="linkPage">
        { children }
      </Style.LinkPageContainer>
    </Link>
  )
}
