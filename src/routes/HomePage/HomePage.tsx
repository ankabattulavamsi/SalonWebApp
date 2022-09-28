import React from 'react'
import Categories from '../../components/Categories/Categories'
import OurBestServices from '../../components/OurBestServices/OurBestServices';
import TeamSection from './../../components/TeamSection/TeamSection';

export default function HomePage() {
  return (
    <>
    <div style={{height:"900px",backgroundColor:"red"}}>HomePage</div>
    <div style={{marginBottom: '25px', marginTop: '15px'}}>
      <OurBestServices />
    </div> 
    <div id="categories" style={{height:"900px",backgroundColor:"yellow"}}><Categories/></div>
    <div id="teamsection" style={{height:"900px",backgroundColor:"blue"}}><TeamSection/></div>
    </>
  )
}
