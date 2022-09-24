export interface TestmonialData {
  id: number;
  title: string;
  type: string;
  imageUrl: any;
}

export const testmonialData: TestmonialData[] = [
  {
    id: 1,
    title: "Tony Shaw",
    type: "customer",
    imageUrl: require("../../../assets/images/TestomonialSection/testMemmebr1.png"),
  },
  {
    id: 2,
    title: "jenny Shaw",
    type: "customer",
    imageUrl: require("../../../assets/images/TestomonialSection/testMember2.png"),
  },
  {
    id: 3,
    title: "jenny low",
    type: "customer",
    imageUrl: require("../../../assets/images/TestomonialSection/testMemmebr1.png"),
  },
  {
    id: 4,
    title: "jenny low",
    type: "customer",
    imageUrl: require("../../../assets/images/TestomonialSection/testMember2.png"),
  },
];

export const bgImage :string = require("../../../assets/images/TestomonialSection/bg.png")
