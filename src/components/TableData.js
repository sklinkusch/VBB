import React from "react";
import Error from "./Error";
import Tablehead from "./Tablehead";
import StopName from "./StopName";
import Tablebody from "./Tablebody";

export default function TableData(props) {
  const { stop, error, data, duration } = props;
  return (
    <div>
      <StopName stop={stop} />
      {error && <Error />}
      <Tablehead />
      <Tablebody data={data} duration={duration} />
    </div>
  );
}
