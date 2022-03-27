import stopsUnsorted  from "./short.json"
// const stopObject = require("vbb-stations/full.json");
// const vals = Object.values(stopObject).map(item => ({id: item.id, name: item.name})).filter(item => item.name.includes("Waltersdorfer Str"))
// console.log(vals)
// const stopsUnsorted = Object.values(stopObject).reduce((acc, val) => {
//   const arr = [ ...acc ]
//   const { id, name } = val
//   if (id.includes(":")) {
//     const modKey = id.split(":")[2].replace(/^900/, "900000")
//     const obj = { id: modKey, name }
//     arr.push(obj)
//   } else {
//     const obj = { id, name }
//     arr.push(obj)
//   }
//   return arr
// }, [])
// console.log(`stopsUnsorted: ${stopsUnsorted.length}`);
export default stopsUnsorted;
