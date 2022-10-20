/** @format */

export interface CustomerData {
	id: number;
	heading: string;
	price1: string;
	price2: string;
	description: string;
	imgeUrl?: string;
}
export interface CategoryData {
	id: number;
	image: string;
	title: string;
}
export interface ShopNearbyData {
	id: number;
	mainImage: string;
	profileImage: string;
	title: string;
	place: string;
	review: string;
}
export const customerData: CustomerData[] = [
	{
		id: 1,
		heading: "Latest Hairstyles For Girls With Short",
		price1: "₹150",
		price2: "₹240",
		description:
			"here are many variations of passages of Lorem Ipsum available, but the majority suffered",
		imgeUrl: require("../../../assets/images/customer/artist1.jpg"),
	},
	{
		id: 2,
		heading: "Latest Hairstyles For Girls With Short",
		price1: "₹112",
		price2: "₹212",
		description:
			"here are many variations of passages of Lorem Ipsum available, but the majority suffered",
		imgeUrl: require("../../../assets/images/customer/artist2.jpg"),
	},
	{
		id: 3,
		heading: "Latest Hairstyles For Girls With Short",
		price1: "₹112",
		price2: "₹212",
		description:
			"here are many variations of passages of Lorem Ipsum available, but the majority suffered",
		imgeUrl: require("../../../assets/images/customer/artist3.jfif"),
	},
	{
		id: 4,
		heading: "Latest Hairstyles For Girls With Short",
		price1: "₹112",
		price2: "₹212",
		description:
			"here are many variations of passages of Lorem Ipsum available, but the majority suffered",
		imgeUrl: require("../../../assets/images/customer/artist4.jpg"),
	},
	{
		id: 5,
		heading: "Latest Hairstyles For Girls With Short",
		price1: "₹112",
		price2: "₹212",
		description:
			"here are many variations of passages of Lorem Ipsum available, but the majority suffered",
		imgeUrl: require("../../../assets/images/customer/artist5.webp"),
	},
];

export const categoryData: CategoryData[] = [
	{
		id: 1,
		title: "Hair Cut",
		image: require("../../../assets/images/customer/haircut.jfif"),
	},
	{
		id: 2,
		title: "Kids Haircut",
		image: require("../../../assets/images/customer/kids_haircut.jfif"),
	},
	{
		id: 3,
		title: "Hair Color",
		image: require("../../../assets/images/customer/hair_color.png"),
	},
	{
		id: 4,
		title: "Bridal",
		image: require("../../../assets/images/customer/bridal.jfif"),
	},
	{
		id: 5,
		title: "Facial",
		image: require("../../../assets/images/customer/facial.jfif"),
	},
	{
		id: 6,
		title: "Spa",
		image: require("../../../assets/images/customer/spa.jfif"),
	},
];
export const shopNearbyData: ShopNearbyData[] = [
	{
		id: 1,
		mainImage: require("../../../assets/images/customer/shopNearbyImg1.png"),
		profileImage: require("../../../assets/images/customer/profile1.png"),
		title: "Lakeme Salon",
		place:
			"Lakme Salon, Plot No, I 26, “ Neha Villa” First Floor, Tatya Tope Nagar, Nagpur, Maharashtra 440015",
		review: "(3.2) 65 Reviews...",
	},
	{
		id: 2,
		mainImage: require("../../../assets/images/customer/shopNearbyImage2.png"),
		profileImage: require("../../../assets/images/customer/profile2.png"),
		title: "Lakeme Salon",
		place:
			"Lakme Salon, Plot No, I 26, “ Neha Villa” First Floor, Tatya Tope Nagar, Nagpur, Maharashtra 440015",
		review: "(3.2) 65 Reviews...",
	},
	{
		id: 3,
		mainImage: require("../../../assets/images/customer/shopNearbyImage3.png"),
		profileImage: require("../../../assets/images/customer/profile3.png"),
		title: "Hair Habits Salon Nagpur",
		place:
			"Lakme Salon, Plot No, I 26, “ Neha Villa” First Floor, Tatya Tope Nagar, Nagpur, Maharashtra 440015",
		review: "(3.2) 65 Reviews...",
	},
	{
		id: 4,
		mainImage: require("../../../assets/images/customer/shopNearbyImage4.png"),
		profileImage: require("../../../assets/images/customer/profile4.png"),
		title: "Let's Transform Salon",
		place:
			"Lakme Salon, Plot No, I 26, “ Neha Villa” First Floor, Tatya Tope Nagar, Nagpur, Maharashtra 440015",
		review: "(3.2) 65 Reviews...",
	},
	{
		id: 5,
		mainImage: require("../../../assets/images/customer/shopNearbyImage5.png"),
		profileImage: require("../../../assets/images/customer/profile1.png"),
		title: "Lakeme Salon",
		place:
			"Lakme Salon, Plot No, I 26, “ Neha Villa” First Floor, Tatya Tope Nagar, Nagpur, Maharashtra 440015",
		review: "(3.2) 65 Reviews...",
	},
	{
		id: 6,
		mainImage: require("../../../assets/images/customer/shopNearbyImage6.png"),
		profileImage: require("../../../assets/images/customer/profile2.png"),
		title: "Hair Habits Salon Nagpur",
		place:
			"Lakme Salon, Plot No, I 26, “ Neha Villa” First Floor, Tatya Tope Nagar, Nagpur, Maharashtra 440015",
		review: "(3.2) 65 Reviews...",
	},
	{
		id: 7,
		mainImage: require("../../../assets/images/customer/shopNearbyImage7.png"),
		profileImage: require("../../../assets/images/customer/profile3.png"),
		title: "Let's Transform Salon",
		place:
			"Lakme Salon, Plot No, I 26, “ Neha Villa” First Floor, Tatya Tope Nagar, Nagpur, Maharashtra 440015",
		review: "(3.2) 65 Reviews...",
	},
];
