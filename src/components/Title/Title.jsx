import * as Style from './Title.syles'

export default function Title({ children, ...props }) {
  return (
    <Style.TitleContainer className='title' {...props}>
      {children}
    </Style.TitleContainer>
  )
}
