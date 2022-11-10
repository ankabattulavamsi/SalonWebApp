/** @format */ 

import ServeImg from '../../../assets/images/CustomerHairServiceImgs/Rectangle146.png'
import ServeImg1 from '../../../assets/images/CustomerHairServiceImgs/Rectangle146(1).png'
import ServeImg2 from '../../../assets/images/CustomerHairServiceImgs/Rectangle146(2).png'
import ServeImg3 from '../../../assets/images/CustomerHairServiceImgs/Rectangle146(3).png'
import ServeImg4 from '../../../assets/images/CustomerHairServiceImgs/Rectangle146(4).png'
import ServeImg5 from '../../../assets/images/CustomerHairServiceImgs/Rectangle146(5).png'
import ServeImg6 from '../../../assets/images/CustomerHairServiceImgs/Rectangle146(6).png'

import brideImg from '../../../assets/images/CustomerBridalServeImgs/Rectangle146(7).png'
import brideImg1 from '../../../assets/images/CustomerBridalServeImgs/Rectangle146(8).png'
import brideImg2 from '../../../assets/images/CustomerBridalServeImgs/Rectangle146(9).png'
import brideImg3 from '../../../assets/images/CustomerBridalServeImgs/Rectangle146(10).png'
import brideImg4 from '../../../assets/images/CustomerBridalServeImgs/Rectangle146(11).png'
import brideImg5 from '../../../assets/images/CustomerBridalServeImgs/Rectangle63.png'
import brideImg6 from '../../../assets/images/CustomerBridalServeImgs/Rectangle146(12).png'
import brideImg7 from '../../../assets/images/CustomerBridalServeImgs/Rectangle146(13).png'

import kidscut from '../../../assets/images/CustomerKidsHairCutImgs/27d1a1673345ead82f00ecc801253d7a.jpg'
import kidscut1 from '../../../assets/images/CustomerKidsHairCutImgs/33bbb1a1eb69c8697617e2f516c3a6f9.jpg'
import kidscut2 from '../../../assets/images/CustomerKidsHairCutImgs/6315e1af72acf71d843f683d64da388c.jpg'
import kidscut3 from '../../../assets/images/CustomerKidsHairCutImgs/boy-haircuts-trends-red-medium-hair.jpg'
import kidscut4 from '../../../assets/images/CustomerKidsHairCutImgs/boy-haircuts-trends-sade-parted-long-hair.jpg'
import kidscut5 from '../../../assets/images/CustomerKidsHairCutImgs/Rectangle146.png'
import kidscut6 from '../../../assets/images/CustomerKidsHairCutImgs/skin-fade-with-fringe-for-little-boys.jpg'
import kidscut7 from '../../../assets/images/CustomerKidsHairCutImgs/6315e1af72acf71d843f683d64da388c.jpg'


import color from '../../../assets/images/HairColorImgs/8-chic-blonde-hair-color-idea-Cd3-rNepbFg.webp'
import color1 from '../../../assets/images/HairColorImgs/colorful-balayage-ombre-4.webp'
import color2 from '../../../assets/images/HairColorImgs/msnataliejean_best summer hair color ideas.webp'
import color3 from '../../../assets/images/HairColorImgs/best-hair-color-for-me-soft-pink-min.jpg'
import color4 from '../../../assets/images/HairColorImgs/Blonde-Hair-Colors-for-Fall-3.jpg'
import color5 from '../../../assets/images/HairColorImgs/12-medium-length-light-pink-hair-color.jpg'
import color6 from '../../../assets/images/HairColorImgs/yellow-orange-ig-teasesalonoc.jpg'


import face from '../../../assets/images/FacialImages/156184314-beautiful-young-woman-with-facial-mask-in-beauty-salon-girl-getting-beauty-treatment-facial-care-by-.webp'
import face1 from '../../../assets/images/FacialImages/Basic-facial.jpg'
import face2 from '../../../assets/images/FacialImages/download.jpeg'
import face3 from '../../../assets/images/FacialImages/golden-facial.jpg'
import face4 from '../../../assets/images/FacialImages/images.jpeg'
import face5 from '../../../assets/images/FacialImages/lakme-argan-oil1534400017.jpg'
import face6 from '../../../assets/images/FacialImages/organic-facial-500x500.png'
import face7 from '../../../assets/images/FacialImages/top-5.jpg'

import spa from '../../../assets/images/SpaImgs/benessere_fb.jpg'
import spa1 from '../../../assets/images/SpaImgs/body-to-body-massage-in-kalkaji-delhi-1100x460.jpg'
import spa2 from '../../../assets/images/SpaImgs/close-the-spa-massage-man-receiving-facial_1e244926-e811-11e9-939f-ba4a7f73df5c.jpg'
import spa3 from '../../../assets/images/SpaImgs/download.jpeg'
import spa4 from '../../../assets/images/SpaImgs/images (1).jpeg'
import spa5 from '../../../assets/images/SpaImgs/images.jpeg'
import spa6 from '../../../assets/images/SpaImgs/Spa3.webp'
import spa7 from '../../../assets/images/SpaImgs/tzoo.hd.33758.18074.spa-gift-certificate.jpg'


export interface CategoryData {
    id: number;
    image: string;
    title: string;
    serveData: any[];
  }


export const categoryAllData: CategoryData[] = [
    {
      id: 1,
      title: "Hair Cut",
      image: require("../../../assets/images/customer/haircut.jfif"),
      serveData : [
        {
            id: 1,
            brideServeImg: ServeImg, 
            heading: 'Faux Hawk',
            dissPrice: '150', 
            price: '240',
            description: 'it is a long established fact that a reader will be distracted by the readable content of a page when looking', 
        }, 
        {
            id: 2,
            brideServeImg: ServeImg1, 
            heading: 'Quiff',
            dissPrice: '150', 
            price: '240',
            description: 'it is a long established fact that a reader will be distracted by the readable content of a page when looking', 
        }, 
        {
            id: 3,
            brideServeImg: ServeImg2, 
            heading: 'Side Parted',
            dissPrice: '150', 
            price: '240',
            description: 'it is a long established fact that a reader will be distracted by the readable content of a page when looking', 
        }, 
        {
            id: 4,
            brideServeImg: ServeImg3, 
            heading: 'Side Fringe',
            dissPrice: '150', 
            price: '240',
            description: 'it is a long established fact that a reader will be distracted by the readable content of a page when looking', 
        }, 
        {
            id: 5,
            brideServeImg: ServeImg4, 
            heading: 'Undercut',
            dissPrice: '150', 
            price: '240',
            description: 'it is a long established fact that a reader will be distracted by the readable content of a page when looking', 
        }, 
        {
            id: 6,
            brideServeImg: ServeImg5, 
            heading: 'Side Parted Short',
            dissPrice: '150', 
            price: '240',
            description: 'it is a long established fact that a reader will be distracted by the readable content of a page when looking', 
        }, 
        {
            id: 7,
            brideServeImg: ServeImg6, 
            heading: 'Buzzcut',
            dissPrice: '150', 
            price: '240',
            description: 'it is a long established fact that a reader will be distracted by the readable content of a page when looking', 
        }, 
    ] 
    },
    {
      id: 2,
      title: "Kids Haircut",
      image: require("../../../assets/images/customer/kids_haircut.jfif"),
      serveData :  [
        {
            id: 15,
            brideServeImg: kidscut, 
            heading: 'Hair Cut',
            dissPrice: '300', 
            price: '400',
            description: 'it is a long established fact that a reader will be distracted by the readable content of a page when looking', 
        }, 
        {
            id: 16,
            brideServeImg: kidscut1, 
            heading: 'Side Cut',
            dissPrice: '180', 
            price: '240',
            description: 'it is a long established fact that a reader will be distracted by the readable content of a page when looking', 
        }, 
        {
            id: 17,
            brideServeImg: kidscut2, 
            heading: 'Quiff',
            dissPrice: '90', 
            price: '120',
            description: 'it is a long established fact that a reader will be distracted by the readable content of a page when looking', 
        }, 
        {
            id: 18,
            brideServeImg: kidscut3, 
            heading: 'Spike',
            dissPrice: '150', 
            price: '240',
            description: 'it is a long established fact that a reader will be distracted by the readable content of a page when looking', 
        }, 
        {
            id: 19,
            brideServeImg: kidscut4, 
            heading: 'Flower Cut',
            dissPrice: '150', 
            price: '240',
            description: 'it is a long established fact that a reader will be distracted by the readable content of a page when looking', 
        }, 
        {
            id: 20,
            brideServeImg: kidscut5, 
            heading: 'Spike',
            dissPrice: '150', 
            price: '240',
            description: 'it is a long established fact that a reader will be distracted by the readable content of a page when looking', 
        }, 
        {
            id: 21,
            brideServeImg: kidscut6, 
            heading: 'Design',
            dissPrice: '150', 
            price: '240',
            description: 'it is a long established fact that a reader will be distracted by the readable content of a page when looking', 
        }, 
        {
            id: 22,
            brideServeImg: kidscut7, 
            heading: 'Side Cut',
            dissPrice: '150', 
            price: '240',
            description: 'it is a long established fact that a reader will be distracted by the readable content of a page when looking', 
        }, 
    ] 
    },
    {
      id: 3,
      title: "Hair Color",
      image: require("../../../assets/images/customer/hair_color.png"),
      serveData: [
        {
            id: 22,
            brideServeImg: color, 
            heading: 'Light Brown',
            dissPrice: '300', 
            price: '400',
            description: 'it is a long established fact that a reader will be distracted by the readable content of a page when looking', 
        }, 
        {
            id: 23,
            brideServeImg: color1, 
            heading: 'Light Green',
            dissPrice: '180', 
            price: '240',
            description: 'it is a long established fact that a reader will be distracted by the readable content of a page when looking', 
        }, 
        {
            id: 24,
            brideServeImg: color2, 
            heading: 'White & Black',
            dissPrice: '90', 
            price: '120',
            description: 'it is a long established fact that a reader will be distracted by the readable content of a page when looking', 
        }, 
        {
            id: 25,
            brideServeImg: color3, 
            heading: 'Pink',
            dissPrice: '150', 
            price: '240',
            description: 'it is a long established fact that a reader will be distracted by the readable content of a page when looking', 
        }, 
        {
            id: 26,
            brideServeImg: color4, 
            heading: 'White',
            dissPrice: '150', 
            price: '240',
            description: 'it is a long established fact that a reader will be distracted by the readable content of a page when looking', 
        }, 
        {
            id: 27,
            brideServeImg: color5, 
            heading: 'WhitePink',
            dissPrice: '150', 
            price: '240',
            description: 'it is a long established fact that a reader will be distracted by the readable content of a page when looking', 
        }, 
        {
            id: 28,
            brideServeImg: color6, 
            heading: 'Yellow',
            dissPrice: '150', 
            price: '240',
            description: 'it is a long established fact that a reader will be distracted by the readable content of a page when looking', 
        }, 
        {
            id: 29,
            brideServeImg: color3, 
            heading: 'Pink',
            dissPrice: '150', 
            price: '240',
            description: 'it is a long established fact that a reader will be distracted by the readable content of a page when looking', 
        }, 
    ] 
    
    },
    {
      id: 4,
      title: "Bridal",
      image: require("../../../assets/images/customer/bridal.jfif"),
      
      serveData: [
    {
        id: 7,
        brideServeImg: brideImg, 
        heading: 'Hair Cut',
        dissPrice: '300', 
        price: '400',
        description: 'it is a long established fact that a reader will be distracted by the readable content of a page when looking', 
    }, 
    {
        id: 8,
        brideServeImg: brideImg1, 
        heading: 'Hair Spa',
        dissPrice: '180', 
        price: '240',
        description: 'it is a long established fact that a reader will be distracted by the readable content of a page when looking', 
    }, 
    {
        id: 9,
        brideServeImg: brideImg2, 
        heading: 'Facial',
        dissPrice: '90', 
        price: '120',
        description: 'it is a long established fact that a reader will be distracted by the readable content of a page when looking', 
    }, 
    {
        id: 10,
        brideServeImg: brideImg3, 
        heading: 'Pedicure',
        dissPrice: '150', 
        price: '240',
        description: 'it is a long established fact that a reader will be distracted by the readable content of a page when looking', 
    }, 
    {
        id: 11,
        brideServeImg: brideImg4, 
        heading: 'Make Up',
        dissPrice: '150', 
        price: '240',
        description: 'it is a long established fact that a reader will be distracted by the readable content of a page when looking', 
    }, 
    {
        id: 12,
        brideServeImg: brideImg5, 
        heading: 'Hair Color',
        dissPrice: '150', 
        price: '240',
        description: 'it is a long established fact that a reader will be distracted by the readable content of a page when looking', 
    }, 
    {
        id: 13,
        brideServeImg: brideImg6, 
        heading: 'Nails',
        dissPrice: '150', 
        price: '240',
        description: 'it is a long established fact that a reader will be distracted by the readable content of a page when looking', 
    }, 
    {
        id: 14,
        brideServeImg: brideImg7, 
        heading: 'Eyebrow',
        dissPrice: '150', 
        price: '240',
        description: 'it is a long established fact that a reader will be distracted by the readable content of a page when looking', 
    }, 
] 
    },
    {
      id: 5,
      title: "Facial",
      image: require("../../../assets/images/customer/facial.jfif"),
      serveData: [
        {
            id: 30,
            brideServeImg: face, 
            heading: 'Galvanic Facial',
            dissPrice: '300', 
            price: '400',
            description: 'it is a long established fact that a reader will be distracted by the readable content of a page when looking', 
        }, 
        {
            id: 31,
            brideServeImg: face1, 
            heading: 'Hydra Facial',
            dissPrice: '180', 
            price: '240',
            description: 'it is a long established fact that a reader will be distracted by the readable content of a page when looking', 
        }, 
        {
            id: 32,
            brideServeImg: face2, 
            heading: 'Microneedling',
            dissPrice: '90', 
            price: '120',
            description: 'it is a long established fact that a reader will be distracted by the readable content of a page when looking', 
        }, 
        {
            id: 33,
            brideServeImg: face3, 
            heading: 'Gold File Facial',
            dissPrice: '150', 
            price: '240',
            description: 'it is a long established fact that a reader will be distracted by the readable content of a page when looking', 
        }, 
        {
            id: 34,
            brideServeImg: face5, 
            heading: 'Classic Facial',
            dissPrice: '150', 
            price: '240',
            description: 'it is a long established fact that a reader will be distracted by the readable content of a page when looking', 
        }, 
        {
            id: 35,
            brideServeImg: face6, 
            heading: 'Galvanic Facial',
            dissPrice: '150', 
            price: '240',
            description: 'it is a long established fact that a reader will be distracted by the readable content of a page when looking', 
        }, 
        {
            id: 36,
            brideServeImg: face7, 
            heading: 'Deep Cleansing',
            dissPrice: '150', 
            price: '240',
            description: 'it is a long established fact that a reader will be distracted by the readable content of a page when looking', 
        }, 
        {
            id: 37,
            brideServeImg: face7, 
            heading: 'Oxigen Facial',
            dissPrice: '150', 
            price: '240',
            description: 'it is a long established fact that a reader will be distracted by the readable content of a page when looking', 
        }, 
    ] 
    },
    {
      id: 6,
      title: "Spa",
      image: require("../../../assets/images/customer/spa.jfif"),
      serveData: [
        {
            id: 38,
            brideServeImg: spa, 
            heading: 'Davinci Spa',
            dissPrice: '300', 
            price: '400',
            description: 'it is a long established fact that a reader will be distracted by the readable content of a page when looking', 
        }, 
        {
            id: 39,
            brideServeImg: spa1, 
            heading: 'Mountain Spa',
            dissPrice: '180', 
            price: '240',
            description: 'it is a long established fact that a reader will be distracted by the readable content of a page when looking', 
        }, 
        {
            id: 40,
            brideServeImg: spa2, 
            heading: 'Sonder Spa',
            dissPrice: '90', 
            price: '120',
            description: 'it is a long established fact that a reader will be distracted by the readable content of a page when looking', 
        }, 
        {
            id: 41,
            brideServeImg: spa3, 
            heading: 'Spa Meraki ',
            dissPrice: '150', 
            price: '240',
            description: 'it is a long established fact that a reader will be distracted by the readable content of a page when looking', 
        }, 
        {
            id: 42,
            brideServeImg: spa4, 
            heading: 'Jayus Spa',
            dissPrice: '150', 
            price: '240',
            description: 'it is a long established fact that a reader will be distracted by the readable content of a page when looking', 
        }, 
        {
            id: 43,
            brideServeImg: spa5, 
            heading: 'Fernwhe Spa',
            dissPrice: '150', 
            price: '240',
            description: 'it is a long established fact that a reader will be distracted by the readable content of a page when looking', 
        }, 
        {
            id: 44,
            brideServeImg: spa6, 
            heading: 'Glow Spa',
            dissPrice: '150', 
            price: '240',
            description: 'it is a long established fact that a reader will be distracted by the readable content of a page when looking', 
        }, 
        {
            id: 45,
            brideServeImg: spa7, 
            heading: 'Purpose Spa',
            dissPrice: '150', 
            price: '240',
            description: 'it is a long established fact that a reader will be distracted by the readable content of a page when looking', 
        }, 
    ] 
    },
  ];