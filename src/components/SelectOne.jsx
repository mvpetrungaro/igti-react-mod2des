import React, { useState } from 'react'
import { v4 as uuid } from 'uuid'

export default function SelectOne({
  label = 'Select one:',
  options = [],
  onSelect = null,
}) {
  const [selected, setSelected] = useState(options[0]?.value)

  function handleChange(event) {
    setSelected(event.target.value)

    if (onSelect) {
      onSelect(options.find((opt) => opt.id === event.target.value))
    }
  }

  return (
    <div className="flex justify-center">
      <label className="mr-2">{label}</label>
      <select value={selected} onChange={handleChange} className="border-2">
        {options.map((v, i) => {
          return (
            <option key={v.id ?? uuid()} label={v.name} value={v.id}></option>
          )
        })}
      </select>
    </div>
  )
}
