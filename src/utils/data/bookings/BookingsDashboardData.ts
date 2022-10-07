// import ProfilePicture1 from "../assets/ProfilePicture1.png";
import ProfilePicture1 from "../../../assets/images/SalonBookings/ProfilePicture1.png";
import ProfilePicture3 from "../../../assets/images/SalonBookings/ProfilePicture2.png";
import ProfilePicture2 from "../../../assets/images/SalonBookings/ProfilePicture3.png";
import ProfilePicture4 from "../../../assets/images/SalonBookings/ProfilePicture4.png";

export interface BookingCardProps {
  title: string;
  subTitile: string;
  cost: number;
  services: string[];
  img: any;
}

export const bookingSectionData = [
  {
    id: 1,
    title: "James Bond",
    subTitle: "0D11721633",
    cost: 900,
    services: ["Hair Color", "Body Massage", "Shaving", "Hair Cut"],
    img: ProfilePicture1,
  },
  {
    id: 2,
    title: "Smith Warner",
    subTitle: "0D11721633",
    cost: 900,
    services: ["Hair Color", "Body Massage", "Shaving", "Hair Cut"],
    img: ProfilePicture2,
  },
  {
    id: 3,
    title: "John Doe",
    subTitle: "0D11721633",
    cost: 900,
    services: ["Hair Color", "Body Massage", "Shaving", "Hair Cut"],
    img: ProfilePicture3,
  },
  {
    id: 4,
    title: "Kaira Smith",
    subTitle: "0D11721633",
    cost: 900,
    services: ["Hair Color", "Body Massage", "Shaving", "Hair Cut"],
    img: ProfilePicture4,
  },
];
