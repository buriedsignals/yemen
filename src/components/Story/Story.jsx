import Header from '../Header/Header'
import { useRouter } from 'next/router'
import * as Style from './Story.syles'
import Line from '../Line/Line';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import { useEffect, useRef, useState } from 'react';
import Title from '../Title/Title';


const datas = {
  'ofra_haza': {
    title: ['Ofra HAZA', 'story'],
    description: [
      'Yemen is a territory on the southern tip of the Arabian peninsula which 24 million people call home and which has been designated the world’s worst humanitarian crisis by the UN. Western media has been repeatedly blaming the Houthis, however few of these stories mention that the member countries of the UN Security Council (who are responsible for restoring peace in Yemen) have all sold weapons to Saudi Arabia. <a href="" target="_blank">[1]</a>',
      'This essay puts a historical lens on the current crisis to give a different outlook on the current narrative. Yemen is a very old country with a rich history, full of foreign invasions being foiled by stubborn local resistance.',
      'But first, a few memorable historical facts:'
    ],
    image: '../img/img-portrait-ofra-haza.jpg'
  }
}

export default function Story() { 
  const router = useRouter()
  const route = useRouter().route
  const { id } = router.query
  const [title, setTitle] = useState()
  const [description, setDescription] = useState()
  const [image, setImage] = useState()
  useEffect(() => {
    if (id) {
      setTitle(datas[id].title)
      setDescription(datas[id].description)
      setImage(datas[id].image)
    }
  }, [id])

  return (
    <Style.StoryContainer>
      <Style.Background image={image} />
      <Style.ContentContainer>
        <Header route={route} />
        <Style.Content>
          <Style.SectionHero>
            <div>
              <Title><span className="red">{title ? title[0] : ''}</span> {title ? title[1] : ''}</Title>
              <Line />
            </div>
          </Style.SectionHero>
          <Style.SectionDescription>
            <Style.DescriptionContainer>
              {
                description ?description.map((desc, index) => {
                  return <p key={index} dangerouslySetInnerHTML={{__html: desc}} />
                }) : ''
              }
            </Style.DescriptionContainer>
          </Style.SectionDescription>
        </Style.Content>
      </Style.ContentContainer>
    </Style.StoryContainer>
  )
}
