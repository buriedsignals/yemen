import { MapboxEvent } from 'mapbox-gl'
import MapBox from '../MapBox/MapBox'
import Header from '../Header/Header'
import { useRouter } from 'next/router'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import useStore from '@/helpers/store'
import IconPin from '../icons/IconPin';
import * as Style from './Map.syles'
import Image from '../image/image';
import { down } from 'styled-breakpoints';
import { useBreakpoint } from 'styled-breakpoints/react-styled';
import IconArrow from '../icons/IconArrow';

export const FilterSlider = ({ ...props }) => {
  const slides = Array.from({ length: 8 }).map(
    (el, index) => `${2015 + index}`
  );
  slides.push('All')
  return (
    <Style.FilterSliderContainer>
      <Style.TitleMap>Civilian casualties from coalition bombings and mines</Style.TitleMap>
      <p className='title'>Filter by year</p>
      <Style.SliderContainer>
        <Swiper
          spaceBetween={0}
          slidesPerView={1}
          centeredSlides={true}
          initialSlide={slides.length - 1}
          allowTouchMove={true}
          onSlideChangeTransitionEnd={(swiper) => {
            swiper.slides.forEach(slide => {
              if (slide.classList.contains('swiper-slide-active')) {
                useStore.setState({
                  mapFilterDate: slide.innerHTML,
                })
              }
            });
          }}
          onClick={(swiper, e) => {
            swiper.slideTo(e.target.dataset.swiperSlideIndex)
          }}
        >
          {slides.map((slideContent, index) => (
            <SwiperSlide key={slideContent} virtualIndex={index}>
              {slideContent}
            </SwiperSlide>
          ))}
        </Swiper>
      </Style.SliderContainer>
    </Style.FilterSliderContainer>
  )
}

export const Popup = ({ ...props }) => {
  const [date, description, fatalities, injuries, media_url, source_url, title, years] =
    useStore((state) => [
      state.popupProperties.date, 
      state.popupProperties.description, 
      state.popupProperties.fatalities, 
      state.popupProperties.injuries, 
      state.popupProperties.media_url, 
      state.popupProperties.source_url, 
      state.popupProperties.title, 
      state.popupProperties.years
    ])

  const selectMedia = () => {
    
    let media = <></>
    if (media_url) {
      const media_format = media_url.split('.').pop()
      if (media_format == 'gif' || media_format == 'jpg' || media_format == 'png' || media_format == 'webp') {
        media = <Image className='media' src={media_url} />
      } else {
        media = <iframe className='media' src={`https://www.youtube.com/embed/${media_url}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      }
    }
    return media
  }

  return (
    <Style.PopupContainer>
      <div className="header">
        <button onClick={() => {
          useStore.setState({
            openPopup: false,
          })
        }} ><span>Back to map</span></button>
      </div>
      <div className="main-container">
        <h2 className='title'>
          <IconPin /> { title }
        </h2>
        <p className='date'>{ date }</p>
      </div>
      { selectMedia() }
      <div className="main-container">
        <div className="datas">
          <div className="data">
            <div className="data-item">
              <p className="data-value">{ fatalities }</p>
              <p className="data-label">Fatalities</p>
            </div>
          </div>
          <div className="data">
            <div className="data-item">
              <p className="data-value">{ injuries }</p>
              <p className="data-label">Injuries</p>
            </div>
          </div>
        </div>
        <div className="description">
          <p dangerouslySetInnerHTML={{__html: description}} />
        </div>
        <a className="link" href={ source_url }>Link to the source</a>
      </div>
      { useBreakpoint(down('md')) ? 
          <button className='up' onClick={() => {
            useStore.setState({
              openPopup: false,
            })
          }}>
            <IconArrow />
          </button>
        : '' }
    </Style.PopupContainer>
  )
}

export default function Map() {
  const route = useRouter().route;
  const [openPopup] = useStore((state) => [ state.openPopup ])
  return (
    <Style.MapContainer>
      {
        openPopup && <Popup />
      }
      <Style.PageContainer className={openPopup && 'openedPopup'}>
        <Header route={route} />
        <MapBox />
        <FilterSlider />
      </Style.PageContainer>
    </Style.MapContainer>
  )
}
