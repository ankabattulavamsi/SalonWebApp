export interface Offer {
  id: number;
  discount: number;
  title: string;
  description: string;
  imgUrl: any;
  bgColor: string;
}
export const offerArray: Offer[] = [
  {
    id: 1,
    discount: 30,
    title: "Hair Style",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit 
  `,

    imgUrl: require("../../../assets/images/OffersSection/LandingPageOffer1.png"),
    bgColor: "#ebf9fe",
  },
  {
    id: 2,
    discount: 10,
    title: "Beard",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit 
  `,
    imgUrl: require("../../../assets/images/OffersSection/LandingPageOffer2.png"),

    bgColor: "#e3e3e3",
  },
  {
    id: 3,
    discount: 15,
    title: "Beard + Hair style",
    description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit.
   Quod voluptate 
  `,
    imgUrl: require("../../../assets/images/OffersSection/LandingPageOffer1.png"),

    bgColor: "#e3e3e3",
  },
];
