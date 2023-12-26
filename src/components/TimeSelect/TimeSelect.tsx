import React from 'react'

type Prop = {
  time: string
  setTime: Function
}

const TimeSelect = ({ time, setTime }: Prop) => {
  return (
    <div>
      <input type="datetime-local" defaultValue={time} onChange={(e) => setTime(e.target.value)} />
    </div>
  )
}

export default TimeSelect