import moment from "moment";

// function getPastAndFuture7Days() {
//   let arr: {}[] = [];

//   const past7Days: any = [0, 1, 2, 3, 4, 5, 6, 7, 8]
//     .map((index) => {
//       const date = new Date();
//       date.setDate(date.getDate() - (index + 1));
//       return date;
//     })
//     .reverse();

//   past7Days.map((e: any) => {
//     let date = e.getUTCDate();
//     let day = e.toLocaleString("en-us", {
//       weekday: "long",
//     });
//     let dateObject = {
//       day,
//       date,
//     };
//     return arr.push(dateObject);
//   });

//   //future 7 Days
//   const future7Days = [0, 1, 2, 3, 4, 5, 6, 7].map((index) => {
//     const date = new Date();
//     date.setDate(date.getDate() + index);
//     return date;
//   });

//   future7Days.map((e) => {
//     let date = e.getUTCDate();
//     let day = e.toLocaleString("en-us", {
//       weekday: "long",
//     });
//     let dateObject = {
//       day,
//       date,
//     };
//     return arr.push(dateObject);
//   });
//   return arr;
// }

function getPastAndFuture7Days() {
  let daysFuture = [];
  let daysPast = [];
  for (let i = 0; i < 6; i++) {
    let day = moment().subtract(i, "days");
    let date = day.date();
    let days = day.format("dddd");
    daysPast.push({ date, days });
  }

  for (let i = 1; i <= 7; i++) {
    let day = moment().add(i, "days");
    let date = day.date();
    let days = day.format("dddd");
    daysFuture.push({ date, days });
  }
  return [...daysPast.reverse(), ...daysFuture];
}

export const datesArray = getPastAndFuture7Days();
