export interface TeamData {
  id: number;
  title: string;
  position: string;
  imgeUrl?: string;
}
export const teamdata: TeamData[] = [
  {
    id: 1,
    title: "Emma Watson",
    position: "hiarcut & Message specialists",
    imgeUrl: require("../../../assets/images/expertTeamSection/member3.png"),
  },
  {
    id: 2,
    title: "Jame Franco",
    position: "hiarcut  specialists",
    imgeUrl: require("../../../assets/images/expertTeamSection/member2.png"),
  },
  {
    id: 3,
    title: "Jame Franco",
    position: "hiarcut  specialists",
    imgeUrl: require("../../../assets/images/expertTeamSection/member1.png"),
  },
];
