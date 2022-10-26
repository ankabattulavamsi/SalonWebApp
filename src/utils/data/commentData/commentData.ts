/** @format */

import profile1 from "../../../assets/images/customer/profile1.png";
import profile2 from "../../../assets/images/customer/profile2.png";
import profile3 from "../../../assets/images/customer/profile3.png";

export interface CommentDataProps {
	id: number;
	image: string;
	comment: string;
	name: string;
	time: string;
}
export const commentData: CommentDataProps[] = [
	{
		id: 1,
		image: profile1,
		name: "Steve Smith",
		time: "06:13pm",
		comment:
			"established fact that a reader will be distracted by the readable content of a page when looking at its layout. Lorem ipsum dolor sit amet, consect",
	},
	{
		id: 2,
		image: profile2,
		name: "John Doe",
		time: "06:13pm",
		comment:
			"established fact that a reader will be distracted by the readable content of a page when looking at its layout. Lorem ipsum dolor sit amet, consect",
	},
	{
		id: 3,
		image: profile3,
		name: "Harry Smith",
		time: "06:13pm",
		comment:
			"established fact that a reader will be distracted by the readable content of a page when looking at its layout. Lorem ipsum dolor sit amet, consect",
	},
];
