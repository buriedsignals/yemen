import * as Style from './Grid.syles'

export default function Grid() {
  const items = [...Array(15)]
  return (
    <Style.GridContainer className='gridContainer'>
      { 
        items.map((item, i) => {
          return <div key={i} className='item' />
        })
      }
    </Style.GridContainer>
  )
}
