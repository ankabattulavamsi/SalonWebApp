export interface TestmonialData {
  id: number;
  title: string;
  type: string;
  imageUrl: string;
  comments: string;
}

export const testmonialData: TestmonialData[] = [
  {
    id: 1,
    title: "Tony Shaw",
    type: "customer",
    imageUrl: require("../../../assets/images/TestomonialSection/testMemmebr1.png"),
    comments: `
    Lorem ipsum dolor sit amet consectetur
     adipisicing elit. Laborum sunt aliquam cum.
      Dignissimos id quod quas aut aperiam perferendis, 
      a quaerat! Incidunt non culpa fugit voluptas esse. 
      Exercitationem, vitae laboriosam.
    `,
  },
  {
    id: 2,
    title: "jenny Shaw",
    type: "customer",
    imageUrl: require("../../../assets/images/TestomonialSection/testMember2.png"),
    comments: `
    Lorem ipsum dolor sit amet consectetur
     adipisicing elit. Laborum sunt aliquam cum.
      Dignissimos id quod quas aut aperiam perferendis, 
      a quaerat! Incidunt non culpa fugit voluptas esse. 
      Exercitationem, vitae laboriosam.
    `,
  },
  {
    id: 3,
    title: "jenny shaw",
    type: "customer",
    imageUrl: require("../../../assets/images/TestomonialSection/testMemmebr1.png"),
    comments: `
Lorem ipsum dolor sit amet consectetur
 adipisicing elit. Laborum sunt aliquam cum.
  Dignissimos id quod quas aut aperiam perferendis, 
  a quaerat! Incidunt non culpa fugit voluptas esse. 
  Exercitationem, vitae laboriosam.
`,
  },
  {
    id: 4,
    title: "tonnyt low",
    type: "customer",
    imageUrl: require("../../../assets/images/TestomonialSection/testMember2.png"),
    comments: `
    Lorem ipsum dolor sit amet consectetur
     adipisicing elit. Laborum sunt aliquam cum.
      Dignissimos id quod quas aut aperiam perferendis, 
      a quaerat! Incidunt non culpa fugit voluptas esse. 
      Exercitationem, vitae laboriosam.
    `,
  },
];

export const bgImage: string = require("../../../assets/images/TestomonialSection/bg.png");
export const bgColorImage: string = require("../../../assets/images/TestomonialSection/bg_color.png");
