import { blogsdata } from "../../models/navbar_interface";
import blog1 from '../../../assets/images/Blogimages/blogimg-1.png';
import blog2 from '../../../assets/images/Blogimages/blogimg-2.png';
import blog3 from '../../../assets/images/Blogimages/blogimg-3.png';

export const blogsData:blogsdata[] = [
    {
        id:1, 
        image: blog1,
        name:'Men Haircut new style', 
        date:'25', month:'June', 
        description:'Lorem ipsum dolor sit amet,cadipiscing elit, sed do eiusmod tempor incididunt ut labore et',
    },
    {
        id: 2,
        image: blog2, 
        name:'eyebrow shapes', 
        date:'19', month:'Oct', 
        description:'Lorem ipsum dolor sit amet,cadipiscing elit, sed do eiusmod tempor incididunt ut labore et',
    },
    {
        id: 3,
        image: blog3, 
        name:'Top 5 benefits facial', 
        date:'15', month:'June', 
        description:'Lorem ipsum dolor sit amet,cadipiscing elit, sed do eiusmod tempor incididunt ut labore et',
    }
]