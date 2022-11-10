/** @format */

export interface BuesnessInputFields {
	id: number;
	label: string;
	name: string;
	icon: any;
	type: string;
	placeholder: string;
	required: boolean;
	value?: any;
}

export interface optionsBanksname {
	id: number;
	title: string;
	icon?: string;
}
export const profileImage: string = require("../../../assets/images/BuesnessProfile/profile.png");
export const storeImage: string = require("../../../assets/images/BuesnessProfile/store.png");
export const userImage: string = require("../../../assets/images/BuesnessProfile/user.png");
export const locationImage: string = require("../../../assets/images/BuesnessProfile/location_on.png");
export const noteImage: string = require("../../../assets/images/BuesnessProfile/note_add.png");
export const emailImage: string = require("../../../assets/images/BuesnessProfile/email.png");
export const yblImage: string = require("../../../assets/images/BuesnessProfile/@ybI.png");
export const profilesImage: string = require("../../../assets/images/BuesnessProfile/profile.jpg");

export const optionsBankName: optionsBanksname[] = [
	{
		id: 123456,
		title: "State bank of India",
		icon: require("../../../assets/images/BuesnessProfile/sbi-logo.png"),
	},
	{
		id: 123457,
		title: "HDFC",
		icon: require("../../../assets/images/BuesnessProfile/hdfc-logo.png"),
	},
	{
		id: 123458,
		title: "axis",
		icon: require("../../../assets/images/BuesnessProfile/axis-log.png"),
	},
	{
		id: 123459,
		title: "icic",
		icon: require("../../../assets/images/BuesnessProfile/icic.png"),
	},
];

export const optionsStateName = [
	{ id: 1, title: "maharastra" },
	{ id: 2, title: "telangana" },
	{ id: 3, title: "uttar pardesh" },
];

// export interface InputFields {
//   bname: string;
//   owner: string;
//   address: string;
//   email: string;
//   GSTIN: string;
// }
// export const businputfields: BuesnessInputFields[] = [
//   {
//     id: 1,
//     label: "Business name",
//     name: "bname",
//     icon: require("../assets/BuesnessProfile/store.png"),
//     type: "text",
//     placeholder: "Beauty salon shop",
//     required: true,
//   },
//   {
//     id: 2,
//     label: "Owner name",
//     name: "owner",
//     icon: require("../assets/BuesnessProfile/user.png"),
//     type: "text",
//     placeholder: "Steve Smith",
//     required: true,
//   },
//   {
//     id: 3,
//     label: "Address",
//     name: "address",
//     icon: require("../assets/BuesnessProfile/location_on.png"),
//     type: "textarea",
//     placeholder:
//       "121 KING STREET Eddy street and Gough  street, San Francisco, CA 94109",
//     required: true,
//   },
//   {
//     id: 4,
//     label: "GSTIN No",
//     name: "GSTIN",
//     icon: require("../assets/BuesnessProfile/note_add.png"),
//     type: "text",
//     placeholder: "Example123",
//     required: true,
//   },
//   {
//     id: 5,
//     label: "Email",
//     name: "email",
//     icon: require("../assets/BuesnessProfile/email.png"),
//     type: "email",
//     placeholder: "stevesmithexample@gmail.com",
//     required: true,
//   },
// ];
