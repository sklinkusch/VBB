import React from "react";

export default function Filter(props) {
  const { filterField, filterSelector, filterData } = props;
  return (
    <div>
      <input
        type="text"
        placeholder="Enter string & Enter to filter departures"
        ref={filterField}
        onKeyPress={event => props.filterData(event)}
      />
      <select ref={filterSelector} onChange={filterData}>
        <option value="OR">OR</option>
        <option value="AND">AND</option>
      </select>
    </div>
  );
}
