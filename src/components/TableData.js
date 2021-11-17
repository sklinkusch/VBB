import React from 'react';
import Tablehead from './Tablehead';
import StopName from './StopName';
import Tablebody from './Tablebody';

export default function TableData(props) {
  const { stop, data, mode } = props;
  return (
    <div>
      <StopName stop={stop} element="h3" />
      <Tablehead mode={mode} />
      <Tablebody data={data} mode={mode} />
    </div>
  );
}
