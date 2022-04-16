import * as Style from './Summary.syles'

export default function Summary() {
  const anchors = [...Array(7)]
  return (
    <Style.SummaryContainer>
      <Style.Chapter>Introduction</Style.Chapter>
      <div>
        { 
          anchors.map((anchor, i) => {
            return <div key={i} className={`anchor ${i == 0 && 'isActive'}`} >
                <a href="#">{ i + 1 }</a>
                <div className="line">
                  <span></span>
                </div>
              </div>
          })
        }
      </div>
      <Style.ReadInfo>5 minutes read</Style.ReadInfo>
    </Style.SummaryContainer>
  )
}
