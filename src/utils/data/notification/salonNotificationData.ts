import customer1 from "../../../assets/images/Notification/customer1.png";
import customer2 from "../../../assets/images/Notification/customer2.png";
import customer3 from "../../../assets/images/Notification/customer3.png";
import customer4 from "../../../assets/images/Notification/customer4.png";
import customer5 from "../../../assets/images/Notification/customer5.png";
export interface notify {
  text: string;
  time: any;
  image: any;
}
export const notificationData: notify[] = [
  {
    text: "john doe appointment booked afternoon-3pm",
    time: "12:10pm",
    image: customer1,
  },
  {
    text: "smith appointment booked afternoon-6pm",
    time: "03:00pm",
    image: customer2,
  },
  {
    text: "Elizabeth Olsen appointment booked afternoon-3pm",
    time: "12:10pm",
    image: customer3,
  },
  {
    text: "emma christy appointment booked afternoon-3pm",
    time: "12:10pm",
    image: customer4,
  },
  {
    text: "Paper Towns appointment booked afternoon-3pm",
    time: "03:00pm",
    image: customer5,
  },
];
