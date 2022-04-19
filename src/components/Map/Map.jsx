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
import YouTube from 'react-youtube';

/*
  CSV
  - date : dd-mm-yyyy | type : Text | default :  | exemple : 19-04-2022
  - description : text | type : Text | default :  | exemple : Description
  - fatalities : number | type : Number | default :  | exemple : 0
  - injuries : number | type : Number | default :  | exemple : 0
  - longitude : number | type : Number | default :  | exemple : 0
  - latitude : number | type : Number | default :  | exemple : 0
  - main_image_url : url | type : Text | default :  | exemple : https://www.google.fr/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png
  - main_video_url : url | type : Text | default :  | exemple : https://www.youtube.com/embed/Buq0poVzSZU
  - more_images_url = url, url, url | type : Text | default :  | exemple : https://www.google.fr/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png, https://www.google.fr/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png, https://www.google.fr/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png
  - source_url : url | type : Text | default :  | exemple : https://www.google.fr/
  - title : text | type : Text | default :  | exemple : Thamar Prison - Thamar
  - years : yyyy | type : Number | default :  | exemple : 2022

*/

export const FilterSlider = ({ ...props }) => {
  const slides = Array.from({ length: 8 }).map(
    (el, index) => `${2015 + index}`
  );
  slides.push('All')
  return (
    <Style.FilterSliderContainer>
      <p className='title'>Filter by years</p>
      <Style.SliderContainer>
        <Swiper
          spaceBetween={0}
          slidesPerView={1}
          centeredSlides={true}
          initialSlide={slides.length - 1}
          onSlideChangeTransitionEnd={(swiper) => {
            swiper.slides.forEach(slide => {
              if (slide.classList.contains('swiper-slide-active')) {
                useStore.setState({
                  mapFilterDate: slide.innerHTML,
                })
              }
            });
          }}
          onClick={(swiper, e) => swiper.slideTo(e.target.dataset.swiperSlideIndex)}
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
    const media_format = media_url.split('.').pop()
    if (media_format == 'gif' || media_format == 'jpg' || media_format == 'png' || media_format == 'webp') {
      media = <Image className='media' src={media_url} />
    } else {
      media = <iframe className='media' src={media_url} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
    }
    return media
  }

  return (
    <Style.PopupContainer>
      <div className="header"></div>
      <div className="main-container">
        <h2 className='title'>
          <IconPin /> { title }
        </h2>
        <p className='date'>{ date }</p>
        { selectMedia() }
        <div className="datas">
          <div className="datas-item">
            <p className="data-value">{ fatalities }</p>
            <p className="data-label">Fatalities</p>
          </div>
        </div>
        <div className="description">
          <p>{ description }</p>
        </div>
        <a className="link" href={ source_url }>Link to the source</a>
      </div>
    </Style.PopupContainer>
  )
}

export default function Map() {
  const route = useRouter().route;
  return (
    <Style.MapContainer>
      <Popup />
      <Style.PageContainer>
        <Header route={route} />
        <MapBox />
        <FilterSlider />
      </Style.PageContainer>
    </Style.MapContainer>
  )
}
