import * as Style from './Summary.syles'
import useStore from '@/helpers/store'
import { useEffect, useState } from 'react'
import IconBurger from '../icons/IconBurger'
import { colorGrey, colorRed, colorWhite } from '@/helpers/styles'

export default function Summary() {
  const anchors = [...Array(7)]
  const [indexChapter, progress, openChapters] = useStore((state) => [state.summary.indexChapter, state.summary.progress, state.openChapters])
  const [title, setTitle] = useState("Introduction")
  const chapters = ["Introduction", "A history of invasion", "Division into North and South Yemen", "Conflict Background", "Key Players", "Impacts of the war", "What can we do? Stop the blockade"]
  useEffect(() => {
    return () => {
      useStore.setState({ summary: {
        indexChapter: 0,
        progress: 0,
        openChapters: false
      }})
    }
  }, [])
  useEffect(() => {
    if (openChapters) {
      document.body.style.overflowY = 'hidden'
      document.body.style.height = '100vw'
    } else {
      document.body.style.overflowY = 'inherit'
      document.body.style.height = '100%'
    }
  }, [openChapters])
  return (
    <Style.SummaryContainer>
      <div className="desktopView">
        <Style.Chapter>{chapters[indexChapter]}</Style.Chapter>
        <div>
          { 
            chapters.map((chapter, i) => {
              return <div key={i} className={`anchor ${i <= indexChapter && 'isActive'}`} >
                  <a href={"#section" + i}>{ i + 1 }</a>
                  <div className="line">
                    <span style={{ width: i < indexChapter ? '100%' : i == indexChapter ? `${progress * 100}%` : '0%' }}></span>
                  </div>
                </div>
            })
          }
        </div>
        <Style.ReadInfo>9 minute read</Style.ReadInfo>
      </div>
      <div className="mobileView">
        { 
          openChapters ? 
          <div className="panel">
            <p>{ `${parseInt(indexChapter) + 1}/${anchors.length}` }</p>
            <ol>
              {
                chapters.map((chapter, i) => {
                  return <li key={i} >
                      <a href={"#section" + i} onClick={
                          (e) => { 
                            useStore.setState({
                              indexChapter: i,
                              progress: 0,
                              openChapters: false,
                            })
                          }
                        } style={{ color: i < indexChapter ? colorWhite : i == indexChapter ? colorRed : colorGrey }}>{ chapters[i] }</a>
                    </li>
                })
              }
            </ol>
            <div className="close">
              <button onClick={
              () => { 
                useStore.setState({
                  openChapters: false,
                })
              }
            }></button>
              <p>close</p>
            </div>
          </div>
          :
          <div className="footer">
            <button onClick={
              () => { 
                useStore.setState({
                  openChapters: true,
                })
              }
            }><IconBurger /></button>
            <div>
              <p>{chapters[indexChapter]}</p>
              <p>{ `${parseInt(indexChapter) + 1}/${anchors.length}` }</p>
            </div>
          </div>
        }
        <div className="line" style={{ width: `${progress * 100}%` }}></div>
      </div>
    </Style.SummaryContainer>
  )
}
