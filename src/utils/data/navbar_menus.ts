import { landingMenus, salonMenus } from "../models/navbar_interface";


export const landingMenu:landingMenus[] = [
    {id:1, path:'/', title:'Home'},
    {id:2, path:'#about', title:'About us'},
    {id:3, path:'#offers', title:'Offers'},
    {id:4, path:'#services', title:'Services'},
    {id:5, path:'#gallery', title:'Gallery'},
    {id:6, path:'#team', title:'Team'},
    {id:7, path:'#testimonial', title:'Testimonials'},
    {id:8, path:'#blog', title:'Blog'}
];

export const SalonMenu:salonMenus[] = [
    {id:1, path:'/salon', title:'Home'},
    {id:2, path:'/salon/dashboard', title:'Dashboard'},
    {id:3, path:'salon/booking', title:'Booking'},
    {id:4, path:'salon/category', title:'Category'},
    {id:5, path:'salon/offers', title:'Offers'},
    {id:6, path:'salon/team', title:'Team'},
    {id:7, path:'salon/blog', title:'Blog'}
];