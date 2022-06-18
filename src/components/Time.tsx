/** @jsxImportSource theme-ui */

interface Props {
  class: string
  time: string | null | undefined
}

export default function Time(props: Props) {
  if (props.time !== null && props.time !== undefined && props.time !== "") {
    if(props.class === "plantime") {
      return <div className="time" sx={{ textAlign: ["left", "left", "center"], gridColumn: ["1 / 9, 1 / 3"]}}>{props.time}</div>
    } else {
      return <div className="time" sx={{ textAlign: "center", gridColumn: ["9 / 17", "3 / 5"]}}>{props.time}</div>
    }
  }
  if(props.class === "plantime") {
    return <div className="time" sx={{ textAlign: ["left", "left", "center"], gridColumn: ["1 / 9, 1 / 3"]}}>{props.time}</div>
  } else {
    return <div className="time" sx={{ textAlign: "center", gridColumn: ["9 / 17", "3 / 5"]}}>{props.time}</div>
  }
}
