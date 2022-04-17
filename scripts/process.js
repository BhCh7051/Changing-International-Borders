const fs = require("fs");
const moment = require("moment");
const uniq = require("lodash.uniq");
const input = require("../data/countries-lifetime");

const startDates = [];
const featureMap = [];
let i = 0;
input.features.forEach((f) => {
  if (f.properties.gwsyear != -1) {
    const start = `${f.properties.gwsday}-${f.properties.gwsmonth}-${f.properties.gwsyear}`;
    const end = `${f.properties.gweday}-${f.properties.gwemonth}-${f.properties.gweyear}`;
    // const diffDays = end.diff(start, 'days')
    // const diffMonths = end.diff(start, 'months')
    // const diffYears = end.diff(start, 'years')
    (f.properties.id = i), i++;

    // f.properties.diffDays = diffDays
    // f.properties.diffMonths = diffMonths
    // f.properties.diffYears = diffYears
    // f.properties.start_str = start.format('D-M-YYYY')
    // f.properties.end_str = end.format('D-M-YYYY')

    startDates.push(start);
    startDates.push(end);

    featureMap.push({
      id: i - 1,
      start: start,
      end: end,
    });
  } else {
    f.properties.start_str = null;
    f.properties.end_str = null;
  }
});

// startDates.sort((a, b) => a.isAfter(b) ? 1 : -1)
// const strdates = []
// startDates.forEach(s => {
//   strdates.push(s.format('D-M-YYYY'))
// })

// console.log(JSON.stringify(input))
// console.log(JSON.stringify(uniq(strdates)))
// console.log(JSON.stringify(featureMap))
fs.writeFile("ip.json", JSON.stringify(input), function (err, result) {
  if (err) console.log("error", err);
});
fs.writeFile("fs.json", JSON.stringify(featureMap), function (err, result) {
  if (err) console.log("error", err);
});
