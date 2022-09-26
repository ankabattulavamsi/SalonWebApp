import React from 'react'
import Categories from '../../components/Categories/Categories'
import TestimonialSection from '../../components/TestimonialSection/TestimonialSection';
import TeamSection from './../../components/TeamSection/TeamSection';

export default function HomePage() {
  return (
    <>
    <div style={{height:"900px",backgroundColor:"red"}}>HomePage</div>
    <div id="categories" style={{height:"900px",backgroundColor:"yellow"}}><Categories/></div>
    <div id="teamsection" style={{height:"900px",backgroundColor:"blue"}}><TeamSection/></div>
    <div id="testimonialsection">
        <TestimonialSection />
      </div>
    
    </>
  )
}
