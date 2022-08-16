import React from 'react'
import { parseNumber } from '../utils/utils'

export default function Measure({ label = 'Measure:', value = 0 }) {
  return (
    <div className="flex flex-row">
      <label className="mr-2 font-semibold">{label}</label>
      <span>{parseNumber(value)}</span>
    </div>
  )
}
