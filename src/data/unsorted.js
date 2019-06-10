const stopObject = require("vbb-stations/full.json");
const stopsUnsorted = Object.keys(stopObject).map(key => {
  return { id: stopObject[key].id, name: stopObject[key].name };
});
console.log(`stopsUnsorted: ${stopsUnsorted.length}`);
export default stopsUnsorted;
