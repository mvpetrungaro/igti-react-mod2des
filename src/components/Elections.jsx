import React from 'react'
import Election from './Election'
import Measure from './Measure'

export default function Elections({ city, elections }) {
  return (
    <>
      <div className="flex flex-col m-4 border-2">
        <div className="flex flex-row justify-center">
          <h1 className="font-bold text-xl">Elections in {city.name}</h1>
        </div>
        <div className="flex flex-row flex-wrap justify-center space-x-4">
          <Measure label="Voting population:" value={city.votingPopulation} />
          <Measure label="Absence:" value={city.absence} />
          <Measure label="Presence:" value={city.presence} />
        </div>
      </div>
      <div className="flex flex-wrap justify-center">
        {elections &&
          elections
            .sort((a, b) => b.votes - a.votes)
            .map((e, i) => (
              <Election key={e.id} election={e} elected={i === 0} />
            ))}
      </div>
    </>
  )
}
