import React from "react";

export default function Select(props) {
  return (
    <React.Fragment>
      <select
        onChange={event =>
          props.handleChange(
            event.target.value,
            event.target.options[event.target.selectedIndex].text
          )
        }
      >
        {props.selection.map(stop => (
          <option key={stop.id} value={stop.id}>
            {stop.name}
          </option>
        ))}
      </select>
    </React.Fragment>
  );
}
