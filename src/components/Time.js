/** @jsx jsx */
import { jsx } from "theme-ui"

export default function Time(props) {
  const styles = props.class === "plantime" ? {textAlign: ["left", "left", "center"], gridColumn: ["1 / span 8", "1 / span 2"]} : {textAlign: "center", gridColumn: ["9 / span 8", "3 / span 2"] }
  if (props.time !== null && props.time !== undefined && props.time !== "") {
    return <div className="time" sx={{ ...styles }}>{props.time}</div>;
  }
  return <div className="time" sx={{ ...styles }}>&nbsp;</div>;
}
