import moment from "moment";

function getPastAndFuture7Days() {
  // let daysFuture = [];
  // let daysPast = [];
  // for (let i = 0; i < 60; i++) {
  //   let day = moment().subtract(i, "days");
  //   let date = day.date();
  //   let weekday = day.format("dddd");
  //   daysPast.push({ date, weekday });
  // }

  // for (let i = 1; i <= 60; i++) {
  //   let day = moment().add(i, "days");
  //   let date = day.date();
  //   let weekday = day.format("dddd");
  //   daysFuture.push({ date, weekday });
  // }
  // return [...daysPast.reverse(), ...daysFuture];
  let daysFuture = [];
  let daysPast = [];
  for (let i = 0; i < 60; i++) {
    //to substract days from today
    let day = moment().subtract(i, "days");
    let date = day.date();
    //to add days from today
    let dayFuture = moment().add(i, "days");
    let dateFuture = dayFuture.date();
    let weekday = day.format("dddd");
    daysPast.push({ date, weekday });
    daysFuture.push({ date: dateFuture, weekday });
  }

  let daysfuture1 = daysFuture.slice(1);
  return [...daysPast.reverse(), ...daysfuture1];
}

export const datesArray = getPastAndFuture7Days();
