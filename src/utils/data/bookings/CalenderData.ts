import moment from "moment";

function getPastAndFuture7Days() {
  let daysFuture = [];
  let daysPast = [];
  for (let i = 0; i < 6; i++) {
    let day = moment().subtract(i, "days");
    let date = day.date();
    let weekday = day.format("dddd");
    daysPast.push({ date, weekday });
  }

  for (let i = 1; i <= 7; i++) {
    let day = moment().add(i, "days");
    let date = day.date();
    let weekday = day.format("dddd");
    daysFuture.push({ date, weekday });
  }
  return [...daysPast.reverse(), ...daysFuture];
}

export const datesArray = getPastAndFuture7Days();
