import React from 'react';

export default function StopName(props) {
  const { element, stop } = props;
  return element === 'h2' ? <h2>{stop.name}</h2> : <h3>{stop.name}</h3>;
}
