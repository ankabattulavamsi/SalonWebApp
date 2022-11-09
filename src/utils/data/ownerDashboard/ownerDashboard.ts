/** @format */

import profileImg from "../../../assets/images/OwnerDashboardCharts/profits 1.png";
import coustomerImg from "../../../assets/images/OwnerDashboardCharts/coustomer.png";
import bookingImg from "../../../assets/images/OwnerDashboardCharts/apointment.png";

export interface Cards {
	id: number;
	heading: string;
	description: string;
	image: any;
}

export const CardData: Cards[] = [
	{
		id: 1,
		heading: "5,25,600",
		description: "January Profits",
		image: profileImg,
	},
	{
		id: 2,
		heading: "250",
		description: "Total Coustomer",
		image: coustomerImg,
	},
	{
		id: 3,
		heading: "36",
		description: "Appointment Booked",
		image: bookingImg,
	},
];
