import Categories from '../../components/Categories/Categories'
import OurFeature from '../../components/OurFatures/OurFeature';
import TeamSection from './../../components/TeamSection/TeamSection';

export default function HomePage() {
  return (
    <>
    <div style={{height:"900px",backgroundColor:"red"}}>HomePage
    </div>
    <div id="services" style={{height:"900px",backgroundColor:"yellow"}}><Categories/></div>
    <div id="teamsection" style={{height:"900px",backgroundColor:"blue"}}><TeamSection/></div>
    <div id='features'><OurFeature/></div>
    </>
  )
}
