import React from 'react'

export default function Filter() {
  return (
    <div>
      <input type="text" placeholder="Enter string to filter departures" />
      <select>
        <option value="OR">OR</option>
        <option value="AND">AND</option>
      </select>
    </div>
  )
}
