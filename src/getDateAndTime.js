export default function getDateAndTime(date) {
  let dateAndTimeInfo = {};
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let months = [
    "	January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "	November",
    "December",
  ];
  let hours = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
  let minutes =
    date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
  dateAndTimeInfo = {
    ampm: date.getHours() >= 12 ? "PM" : "AM",
    strTime: hours + ":" + minutes,
    dayName: days[date.getDay()],
    day: date.getDate(),
    year: date.getFullYear(),
    month: months[date.getMonth()],
  };
  return dateAndTimeInfo;
}
