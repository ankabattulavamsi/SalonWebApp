// const calenderData = () => {
//   var dateArray: any = [];
//   for (let i = 2; i < 32; i++) {
//     let date = new Date(`2020/05/${i}`).getUTCDate();
//     let day = new Date(`2020/05/${i}`).toLocaleString("en-us", {
//       weekday: "long",
//     });
//     const dateObj = {
//       date,
//       day,
//     };
//     dateArray.push(dateObj);
//   }

//   return dateArray;
// };

export interface DateProps {
  date: number;
  day: string;
}

function getPastAndFuture7Days() {
  let arr: {}[] = [];

  const past7Days: any = [0, 1, 2, 3, 4, 5, 6, 7, 8]
    .map((index) => {
      const date = new Date();
      date.setDate(date.getDate() - (index + 1));
      return date;
    })
    .reverse();

  past7Days.map((e: any) => {
    let date = e.getUTCDate();
    let day = e.toLocaleString("en-us", {
      weekday: "long",
    });
    let dateObject = {
      day,
      date,
    };
    return arr.push(dateObject);
  });

  const future7Days = [0, 1, 2, 3, 4, 5, 6, 7].map((index) => {
    const date = new Date();
    date.setDate(date.getDate() + index);
    return date;
  });
  future7Days.map((e) => {
    let date = e.getUTCDate();
    let day = e.toLocaleString("en-us", {
      weekday: "long",
    });
    let dateObject = {
      day,
      date,
    };
    return arr.push(dateObject);
  });
  return arr;
}

export const datesArray = getPastAndFuture7Days();
