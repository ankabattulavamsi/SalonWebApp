/** @format */

import sliderImage1 from "../../../assets/images/SliderImage/slide1.png";
import sliderImage2 from "../../../assets/images/customer/shopNearbyImage2.png";
import sliderImage3 from "../../../assets/images/customer/shopNearbyImage3.png";
import sliderImage4 from "../../../assets/images/customer/shopNearbyImage4.png";
import sliderImage5 from "../../../assets/images/customer/shopNearbyImage5.png";
interface SliderImage {
	id: number;
	image: string;
}
export const sliderImages: SliderImage[] = [
	{
		id: 1,
		image: sliderImage1,
	},
	{
		id: 2,
		image: sliderImage2,
	},
	{
		id: 3,
		image: sliderImage3,
	},
	{
		id: 4,
		image: sliderImage4,
	},
	{
		id: 5,
		image: sliderImage5,
	},
];
