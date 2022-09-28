import React from 'react'
import Categories from '../../components/Categories/Categories'
import Gallery from '../../components/Gallery/Gallery';
import TeamSection from './../../components/TeamSection/TeamSection';

export default function HomePage() {
  return (
    <>
    <div style={{height:"900px",backgroundColor:"red"}}>HomePage</div>
    <div id="categories" style={{height:"900px",backgroundColor:"yellow"}}><Categories/></div>
    <div id="teamsection" style={{height:"900px",backgroundColor:"blue"}}><TeamSection/></div>
    <div id="Gallery" style={{height:"900px",backgroundColor:"gray"}}><Gallery/></div>
    </>
  )
}
