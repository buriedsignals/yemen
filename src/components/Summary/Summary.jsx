import * as Style from './Summary.syles'
import useStore from '@/helpers/store'
import { useEffect, useState } from 'react'

export default function Summary() {
  const anchors = [...Array(7)]
  const [indexChapter, progress] = useStore((state) => [state.summary.indexChapter, state.summary.progress])
  const [title, setTitle] = useState("Introduction")
  useEffect(() => {
    console.log('changeChpater', indexChapter)
    switch (indexChapter) {
      case "0":
        setTitle("Introduction")
        break;
      case "1":
        setTitle("A history of invasion")
        break;
      case "2":
        setTitle("Division into North and South Yemen")
        break;
      case "3":
        setTitle("Conflict Background")
        break;
      case "4":
        setTitle("Key Players")
        break;
      case "5":
        setTitle("Impacts of the war")
        break;
      case "6":
        setTitle("What can we do? Stop the blockade")
        break;
    }
  }, [indexChapter])
  useEffect(() => {
    return () => {
      useStore.setState({ summary: {
        indexChapter: 0,
        progress: 0
      }})
    }
  }, [])
  return (
    <Style.SummaryContainer>
      <Style.Chapter>{title}</Style.Chapter>
      <div>
        { 
          anchors.map((anchor, i) => {
            return <div key={i} className={`anchor ${i <= indexChapter && 'isActive'}`} >
                <a href="#">{ i + 1 }</a>
                <div className="line">
                  <span style={{ width: i < indexChapter ? '100%' : i == indexChapter ? `${progress * 100}%` : '0%' }}></span>
                </div>
              </div>
          })
        }
      </div>
      <Style.ReadInfo>5 minutes read</Style.ReadInfo>
    </Style.SummaryContainer>
  )
}
