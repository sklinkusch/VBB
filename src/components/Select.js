import React from 'react';

export default function Select(props) {
  return (
    <React.Fragment>
      <select
        placeholder={'Please choose a stop from the list'}
        onChange={event => {
          const id = event.target.value;
          const stop = props.selection.filter(stop => stop.id === id)[0];
          return props.handleChange(stop);
        }}
      >
        {props.selection.map(stop => (
          <option key={`${stop.id}`} value={stop.id}>
            {stop.name}
          </option>
        ))}
      </select>
    </React.Fragment>
  );
}
