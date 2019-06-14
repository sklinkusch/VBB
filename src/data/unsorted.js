const stopObject = require("vbb-stations/full.json");
// console.log(stopObject["900000245025"]);
const stopsUnsorted = Object.keys(stopObject).map(key => {
  return { id: stopObject[key].id, name: stopObject[key].name };
});
console.log(`stopsUnsorted: ${stopsUnsorted.length}`);
export default stopsUnsorted;
