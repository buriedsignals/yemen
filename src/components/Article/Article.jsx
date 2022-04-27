import Grid from '../Grid/Grid'
import Header from '../Header/Header'
import { useRouter } from 'next/router'
import * as Style from './Article.syles'
import Summary from '../Summary/Summary';
import Title from '../Title/Title';
import Line from '../Line/Line';
import Image from '../image/image';
import IconArrow from '../icons/IconArrow';
import Graph from '../Graph/Graph';
import YouTube from 'react-youtube';
import LinkPage from '../LinkPage/LinkPage';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import { useEffect, useRef } from 'react';
import useStore from '@/helpers/store'
import IconFacebook from '../icons/IconFacebook';
import IconTwitter from '../icons/IconTwitter';

export const ButtonStory = ({ srcImg, altImg, firstname, surname, ...props }) => {
  return <Style.ButtonStory {...props}>
    <div>
      <Image src={srcImg} alt={altImg} />
      <p><span>{ firstname }</span> <span>{ surname }</span></p>
    </div>
    <IconArrow />
  </Style.ButtonStory>
}

export const Section = ({ children, ...props }) => {
  const sectionRef = useRef();
  console.log(useStore.getState().summary)

  useEffect(() => {
    ScrollTrigger.create({
      id: 'section',
      trigger: sectionRef.current,
      start: 'top 50%',
      end: 'bottom 50%',
      markers: false,
      onEnter: (self) => {
        useStore.setState({ summary: {
          ...useStore.getState().summary,
          indexChapter: self.vars.trigger.dataset.index
        }})
      },
      onEnterBack: (self) => {
        useStore.setState({ summary: {
          ...useStore.getState().summary,
          indexChapter: self.vars.trigger.dataset.index
        }})
      },
      onUpdate: (self) => {
        useStore.setState({ summary: {
          ...useStore.getState().summary,
          progress: self.progress
        }})
      }
    });
    return () => {
      ScrollTrigger.refresh()
      if (ScrollTrigger.getById('section')) {
          ScrollTrigger.getById('section').kill()
      }
    }
  }, []);
  return (
    <div ref={sectionRef} {...props}>
      { children }
    </div>
  );
}

export default function Article() {
  const route = useRouter().route;  

  return (
    <Style.ArticleContainer>
      <Style.Background />
      <Style.ContentContainer>
        <Header route={route} />
        <Style.Content>
          <Style.SectionHero>
            <Title><span className="red">The Yemen</span> crisis in historical context</Title>
            <div className="moreMobil">
              <p>5 minutes read</p>
              <p>Share :</p>
              <div className="socials">
                <a className="socialItem" href='' target="_blank">
                    <IconFacebook />
                </a>
                <a className="socialItem" href='' target="_blank">
                    <IconTwitter />
                </a>
              </div>
            </div>
            <Line />
          </Style.SectionHero>
          <Style.SectionStories>
            <h3>Stories of 3 yemenis what is like to be in their shoes</h3>
            <ul>
              <li>
                <ButtonStory href="/story/ofra_haza" srcImg="/img/img-portrait-ofra-haza.jpg" altImg="Portrait de Ofra Haza" firstname="Ofra" surname="Haza" />
              </li>
              <li>
                <ButtonStory href="" srcImg="/img/img-portrait-muhammad-al-gharsi.jpg" altImg="Portrait de Muhammad Al-Gharsi" firstname="Muhammad" surname="Al-Gharsi" />
              </li>
              <li>
                <ButtonStory href="" srcImg="/img/img-portrait-al-kindi.jpg" altImg="Portrait de Al Kindi" firstname="Al" surname="Kindi" />
              </li>
            </ul>
          </Style.SectionStories> 
          <Section id="section0" data-index="0"> 
            <Style.SectionIntro>
              <div className='introContainer'>
                <div className='title'>
                  <h2>Introduction</h2>
                  <Line />
                </div>
                <Style.DescriptionContainer className='desc'>
                  <p>Yemen is a territory on the southern tip of the Arabian peninsula which 24 million people call home and which has been designated the world’s worst humanitarian crisis by the UN. Western media has been repeatedly blaming the Houthis, however few of these stories mention that the member countries of the UN Security Council (who are responsible for restoring peace in Yemen) have all sold weapons to Saudi Arabia. <a href=""  target="_blank">[1]</a></p>
                  <p>This essay puts a historical lens on the current crisis to give a different outlook on the current narrative. Yemen is a very old country with a rich history, full of foreign invasions being foiled by stubborn local resistance.</p>
                  <p>But first, a few memorable historical facts:</p>
                </Style.DescriptionContainer>
              </div>
              <div className="listIntroContainer">
                <Style.ListNumber>
                  <li>
                    <div className="subliContainer">
                      <div className="liContainer">
                        <span className='numberList'>1</span>
                        <Style.DescriptionContainer>
                          <p>Did you know your Starbucks mocha takes its name from the town of al-Mukha in Yemen? For a few years Yemen was the sole coffee producer in the world. Fortunately for the planet the Dutch broke Yemen’s monopoly in the 18th century when they smuggled coffee trees out of the country and cultivated them in their own colonies.</p>
                        </Style.DescriptionContainer>
                      </div>
                  </div>
                  </li>
                  <li>
                    <div className="subliContainer">
                      <div className="liContainer">
                        <span className='numberList'>2</span>
                        <Style.DescriptionContainer>
                          <p>Sanaa’s Old City is believed to have been built by Shem, the son of Noah, which would make it one of the world’s oldest cities at over two thousand years old.</p>
                        </Style.DescriptionContainer>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="subliContainer">
                      <div className="liContainer">
                        <div className="itemContainer">
                          <span className='numberList'>3</span>
                          <Style.DescriptionContainer>
                            <p>Yemeni men wear Janbiyas as a symbol of honour. They are only unsheathed in extreme cases of conflict.</p>
                          </Style.DescriptionContainer>
                        </div>
                        <Image src="/img/img-janbiyas.png" alt="Picture of janbiyas" />
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="subliContainer">
                      <div className="liContainer">
                        <span className='numberList'>4</span>
                        <Style.DescriptionContainer>
                          <p>Yemen is widely acclaimed as the home of Bilqis, Queen of Saba. The ancient Sabean people who lived under her rule spoke an old Semitic language which is still used today on the island of Socotra.</p>
                        </Style.DescriptionContainer>
                      </div>
                    </div>
                  </li>
                  <li className='liHybrid'>
                    <Image src="/img/img-shibam-wadi.jpg" alt="Picture of Shibam Wadi, Yemen" />
                    <div className="subsubliContainer">
                      <div className="subliContainer">
                        <div className="liContainer">
                          <div className="itemContainer">
                            <span className='numberList'>5</span>
                            <Style.DescriptionContainer>
                              <p>Shibam is a walled desert city with mankind’s oldest (and therefore most sustainable) skyscrapers at 500 years old, built by stacking mud bricks and maintained by its few remaining residents.</p>
                            </Style.DescriptionContainer>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                </Style.ListNumber>
              </div>
            </Style.SectionIntro>
          </Section>  
          <Section id="section1" data-index="1">  
            <Style.Section className='history'>
              <div className="title">
                <h2><span className='red'>A history</span> <span>of invasion</span></h2>
                <Line />
              </div>
              <div className="container">
                <Style.DateContainer>
                  <div className="date-container">
                    <Style.Date>1500</Style.Date>
                  </div>
                  <Style.DescriptionContainer>
                    <p>The recurring theme of foreign powers seeking to invade Yemen and failing to establish military dominance began as early as 25 BC when the Romans sent ten thousand men to annex the region, very few of which returned. A couple decades later when Jerusalem fell to Empire many Jews chose to emigrate to Yemen which is how the Abrahamic faith arrived in the peninsula.</p>
                    <p>In the early sixth century, the ruling elite converted to Judaism and swiftly began a campaign of persecution against local Christians. Yemenite Christians (with support from the Romans) retaliated and the conflict escalated until the Jewish warlords began wiping out thousands in open genocide. Byzantium eventually forged a religious alliance to overthrow them and install a Christian king.</p>
                    <p className='darkest'>Fifty years later the Persians sent an invasion force to secure their rule in the Hadramaut region (which is notoriously difficult to govern with about 1,300 distinct tribes and dialects): the assault failed.</p>
                    <p className='darkest'>Soon afterwards the Mamluks of Egypt conquered most of Yemen, their moment of glory lasted until the Ottoman Empire took control of the coastal regions 15 years later. The Zaydi highland tribes emerged as heroes by resisting both the Mamluk and Ottoman occupations, who retaliated by accusing the Zaydis of being infidels.</p>
                  </Style.DescriptionContainer>
                </Style.DateContainer>
                <Style.Quote>
                  <blockquote>
                    <p>“Yemen is a land with no lord, an empty province. It would be not only possible but easy to capture, and should it be captured, it would send every year a great amount of gold and jewels to India and Constantinople.”</p>
                  </blockquote>
                  <figcaption>
                    <cite>An Ottoman Sultan</cite>
                  </figcaption>
                </Style.Quote>
                <Style.DateContainer>
                  <div></div>
                  <Style.DescriptionContainer>
                    <p className='darkest'>To which the Ottoman accountant-general added a few years later:</p>
                    <p className='darkest'>“We have seen no foundry like Yemen for our soldiers. Each time we have sent an expeditionary force there, it has melted away like salt dissolved in water.”</p>
                    <p className='darkest'>Out of eighty thousand Ottoman soldiers sent to Yemen less than seven thousand survived. Although the Zaidis slowly began reconquering Yemen the era marked the collapse of ancient South Arabian civilization, creating a massive vacuum in time for the arrival of Islam which ousted any remaining religions.</p>
                  </Style.DescriptionContainer>
                </Style.DateContainer>
              </div>
            </Style.Section>
          </Section>  
          <Section id="section2" data-index="2">   
            <Style.Section className='division'>
              <div className="title">
                <h2><span className='red'>Division into North</span> <span>and South Yemen</span></h2>
                <Line />
              </div>
              <div className="container">
                <Style.DateContainer>
                  <div className="date-container">
                    <Style.Date>1918</Style.Date>
                  </div>
                  <Style.DescriptionContainer>
                    <p>The split of Yemen into two countries was not a result of local politics, but of foreign interests. More specifically of British, Ottoman and Egyptian interests.</p>
                    <p>In the 19th century the Sultan of Latej ruled in Aden, the Zaidis ruled in Sana’a and the Hadramaut belonged to the tribes. The British needed a foothold along the gulf for trade and since they’d failed to secure it with the Zaidis they bargained, forged an alliance, betrayed and subsequently evicted the Sultan - declaring Aden a “free zone” in 1850.</p>
                    <p>Around the same time the Ottomans had taken control of the northern region in spite of continued armed resistance by the Zaydi imams who had triumphed against invasion attemps in 1568, 1613, and 1635. A couple new uprisings later the Ottomans retreated to the mid-South and granted autonomy to the Zaydi regions (yet again) in 1911.</p>
                    <p>After the collapse of the Ottoman Empire in 1918, the Turks withdrew from Yemen completely and the northern region’s independence under the Zaydi imams was internationally recognized in 1923. The region transformed into a relatively stable kingdom until the commander of the royal guards staged a coup with Nasser’s support and declared himself President of the Yemen Arab Republic.</p>
                    <p className='darkest'>With the intention of ousting the British, Nasser supplied seventy thousand troups to the Republicans along with military supplies to support Socialist warlords in the South. The British eventually declared the Aden Emergency and left, effectively ending the British Empire.</p>
                    <p className='darkest'>The People’s Republic of Southern Yemen was born, only to be rebranded The Marxist People’s Democratic Republic of Yemen (much nicer) in 1970, otherwise known as a client state of Moscow.</p>
                    <p className='darkest'>So, what’s the purpose of this historical analysis? To confirm that the Yemenis have a very long history of dealing with brutal foreign invaders and the Zaidis have been a symbol of resistance for hundreds of years.</p>
                  </Style.DescriptionContainer>
                </Style.DateContainer>
              </div>
            </Style.Section> 
          </Section>  
          <Section id="section3" data-index="3">  
            <Style.Section className='conflict'>
              <div className="title">
                <h2><span className='red'>Conflict</span> <span>background</span></h2>
                <Line />
              </div>
              <div className="container">
                <Style.DateContainer>
                  <div>
                    <Image src="/img/img-ali-abdullah-saleh.jpg" alt="Picture of Ali Abdullah Saleh">
                      Ali Abdullah Saleh (R) was forced to hand over power to Abdrabbuh Mansour Hadi (L)
                    </Image>
                  </div>
                  <Style.DescriptionContainer>
                    <p>The Cold War had installed a political order in the Middle-East that collapsed along with the USSR in the early 1990s <a href=""  target="_blank">[2]</a>. The former Soviet beneficiaries (Syria, Iraq, Libya and South Yemen) were forced to reconfigure their foreign policies and economic contracts; all of these countries are currently in civil war.</p>
                    <p>In Yemen, the end of the Cold War brought unification between the North (whose patron remained the USA) and the South who had very little leverage in the negotiation. Ali Saleh became the first president of a unified Yemen.</p>
                    <p>During the Arab Spring of 2011 the Yemeni population began protesting against Saleh’s selective austerity policies. He retaliated by conducting drone and economic warfare against his opponents (including al-Qaeda) until he was removed in  February 2012 after being in power for 33 years, and replaced by another Western figurehead, his deputy Abd Rabu Mansour Hadi.</p>
                    <p>This is directly pulled from a UN Security Council Report <a href="/">[3]</a>:</p>
                  </Style.DescriptionContainer>
                </Style.DateContainer>
                <Style.Quote>
                  <blockquote>
                    <p>“The Panel has identified that Khaled Ali Abdullah Saleh has a significant role in the management of financial assets... suspicious transfers of significant funds during the period that certainly fall well outside the normal <span>fund management practices of high-wealth individuals... to launder $83,953,782 within a three-week period in December 2014.”</span></p>
                  </blockquote>
                  <figcaption>
                    <cite>A U.N. Security Council Report</cite>
                  </figcaption>
                </Style.Quote>
                <Style.DateContainer>
                  <div className="date-container">
                    <Style.Date>2015</Style.Date>
                  </div>
                  <Style.DescriptionContainer>
                    <p>Upon arrival in office the first item on Hadi’s agenda was to continue his predecessor’s agenda, despite governing a population who knew he was acting on behalf of foreign interests he began various economic extraction schemes along with the privatization of state land. Most importantly he tried to impose a federation on Yemen which would divide the country into districts with the majority of remaining oil, gas and offshore resources would go to a vast southern Yemen territory to be ruled by a few handpicked officials, leaving the rest of the country impoverished. <a href=""  target="_blank">[4]</a></p>
                    <p>In September 2014, the Houthis (also known as the Zaidis) and many ordinary Yeminis (Sunni included) who were disgruntled with deteriorating conditions in the country, took control of Sana’a. <a href=""  target="_blank">[bbc]</a></p>
                    <p>In February 2015 the Houthis forced the resignation of Hadi in a contested constitutional draft, who moved his cabinet to Aden and declared it as the temporary capital of Yemen.</p>
                    <p>A month later - March 24th 2015 - Hadi made a request for foreign military intervention in Yemen to oppose the Houthi’s ongoing military advancement towards Aden, aided by the former president Ali Saleh’s forces. Hadi fled to Saudi Arabia the next day. <a href=""  target="_blank">[icj]</a></p>
                    <p className='darkest'>On 26 March 2015, a Saudi-led coalition consisting of the UAE, Bahrain, Morocco, Qatar, Sudan, Kuwait, Egypt, and Jordan initiated Operation Decisive Storm which aimed to defeat the Houthis and restore Hadi’s government. The invasion would reverse what the coalition believed to be growing Iranian influence in the region. A couple hours after the coalition was formed, the Obama administration released a statement stressing its support to the coalition and the establishment of a Joint Combined Planning Cell with Saudi Arabia, in addition to pledging logistical and intelligence assistance. <a href=""  target="_blank">[White House Archives]</a></p>
                    <p className='darkest'>The coalition received military equipment and intelligence support from the US, UK and France [bbc], which have been put to use against civilians. All three countries are permanent members of the UN Security Council which is responsible for the welfare of Yemen and its people.</p>
                    <p className='darkest'>In May that year the Houthis formed an alliance with former president Ali Saleh. The coalition ended on the 4th December 2017 with Saleh’s murder after the Houthis accused him of treason when he decided to sideline them in a deal backed by the UAE. <a href=""  target="_blank">[Aljazeera]</a></p>
                    <p className='darkest'>Why so much interest in Yemen? Dr. Blumi argues it is for the economic and geographical value of Yemen.</p>
                  </Style.DescriptionContainer>
                </Style.DateContainer>
              </div>
            </Style.Section> 
          </Section>  
          <Image className="fullWidth" src="/img/img-yemen-landscape.jpg" alt="Photo of Yemen" />
          <Section id="section4" data-index="4">   
            <Style.Section className='players'>
              <div className="title center">
                <Line />
                <h2><span className='red'>Key</span> <span>player</span></h2>
                <Line />
              </div>
              <div className="container">
                <div className="map-container">
                  <div>
                    <Style.DescriptionContainer>
                      <p className='subtitle'>1- Houthi/Ansarullah (Partisans of God):</p>
                      <p>The Houthis are just another name for the Zaidis of Yemen, adopted in 2004 when the Yemeni army and air force supported by Saudi Arabia suppressed a rebellion started in the Saada (the Houthis heartland) which killed “Hussien al-Houthi”, who died a martyr since he was representing his district in a struggle to recognize economic marginalization by Ali Abdullah Saleh who was making diplomatic concessions to the Saudis.</p>
                    </Style.DescriptionContainer>
                    <div className="descMap">
                      <Style.DescriptionContainer>
                        <p>Légende if légende is needed of course, otherwise on peut just delete ce paragraphe</p>
                        <p>Légende if légende is needed of course, otherwise on peut just delete ce paragraphe</p>
                      </Style.DescriptionContainer>
                      <Image src="/img/img-map-yemen.png" alt="Map of Yemen" />
                    </div>
                    <Style.DescriptionContainer>
                      <p>Politicians have described the Houthis as “a revivalist movement” backed by Tehran as a part of the Saudi-Iran Cold War [8] and the majority of Western media has been pushing the same narrative, however history has shown us that the Zaydis have existed in Northern Yemen for over a millenium - so it’s difficult to argue for any kind of “revival”. The Zaydis are yet again refusing to bend the knee, the Ottoman infidel label has simply evolved to the American classification of terrorrist organisation. It is important to note that the Houthis are resident Zaydi Shiite Muslims, who have significant differences in their doctrine and beliefs from the Shiites who govern Iran.</p>
                      <p>From an article by Bruce Riedel from the Brookings Institution on February 2, 2022:</p>
                    </Style.DescriptionContainer>
                  </div>
                </div>
                <Style.Quote>
                  <blockquote>
                    <p>“The Houthis have won the war in Yemen, defeating their opponents in the civil war, the Saudis who intervened in 2015 against them, and the United States which backed the Saudis. It is a remarkable accomplishment for a militia group with no air force or navy.”</p>
                  </blockquote>
                  <figcaption>
                    <cite>Bruce Riedel <a href=""  target="_blank">[Brookings]</a></cite>
                  </figcaption>
                </Style.Quote>
                <Style.DateContainer>
                  <Style.DescriptionContainer>
                      <p className="subtitle">2- Saudi Arabia, UAE, US:</p>
                      <p>Most of the countries that participated in the early days of the coalition have withdrawn from the war, with the exception of Saudi Arabia and the UAE backed by the US and most recently Israel. <a href=""  target="_blank">[Reuters]</a></p>
                      <p>According to SIPIRI Saudi Arabia is the largest arms importer in the world with a budget of more than $50bn on its military, 79% of its military imports come from the US, 9% from UK, and 4% from France.</p>
                      <p>The sale of weapons from the US to Saudi Arabia has steadily increased since 2015 and doubled in 2017 when Donald Trump's became president: </p>
                </Style.DescriptionContainer>
                  <div></div>
                </Style.DateContainer>
                <Graph src={'https://datawrapper.dwcdn.net/Dg9fh/3'}></Graph>
                <Style.DescriptionContainer>
                  <p>Hadi remains in Saudi Arabia and is still recognized by everyone except his constituents as the President of Yemen. The Saudis command the coalition and Hadi’s government, while the Emiratis continue training separist movements in the south. <a href=""  target="_blank">[France24]</a></p>
                </Style.DescriptionContainer>
              </div>
            </Style.Section> 
          </Section>  
          <Image className="fullWidth" src="/img/img-yemen-market.jpg" alt="Photo of Yemen market" />
          <Section id="section5" data-index="5">  
            <Style.Section className='impacts'>
              <div className="title center">
                <Line />
                <h2><span className='red'>Impacts</span> <span>of the war</span></h2>
                <Line />
              </div>
              <div className="container">
                <Style.DateContainer>
                  <Style.DescriptionContainer>
                    <p className='subtitle'>Casualties</p>
                    <p>According to a statement from the president and CEO of the U.S. Institute of Peace Lise Grande to Congress in April 2021:</p>
                    <p>“The conflict in Yemen has lasted 6 years, resulted in the world’s worst humanitarian crisis, wrecked public institutions, created new forms of corruption, fragmented political power and turned Yemen into a failed state likely to collapse, or worse, split into independent, separately administered zones. The humanitarian crisis, in particular, is so shocking in its magnitude, it is hard even to describe”. <a href=""  target="_blank">[U.S. POLICY ON YEMEN]</a></p>
                    <p>Since 2015, the Saudi-led coalition has carried out more than 24000 air raids using precision-guided munitions made by the US, killing and wounding more than 18,000 Yemenis:</p>
                  </Style.DescriptionContainer>
                </Style.DateContainer>
                <Graph src={'https://datawrapper.dwcdn.net/mYf4m/5/'}></Graph>
                <Style.DateContainer>
                  <Style.DescriptionContainer>
                    <p>A third of these bombings have been against civilian targets, the intent being to destroy public infrastructure such as food markets, which are essential for the population’s survival. <a href=""  target="_blank">[12]</a></p>
                    <p>As a part of this campaign we are making public the largest documentation project of massacres committed by the coalition in Yemen, recorded since March 26 2015.</p>
                  </Style.DescriptionContainer>
                </Style.DateContainer>
                <Style.DateContainer>
                  <Style.DescriptionContainer>
                    <p>A third of these bombings have been against civilian targets, the intent being to destroy public infrastructure such as food markets, which are essential for the population’s survival. <a href=""  target="_blank">[12]</a></p>
                    <p>As a part of this campaign we are making public the largest documentation project of massacres committed by the coalition in Yemen, recorded since March 26 2015.</p>
                  </Style.DescriptionContainer>
                </Style.DateContainer>
                <div className="map-raids">
                  <Image src="/img/img-saudi-coalition-air-raids.jpg" alt="Map of Saudi coalition air raids" />
                  <Style.DescriptionContainer>
                    <p className='legend'>Map of Civilian Fatalities from Saudi Coalition Air Raids until January 2022</p>
                  </Style.DescriptionContainer>
                  <LinkPage href="/map">Discover the map</LinkPage>
                </div>
                <Style.DateContainer>
                  <Style.DescriptionContainer>
                    <p className='subtitle'>Food scarcity</p>
                    <p>In 2015 the UN adopted a resolution for a maritime blockade to be imposed in the Red Sea. Warships intercepting cargo shipments heading for Yemen have been causing significant delays in humanitarian aid intended to reach Yemenis.</p>
                    <p>In addition to which AP reporters have proven that thousands of families are not receiving international food aid because shipments have been seized by the Houthis or the coalition.</p>
                    <p>In Sep 2021, the head of the UN food agency announced that 16 million Yemenis “are marching towards starvation”, he added that lack of funding may lead to the death of hundreds of thousands of children.</p>
                    <p>According to UNOCHA the situation in Yemen in 2022 is expected to worsen, with more than 20.7 million person in need of humanitarian assistance, and the funding coverage required to reach 16 million person is 3.9 billion dollars, the same funding required last year but unfortunately 57% of this funduing was secured.</p>
                  </Style.DescriptionContainer>
                  <div className='youtube'>
                    <iframe className='media' src="https://www.youtube.com/embed/wgjOv7ExqnM" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                  </div>
                </Style.DateContainer>
              </div>
            </Style.Section>
          </Section>  
          <Section id="section6" data-index="6">  
            <Style.Section className='action'>
              <div className="title center">
                <Line />
                <h2><span className='red'>What can we do?</span> <span>Stop the blockade</span></h2>
                <Line />
              </div>
              <div className="container">
                <Style.DescriptionContainer>
                  <p>According to the article of Bruce Riedel from the Brookings Institution on February 2, 2022:</p>
                </Style.DescriptionContainer>
                <Style.Quote>
                  <blockquote>
                    <p>“The urgent imperative is to halt the blockade and get aid to the Yemeni people. That should be America’s priority.”</p>
                  </blockquote>
                  <figcaption>
                    <cite>Bruce Riedel <a href="" target="_blank">[Brookings]</a></cite>
                  </figcaption>
                </Style.Quote>
                <div className="helping">
                  <p>Sign our petition for Congress to pressure Saudi Arabia to stop the war on Yemen and end the siege.</p>
                  <a href='https://chng.it/YSz8sBy8hg' target="_blank">Stop the blockade</a>
                </div>
              </div>
            </Style.Section> 
          </Section> 
        </Style.Content>
        <Summary />
      </Style.ContentContainer>
    </Style.ArticleContainer>
  )
}
