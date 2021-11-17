import { Hero } from '../components/Home/Hero'
import { Section } from '../components/Home/Section'
import { Info } from '../components/Home/Info'
import { OtherInfo } from '../components/Home/OtherInfo'
import { InfoAuction } from '../components/Home/InfoAuction'
import { Auction } from '../components/Home/Auction'
import { Looking } from '../components/Home/Looking'
import { Subscribe } from '../components/Home/Subscribe'

export function Home(){
  return (
    <>
      <Hero/>
      <Info/>
      <Section/>
      <OtherInfo/>
      <InfoAuction/>
      <Auction/>
      <Looking/>
      <Subscribe/>
      <br/><br/><br/><br/>
    </>
  )
}