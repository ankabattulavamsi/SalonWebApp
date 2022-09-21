import React, { Fragment } from 'react'

export default function Navbar() {
  return (
    <Fragment>
        <div style={{position:"fixed",width:"100%"}}>
            <div style={{backgroundColor:"black" , color:"white", display:"flex",justifyContent:"space-around", height:"50px"}}>
            <a  style={{color:"white"}} href="/">hOME</a>
            <a  style={{ color:"white"}} href="#categories">Categories</a>
            <a  style={{color:"white"}} href="#teamsection">TeamSection</a>
            </div>
            </div>
    </Fragment>
  )
}




// make the navbar responsive as needed for all pages (lading page, customer & salooon)

// You can divide the navbar into three sections namely inorder to use in all pages
// 1.logo part,
// 2.menu items (home,blogs, teams etc)
// 3. profile & for icons  