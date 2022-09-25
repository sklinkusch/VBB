/** @jsxImportSource theme-ui */

type Props = {
  class: string,
  time: string | undefined | null
}

export default function Time(props: Props) {
  if (props.time !== null && props.time !== undefined && props.time !== "") {
    if (props.class === "plantime") {
      return <div className="time" sx={{ textAlign: ["left", "left", "center"], gridColumn: ["1 / span 8", "1 / span 2"]}}>{props.time}</div>
    }
    return <div className="time" sx={{textAlign: "center", gridColumn: ["9 / span 8", "3 / span 2"] }}>{props.time}</div>;
  }
  if (props.class === "plantime") {
    return <div className="time" sx={{ textAlign: ["left", "left", "center"], gridColumn: ["1 / span 8", "1 / span 2"]}}>&nbsp;</div>
  }
  return <div className="time" sx={{textAlign: "center", gridColumn: ["9 / span 8", "3 / span 2"] }}>&nbsp;</div>;
}
