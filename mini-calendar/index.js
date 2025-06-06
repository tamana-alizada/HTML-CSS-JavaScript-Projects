const monthNameEl = document.getElementById("month-name");
const dayNameEl = document.getElementById("day-name");
const dayNumberEl = document.getElementById("day-number");
const yearEl = document.getElementById("year");

const date = new Date();
console.log(date);
const dayNumber = date.getDate(); // for day date
const dayName = date.getDay(); // for day name starts at monday = 1
const month = date.getMonth(); // for month starts at januray = 0
const year = date.getFullYear(); // full year
console.log(dayNumber);
console.log(dayName);
console.log(month);
console.log(year);
monthNameEl.innerHTML = date.toLocaleString("en", {
  month: "long"
});
dayNameEl.innerHTML = date.toLocaleString("en", {
  weekday: "long"
});
dayNumberEl.innerHTML = date.getDate();
yearEl.innerText = date.getFullYear();