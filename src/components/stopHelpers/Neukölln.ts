// type Dir = string | null

export function getSonnenallee(id: string, lineName: string) {
  switch(id) {
    case "900000077106":
      switch(lineName) {
        case "M41":
        case "171":
          return "S Sonnenallee [Bus Sonnenallee]"
        case "N77":
          return "S Sonnenallee [Bus Saalestr.]"
        default:
          return "S Sonnenallee [Bus]"
      }
    case "900000077110":
      return "S Sonnenallee/Saalestr. [Bus Saalestr.]"
  }
}