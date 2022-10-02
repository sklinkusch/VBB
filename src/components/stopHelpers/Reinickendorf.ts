export function getSchönholz() {
  return "S Schönholz [Bus Provinzstr.]"
}

export function getWaidmannslust(lineName: string) {
  switch (lineName) {
    case "222": return "S Waidmannslust [Bus Waidmannsluster Damm]"
    case "322": return "S Waidmannslust [Bus J.-Jaurès-Str.]"
    case "N22": return "S Waidmannslust [Bus Waidmannsluster Damm]"
    default: return "S Waidmannslust [Bus Waidmannsluster Damm]"
  }
}

export function getWilhelmsruh() {
  return "S Wilhelmsruh [Bus Kopenhagener Str.]"
}