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
  'Nada': {
    title: ['Nada', 'story'],
    description: [
      'Life was good. It had a smooth rhythm: after school, I would take my brother and my scooter to play in the neighborhood before going home to do my homework.',  
      'Then the war began.',   
      'Everyone around us was escaping the city, but we could not. The airport was closed, and the only way to flee was by road. We couldn’t – it would have been so difficult for my little brother, who was ill and disabled. My mum said we will be strong together and we will survive.',  
      'It is hard to describe what it’s like to live in a war. There were food shortages. The air was filled with booming and shooting all the time. We felt airplane attacks that rocked the whole building and heard the sound of our neighbors’ children crying in fear.',  
      'There is so much disappointment and despair. My favorite restaurant, my hang out spots with my friends, my beloved school – they are all ashes now. My childhood friends joined the army. Many have died. My beautiful village is burning and the gardens are deserts. I used to draw and read a lot, but I stopped. I felt like I had to erase my beautiful memories and they were replaced with emptiness, fear, depression.',
      'You never know if it will ever end. You are not just scared to die: you fear severe injuries, or not being able to reach a hospital in time to help yourself or a loved one.',   
      'We used to sleep in the room in the middle of our house, but was so scary to hear the booming nearby.  You sleep with all of your senses awake, awaiting horrible things. When you wake up, the first thing you do is turn on the TV and search for hope between the horrible news.',
      'Every day is the same day, if not worse. You question everything about the future: Am I going to get my degree? Am I going to have a job? Am I going to fall in love?',  
      
      'Am I going to live?'
      
    ],
    image: '../img/img-portrait-ofra-haza.png'
  },
  'bushra': {
    title: ['Bushra', 'story'],
    description: [
      'Before the war I had a normal life. I went to school in my wheelchair. I had friends coming over and we used to chat, draw and sing in my room. I felt safe.',
      'After the war started I got displaced twice. It was three years ago when I was at school in Hodeida and an airstrike hit the neighbourhood of my school. Everyone was very scared and the school got damaged.',
      'We couldn’t go back to school for a week after that and even then there were more and more attacks in schools, so all schools in the area stopped operating. I started feeling very afraid.'
    ],
    image: '../img/img-portrait-ofra-haza.png'
  },
  'sadam': {
    title: ['Sadam', 'story'],
    description: [
      'Before the war, I had a good life; we had our own house and I was going to school, I was playing with my friends, I was feeling safe. I used to play football. I enjoyed playing football the most.',
      'When the war started, my life was not the same. One day, I an airstrike hit the area where we were. My dad died instantly and I was injured in the leg. I had an operation but my leg was broken in four different places so after the operation I couldn’t walk properly, I had to be held by someone.',
      'Now I am not going to school because I recently had another operation in my leg and I am still recovering. I am really looking forward to going back to school when my leg is better.',
      'When I grow up, I want to become a doctor so I can help people who are sick and injured. I hope Yemen will become as it was before the war so I can go back to Al-Mokha.'
    ],
    image: '../img/img-portrait-ofra-haza.png'
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
