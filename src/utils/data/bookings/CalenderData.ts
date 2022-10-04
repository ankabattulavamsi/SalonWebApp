const calenderData = () => {
  var dateArray: any = [];
  for (let i = 1; i < 32; i++) {
    let date = new Date(`2020/05/${i}`).getUTCDate();
    let day = new Date(`2020/05/${i}`).toLocaleString("en-us", {
      weekday: "long",
    });
    const dateObj = {
      date,
      day,
    };
    dateArray.push(dateObj);
  }

  return dateArray;
};

export const datesArray = calenderData();
