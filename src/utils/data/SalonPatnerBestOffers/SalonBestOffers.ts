/** @format */

import offerImg1 from "../../../assets/images/SalonPatnerBestOffersImg/Rectangle64(1).png";
import offerImg2 from "../../../assets/images/SalonPatnerBestOffersImg/Rectangle64.png";

export interface SalonOfferProps {
	id: number;
	offerImage: string;
	headingOff: string;
	price: string;
	dissPrice: string;
	description: string;
}
export const SalonBestOffersData: SalonOfferProps[] = [
	{
		id: 1,
		offerImage: offerImg2,
		headingOff: "Hair Color 20% Off",
		price: "240",
		dissPrice: "150",
		description:
			"it is a long established fact that a reader will be distracted by the readable content of a page when looking",
	},
	{
		id: 2,
		offerImage: offerImg1,
		headingOff: "Hair Color 20% Off",
		price: "240",
		dissPrice: "150",
		description:
			"it is a long established fact that a reader will be distracted by the readable content of a page when looking",
	},
];
