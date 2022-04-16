import Grid from '../Grid/Grid'
import Header from '../Header/Header'
import { useRouter } from 'next/router'
import * as Style from './Article.syles'
import Summary from '../Summary/Summary';
import Title from '../Title/Title';
import Line from '../Line/Line';
import Image from '../image/image';
import IconArrow from '../icons/IconArrow';

export const ButtonStory = ({ srcImg, altImg, firstname, surname, ...props }) => {
  return <Style.ButtonStory {...props}>
    <div>
      <Image src={srcImg} alt={altImg} />
      <p><span>{ firstname }</span> <span>{ surname }</span></p>
    </div>
    <IconArrow />
  </Style.ButtonStory>
}

export default function Article() {
  const route = useRouter().route;
  return (
    <Style.ArticleContainer>
      <Style.Background></Style.Background>
      {/* <Grid /> */}
      <Style.ContentContainer>
        <Header route={route} />
        <Style.Content>
          <Style.SectionHero>
            <Title><span className="red">The Yemen</span> crisis in historical context</Title>
            <Line />
          </Style.SectionHero>
          <Style.SectionStories>
            <h3>Stories of 3 yemenis what is like to be in their shoes</h3>
            <ul>
              <li>
                <ButtonStory href="" srcImg="/img/img-portrait-ofra-haza.jpg" altImg="Portrait de Ofra Haza" firstname="Ofra" surname="Haza" />
              </li>
              <li>
                <ButtonStory href="" srcImg="/img/img-portrait-muhammad-al-gharsi.jpg" altImg="Portrait de Muhammad Al-Gharsi" firstname="Muhammad" surname="Al-Gharsi" />
              </li>
              <li>
                <ButtonStory href="" srcImg="/img/img-portrait-al-kindi.jpg" altImg="Portrait de Al Kindi" firstname="Al" surname="Kindi" />
              </li>
            </ul>
          </Style.SectionStories>
          <Style.SectionIntro>
            <div className='introContainer'>
              <h2>Introduction</h2>
              <Line />
              <Style.DescriptionContainer>
                <p>Yemen is a territory on the southern tip of the Arabian peninsula which 24 million people call home and which has been designated the world’s worst humanitarian crisis by the UN. Western media has been repeatedly blaming the Houthis, however few of these stories mention that the member countries of the UN Security Council (who are responsible for restoring peace in Yemen) have all sold weapons to Saudi Arabia. <a href="">[1]</a></p>
                <p>This essay puts a historical lens on the current crisis to give a different outlook on the current narrative. Yemen is a very old country with a rich history, full of foreign invasions being foiled by stubborn local resistance.</p>
                <p>But first, a few memorable historical facts:</p>
              </Style.DescriptionContainer>
            </div>
            <div className="listIntroContainer">
              <Style.ListNumber>
                <li>
                  <span className='numberList'>1</span>
                  <Style.DescriptionContainer>
                    <p>Did you know your Starbucks mocha takes its name from the town of al-Mukha in Yemen? For a few years Yemen was the sole coffee producer in the world. Fortunately for the planet the Dutch broke Yemen’s monopoly in the 18th century when they smuggled coffee trees out of the country and cultivated them in their own colonies.</p>
                  </Style.DescriptionContainer>
                </li>
                <li>
                  <span className='numberList'>2</span>
                  <Style.DescriptionContainer>
                    <p>Shibam is a walled desert city with mankind’s oldest (and therefore most sustainable) skyscrapers at 500 years old, built by stacking mud bricks and maintained by its few remaining residents.</p>
                  </Style.DescriptionContainer>
                </li>
                <li>
                  <span className='numberList'>3</span>
                  <Style.DescriptionContainer>
                    <p>Yemeni men wear Janbiyas as a symbol of honour. They are only unsheathed in extreme cases of conflict.</p>
                  </Style.DescriptionContainer>
                </li>
                <li>
                  <span className='numberList'>4</span>
                  <Style.DescriptionContainer>
                    <p>Yemen is widely acclaimed as the home of Bilqis, Queen of Saba. The ancient Sabean people who lived under her rule spoke an old Semitic language which is still used today on the island of Socotra.</p>
                  </Style.DescriptionContainer>
                </li>
                <li>
                  <span className='numberList'>5</span>
                  <Style.DescriptionContainer>
                    <p>Sanaa’s Old City is believed to have been built by Shem, the son of Noah, which would make it one of the world’s oldest cities at over two thousand years old.</p>
                  </Style.DescriptionContainer>
                </li>
              </Style.ListNumber>
              <Image src="/img/img-janbiyas.png" alt="Picture of janbiyas" />
            </div>
          </Style.SectionIntro>
          <Style.Section className='history'>
            <div className="title">
              <h2><span>A history</span> of invasion</h2>
              <Line />
            </div>
            <div className="history-container">
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
              <Style.Quote> {/* figure */}
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
          <Style.Section className='division'>
            <div className="title">
              <h2><span>Division into North</span> and South Yemen</h2>
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
        </Style.Content>
        <Summary />
      </Style.ContentContainer>
    </Style.ArticleContainer>
  )
}
