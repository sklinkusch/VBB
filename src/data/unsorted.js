const stopObject = require("vbb-stations/full.json");
// const vals = Object.values(stopObject).map(item => ({id: item.id, name: item.name})).filter(item => item.name.includes("Waltersdorfer Str"))
// console.log(vals)
stopObject["900000161517"].name = "Berlin, Alfred-Kowalke-Str.";
stopObject["900000150050"].name = "Berlin, Große-Leege-Str./Bahnhofstr.";
stopObject["900000140713"].name = "Berlin, Betriebshof Weißensee";
stopObject["900000162504"].name = "Berlin, Blockdammweg";
stopObject["900000120013"].name = "Berlin, Holteistr.";
stopObject["900000152006"].name = "Berlin, Prendener Str.";
stopObject["900000160006"].name = "Berlin, Heizkraftwerk Klingenberg";
stopObject["900000180513"].name = "Berlin, Janitzkystr.";
stopObject["900000110029"].name = "Berlin, Karl-Lade-Str.";
stopObject["900000180010"].name = "Berlin, Mittelheide";
stopObject["900000181505"].name = "Berlin, Weiskopffstr.";
stopObject["900000186505"].name = "Berlin, Königsseestr.";
stopObject["900000160538"].name = "Berlin, Scheffelstr.";
stopObject["900000150515"].name = "Berlin, Orankestrand";
stopObject["900000160511"].name = "Berlin, Paul-Junius-Str.";
stopObject["900000100506"].name = "Berlin, Hannoversche Str.";
stopObject["900000181501"].name = "Berlin, Volkspark Wuhlheide";
stopObject["900000196003"].name = "Berlin, Grottewitzstr.";
// console.log(stopObject["900000470117"]);
const stopsUnsorted = Object.keys(stopObject).map(key => {
  return { id: stopObject[key].id, name: stopObject[key].name };
});
// console.log(`stopsUnsorted: ${stopsUnsorted.length}`);
export default stopsUnsorted;
