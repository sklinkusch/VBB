const stopObject = require("vbb-stations/full.json");
stopObject["900000470117"].name = "Cottbus, Beuchstr.";
stopObject["900000210600"].name = "Wustermark, Brunnenplatz";
// console.log(stopObject["900000470117"]);
const stopsUnsorted = Object.keys(stopObject).map(key => {
  return { id: stopObject[key].id, name: stopObject[key].name };
});
// console.log(`stopsUnsorted: ${stopsUnsorted.length}`);
export default stopsUnsorted;
