import React from 'react'
import { parseNumber, parsePercent } from '../utils/utils'

export default function Election({ election, elected }) {
  const electedClass = elected ? 'text-green-400' : 'text-yellow-400'

  return (
    <div className="flex flex-col w-60 h-60 shadow-md p-4 m-4 justify-around">
      <div className="flex flex-wrap justify-between items-center">
        <img
          src={`/img/${election.candidate.username}.png`}
          alt={election.candidate.username}
          className="w-20 h-20 rounded-full"
        />
        <div className="flex flex-col justify-around items-center">
          <span className={electedClass}>
            {parsePercent(election.votes / election.city.presence)}
          </span>
          <span>{parseNumber(election.votes)} votes</span>
        </div>
      </div>
      <div className="flex flex-col flex-wrap items-center text-xl">
        <span>{election.candidate.name}</span>
      </div>
      <div className="flex flex-col flex-wrap items-center">
        <span className={electedClass}>
          {elected ? 'Elected' : 'Not elected'}
        </span>
      </div>
    </div>
  )
}
