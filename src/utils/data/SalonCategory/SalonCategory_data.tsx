/** @format */

import categoryImg1 from "../../../assets/images/SalonCategory/cateImg1.png";
import categoryImg2 from "../../../assets/images/SalonCategory/cateImg2.png";
import categoryImg3 from "../../../assets/images/SalonCategory/cateImg3.png";
import categoryImg4 from "../../../assets/images/SalonCategory/cateImg4.png";
import categoryImg5 from "../../../assets/images/SalonCategory/cateImg5.png";
import categoryImg6 from "../../../assets/images/SalonCategory/cateImg6.png";

interface SalonCategoryData {
	id: number;
	img: string;
	title: string;
	editButton: string;
	deleteButton: string;
}
export const salonCategoryData: SalonCategoryData[] = [
	{
		id: 1,
		img: categoryImg1,
		title: "Hair Cut",
		editButton: "Edit",
		deleteButton: "delete",
	},
	{
		id: 2,
		img: categoryImg2,
		title: "Kids Haircut",
		editButton: "Edit",
		deleteButton: "delete",
	},
	{
		id: 3,
		img: categoryImg3,
		title: "Hair Color",
		editButton: "Edit",
		deleteButton: "delete",
	},
	{
		id: 4,
		img: categoryImg4,
		title: "Bridal",
		editButton: "Edit",
		deleteButton: "delete",
	},
	{
		id: 5,
		img: categoryImg5,
		title: "Facial",
		editButton: "Edit",
		deleteButton: "delete",
	},
	{
		id: 6,
		img: categoryImg6,
		title: "Spa",
		editButton: "Edit",
		deleteButton: "delete",
	},
	{
		id: 7,
		img: categoryImg5,
		title: "Spa",
		editButton: "Edit",
		deleteButton: "delete",
	},
];
